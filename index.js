'use strict';

const _parseType1 = (data) => {
  let result = {};

  if (!data) {
    return result;
  }

  let _objects = data.split(/\,\ /);

  _objects.forEach((object) => {
    let _result = object.trim().split('=');
    if (_result[0] && _result[1] && _result[1].split(',').length === 1) {
      result[_result[0]] = _result[1];
    } else if (_result[0] && _result[1] && _result[1].split(',').length > 1) {
      result[_result[0]] = _result[1].split(',');
    }
  });

  return result;
};

const _parseType2 = (config, data) => {
  let result = {};
  let _truncatedRegEx = /\[TRUNCATED\]/;

  if (_truncatedRegEx.test(data) && config.TRUNCATED_RESPONSE_KEYS && config.TRUNCATED_RESPONSE_KEYS.length) {
    config.TRUNCATED_RESPONSE_KEYS.forEach((obj) => {
      let _regEx = new RegExp(`"${obj.key}"(:"?)(.*?)("?)(\,|})`);
      let _conversion = 'String';
      if (obj.type === 'Integer' || obj.type === 'Float') {
        _conversion = 'Number';
      } else if (obj.type === 'Boolean') {
        _conversion = 'Boolean';
      }

      result[obj.key] = data.match(_regEx) && data.match(_regEx).length ? (_conversion === 'Boolean' ? eval(_conversion + '(' + eval(JSON.stringify(data.match(_regEx)[2])) + ')') : eval(_conversion + '(' + JSON.stringify(data.match(_regEx)[2]) + ')')) : null;
      result.truncated = true;
    });
  } else if (_truncatedRegEx.test(data) && (!config.TRUNCATED_RESPONSE_KEYS || !config.TRUNCATED_RESPONSE_KEYS)) {
    result = {
      truncated: true
    };
  } else {
    try {
      result = JSON.parse(data);
    } catch (e) {
      result = {};
    }
  }

  return result;
};

const parseLogs = (config, logs) => {
  if (!config) {
    config = {};
  }

  if (!logs) {
    return null;
  }

  if (logs.messageType !== 'DATA_MESSAGE') {
    return null;
  }

  if (!logs.logEvents || !logs.logEvents.length) {
    return null;
  }

  const parseExps = {
    api_stage: /API Stage: (.*)/,
    request_id: /Verifying Usage Plan for request: (.{36})/,
    http_method: /HTTP Method: (.*?),/,
    http_resource_path: /Resource Path: (.*)/,
    request_path: /Method request path: (.*)/,
    request_query_string: /request query string: {(.*)}/,
    method_request_headers: /Method request headers: {(.*)}/,
    method_request_body: /Method request body before transformations: (.*)/,
    endpoint_request_uri: /Endpoint request URI: (.*)/,
    endpoint_request_headers: /Endpoint request headers: {(.*)}/,
    endpoint_request_body: /Endpoint request body after transformations: (.*)/,
    integration_latency: /Received response. Integration latency: (.*) ms/,
    endpoint_response_body: /Endpoint response body before transformations: (.*)/,
    endpoint_response_headers: /Endpoint response headers: {(.*)}/,
    method_response_body: /Method response body after transformations: (.*)/,
    method_response_headers: /Method response headers: {(.*)}/,
    method_status: /Method completed with status: (.*)/
  };

  let result = {};
  let _captureGroup = null;

  for (let l of logs.logEvents) {
    for (let exp in parseExps) {
      if (l.message.match(parseExps[exp])) {
        _captureGroup = l.message.match(parseExps[exp])[1];

        switch (exp) {
        case 'request_query_string':
        case 'endpoint_request_headers':
        case 'endpoint_response_headers':
        case 'method_response_headers':
        case 'method_request_body':
        case 'endpoint_request_body':
        case 'method_request_headers':
          result[exp] = _parseType1(_captureGroup);
          break;

        case 'endpoint_response_body':
        case 'method_response_body':
          result[exp] = _parseType2(config, _captureGroup);
          break;

        case 'integration_latency':
        case 'method_status':
          result[exp] = Number(_captureGroup);
          break;

        default:
          result[exp] = _captureGroup;
          break;
        }
      }
    }
  }

  result['request-start-time'] = new Date(logs.logEvents[0].timestamp);
  result['request-end-time'] = new Date(logs.logEvents[logs.logEvents.length - 1].timestamp);
  result['request-execution-duration'] = result['request-end-time'].getTime() - result['request-start-time'].getTime();
  result['@timestamp'] = result['request-start-time'].toISOString();

  return result;
};

module.exports = {
  parseLogs: parseLogs
};