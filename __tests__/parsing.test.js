const { parseLogs } = require("..");

test("parsing log events that is a key throttle log returns the correct results", () => {
  const logData = {
    messageType: "DATA_MESSAGE",
    owner: "958845080241",
    logGroup: "API-Gateway-Execution-Logs_uwe3g5jm54/Prod",
    logStream: "072b030ba126b2f4b2374f342be9ed44",
    subscriptionFilters: ["ship-logs"],
    logEvents: [
      {
        id: "34592803782802773986954514236420494137821591878455918592",
        timestamp: 1551194970161,
        message:
          "(4f3e3b0f-39db-11e9-9c2e-5bd7c2de5998) Extended Request Id: Vts2FFmArPEFh8g="
      },
      {
        id: "34592803782802773986954514236420494137821591878455918593",
        timestamp: 1551194970161,
        message:
          "(4f3e3b0f-39db-11e9-9c2e-5bd7c2de5998) Verifying Usage Plan for request: 4f3e3b0f-39db-11e9-9c2e-5bd7c2de5998. API Key:  API Stage: uwe3g5jm54/Prod"
      },
      {
        id: "34592803782825074732153044859562029856094240239961899010",
        timestamp: 1551194970162,
        message:
          "(4f3e3b0f-39db-11e9-9c2e-5bd7c2de5998) Key throttle limit exceeded for RestApi uwe3g5jm54, Stage Prod, Resource k0w8mc, HttpMethod POST. Limit: 1.00 Burst: 1"
      },
      {
        id: "34592803782825074732153044859562029856094240239961899011",
        timestamp: 1551194970162,
        message:
          "(4f3e3b0f-39db-11e9-9c2e-5bd7c2de5998) Method completed with status: 429"
      }
    ]
  };

  const results = parseLogs({}, logData);

  expect(results).toMatchObject({
    api_stage: "uwe3g5jm54/Prod",
    request_id: "4f3e3b0f-39db-11e9-9c2e-5bd7c2de5998",
    method_status: 429,
    "request-start-time": new Date("2019-02-26T15:29:30.161Z"),
    "request-end-time": new Date("2019-02-26T15:29:30.162Z"),
    "request-execution-duration": 1,
    "@timestamp": "2019-02-26T15:29:30.161Z",
    key_throttle: {
      limit: 1.0,
      burst: 1,
      resource: "k0w8mc",
      http_method: "POST"
    }
  });
});

it("parses log events", () => {
  const logData = {
    messageType: "DATA_MESSAGE",
    owner: "958845080241",
    logGroup: "API-Gateway-Execution-Logs_h733q2j6gb/Prod",
    logStream: "37a749d808e46495a8da1e5352d03cae",
    subscriptionFilters: ["ship-logs"],
    logEvents: [
      {
        id: "34592803862438735090907369479173649198409722060558761984",
        timestamp: 1551194973732,
        message:
          "(515f1e99-39db-11e9-9e96-01e5c04505b9) Extended Request Id: Vts2pH6ArPEFcuQ="
      },
      {
        id: "34592803862461035836105900102315184916682370422064742401",
        timestamp: 1551194973733,
        message:
          "(515f1e99-39db-11e9-9e96-01e5c04505b9) Verifying Usage Plan for request: 515f1e99-39db-11e9-9e96-01e5c04505b9. API Key: API Stage: h733q2j6gb/Prod"
      },
      {
        id: "34592803862461035836105900102315184916682370422064742402",
        timestamp: 1551194973733,
        message:
          "(515f1e99-39db-11e9-9e96-01e5c04505b9) API Key authorized because method 'POST /verifyReceipt' does not require API Key. Request will not contribute to throttle or quota limits"
      },
      {
        id: "34592803862461035836105900102315184916682370422064742403",
        timestamp: 1551194973733,
        message:
          "(515f1e99-39db-11e9-9e96-01e5c04505b9) Usage Plan check succeeded for API Key and API Stage h733q2j6gb/Prod"
      },
      {
        id: "34592803862483336581304430725456720634955018783570722820",
        timestamp: 1551194973734,
        message:
          "(515f1e99-39db-11e9-9e96-01e5c04505b9) Starting execution for request: 515f1e99-39db-11e9-9e96-01e5c04505b9"
      },
      {
        id: "34592803862483336581304430725456720634955018783570722821",
        timestamp: 1551194973734,
        message:
          "(515f1e99-39db-11e9-9e96-01e5c04505b9) HTTP Method: POST, Resource Path: /verifyReceipt"
      },
      {
        id: "34592803862483336581304430725456720634955018783570722822",
        timestamp: 1551194973734,
        message:
          "(515f1e99-39db-11e9-9e96-01e5c04505b9) Method request path: {}"
      },
      {
        id: "34592803862483336581304430725456720634955018783570722823",
        timestamp: 1551194973734,
        message:
          "(515f1e99-39db-11e9-9e96-01e5c04505b9) Method request query string: {}"
      },
      {
        id: "34592803862483336581304430725456720634955018783570722824",
        timestamp: 1551194973734,
        message:
          "(515f1e99-39db-11e9-9e96-01e5c04505b9) Method request headers: {Accept=application/json, text/plain, */*, Debug-Log-Enabled=false, User-Agent=python-requests/2.20.0, X-Forwarded-Proto=https, x-correlation-id=f82097ed-5302-4a98-8200-dad186b419be, X-Forwarded-For=18.130.162.42, Host=h733q2j6gb.execute-api.eu-west-2.amazonaws.com, X-Forwarded-Port=443, X-Amzn-Trace-Id=Self=1-5c755b5d-6cdced0b55e7998bc0251bcb;Root=1-5c755b5d-07b29b94e632d3da19d88789;Parent=61e6466ca210cdf8;Sampled=1, Content-Type=application/json;charset=utf-8, x-correlation-span-id=LUUMyTw58JG0vhnGfa}"
      },
      {
        id: "34592803862483336581304430725456720634955018783570722825",
        timestamp: 1551194973734,
        message:
          '(515f1e99-39db-11e9-9e96-01e5c04505b9) Method request body before transformations: {"receiptData":"82ca4c4f-26dd-4554-a11e-c3feb5324345"}'
      },
      {
        id: "34592803862483336581304430725456720634955018783570722826",
        timestamp: 1551194973734,
        message:
          "(515f1e99-39db-11e9-9e96-01e5c04505b9) Endpoint request URI: https://lambda.eu-west-2.amazonaws.com/2015-03-31/functions/arn:aws:lambda:eu-west-2:958845080241:function:mock-receipt-api-2-25-VerifyReceiptFunction-8K5LT90CVKH6/invocations"
      },
      {
        id: "34592803862483336581304430725456720634955018783570722827",
        timestamp: 1551194973734,
        message:
          "(515f1e99-39db-11e9-9e96-01e5c04505b9) Endpoint request headers: {x-amzn-lambda-integration-tag=515f1e99-39db-11e9-9e96-01e5c04505b9, Authorization=************************************************************************************************************************************************************************************************************************************************************************************************************************7c8ada, X-Amz-Date=20190226T152933Z, x-amzn-apigateway-api-id=h733q2j6gb, X-Amz-Source-Arn=arn:aws:execute-api:eu-west-2:958845080241:h733q2j6gb/Prod/POST/verifyReceipt, Accept=application/json, User-Agent=AmazonAPIGateway_h733q2j6gb, X-Amz-Security-Token=FQoGZXIvYXdzELj//////////wEaDLalUxmTRqHiHj42YyK3A4gD12hu4qbiOwSlDeVRlCkCYZKwBvULoV7m93mf/vjJokO7k4GMuX8/ZRwO2fxAONWkGVZEVs8TjHjP9AotqEblh3WY6nJ6XSGNLB2/KImSrDz1fOLNd9Dw8T/RBBOgblTeWDo88lhb2QpWBOS6jeJiEHrQMjg4kwSyBNnGQvn2v80EaUkYp7zenEi8oELJi9ixEbrCBoqJ3fk45XGib+0VpgyeOe5aRUW/rDe7XbhkRABE0BN+NhtKyIXlxvbCaOrXgMtfzFHfp1agMePvUVroFoKaZWawTPH4bs8LnVx [TRUNCATED]"
      },
      {
        id: "34592803862483336581304430725456720634955018783570722828",
        timestamp: 1551194973734,
        message:
          '(515f1e99-39db-11e9-9e96-01e5c04505b9) Endpoint request body after transformations: {"resource":"/verifyReceipt","path":"/verifyReceipt","httpMethod":"POST","headers":{"Accept":"application/json, text/plain, */*","Content-Type":"application/json;charset=utf-8","Debug-Log-Enabled":"false","Host":"h733q2j6gb.execute-api.eu-west-2.amazonaws.com","User-Agent":"python-requests/2.20.0","X-Amzn-Trace-Id":"Self=1-5c755b5d-6cdced0b55e7998bc0251bcb;Root=1-5c755b5d-07b29b94e632d3da19d88789;Parent=61e6466ca210cdf8;Sampled=1","x-correlation-id":"f82097ed-5302-4a98-8200-dad186b419be","x-correlation-span-id":"LUUMyTw58JG0vhnGfa","X-Forwarded-For":"18.130.162.42","X-Forwarded-Port":"443","X-Forwarded-Proto":"https"},"multiValueHeaders":{"Accept":["application/json, text/plain, */*"],"Content-Type":["application/json;charset=utf-8"],"Debug-Log-Enabled":["false"],"Host":["h733q2j6gb.execute-api.eu-west-2.amazonaws.com"],"User-Agent":["python-requests/2.20.0"],"X-Amzn-Trace-Id":["Self=1-5c755b5d-6cdced0b55e7998bc0251bcb;Root=1-5c755b5d-07b29b94e632d3da19d88789;Paren [TRUNCATED]'
      },
      {
        id: "34592803862483336581304430725456720634955018783570722829",
        timestamp: 1551194973734,
        message:
          "(515f1e99-39db-11e9-9e96-01e5c04505b9) Sending request to https://lambda.eu-west-2.amazonaws.com/2015-03-31/functions/arn:aws:lambda:eu-west-2:958845080241:function:mock-receipt-api-2-25-VerifyReceiptFunction-8K5LT90CVKH6/invocations"
      },
      {
        id: "34592803863375366389245655651118149365860953243809939470",
        timestamp: 1551194973774,
        message:
          "(515f1e99-39db-11e9-9e96-01e5c04505b9) Received response. Integration latency: 40 ms"
      },
      {
        id: "34592803863375366389245655651118149365860953243809939471",
        timestamp: 1551194973774,
        message:
          '(515f1e99-39db-11e9-9e96-01e5c04505b9) Endpoint response body before transformations: {"body":"{\\"latest_receipt_info\\":[{\\"original_purchase_date\\":\\"Thu, 03 Jan 2019 15:39:10 GMT\\",\\"transaction_id\\":\\"5bc5e2c7-c33e-5bf7-87cf-8753c59fef95\\",\\"expires_date_ms\\":\\"1546529960667\\",\\"original_transaction_id\\":\\"5bc5e2c7-c33e-5bf7-87cf-8753c59fef95\\",\\"quantity\\":\\"1\\",\\"is_in_intro_offer_period\\":\\"false\\",\\"original_purchase_date_ms\\":\\"1546529950667\\",\\"expires_date\\":\\"Thu, 03 Jan 2019 15:39:20 GMT\\",\\"purchase_date_ms\\":\\"1546529950667\\",\\"product_id\\":\\"com.SolveHQ.SolveSubTesting.OneWeekFreeTrial\\",\\"is_trial_period\\":\\"false\\",\\"purchase_date\\":\\"Thu, 03 Jan 2019 15:39:10 GMT\\"}],\\"receipt\\":{\\"receipt_type\\":\\"ProductionSandbox\\",\\"original_application_version\\":\\"1.0\\"},\\"latest_receipt\\":\\"fdfa87e8-b20e-410f-8aaf-5792c66ab07f\\",\\"environment\\":\\"Production\\",\\"pending_renewal_info\\":{\\"auto_renew_product_id\\":\\"com.SolveHQ.SolveSubTesting.OneWeekFreeTrial\\",\\"original_transaction_id\\":\\"5bc5e2c7-c33e-5bf7-87cf-8753c59fef95\\",\\"is_in_billin [TRUNCATED]'
      },
      {
        id: "34592803863375366389245655651118149365860953243809939472",
        timestamp: 1551194973774,
        message:
          "(515f1e99-39db-11e9-9e96-01e5c04505b9) Endpoint response headers: {Date=Tue, 26 Feb 2019 15:29:33 GMT, Content-Type=application/json, Content-Length=1136, Connection=keep-alive, x-amzn-RequestId=57593f79-6e46-4a6f-91b1-f5d848cc2059, x-amzn-Remapped-Content-Length=0, X-Amz-Executed-Version=$LATEST, X-Amzn-Trace-Id=root=1-5c755b5d-07b29b94e632d3da19d88789;parent=61e6466ca210cdf8;sampled=1}"
      },
      {
        id: "34592803863375366389245655651118149365860953243809939473",
        timestamp: 1551194973774,
        message:
          '(515f1e99-39db-11e9-9e96-01e5c04505b9) Method response body after transformations: {"latest_receipt_info":[{"original_purchase_date":"Thu, 03 Jan 2019 15:39:10 GMT","transaction_id":"5bc5e2c7-c33e-5bf7-87cf-8753c59fef95","expires_date_ms":"1546529960667","original_transaction_id":"5bc5e2c7-c33e-5bf7-87cf-8753c59fef95","quantity":"1","is_in_intro_offer_period":"false","original_purchase_date_ms":"1546529950667","expires_date":"Thu, 03 Jan 2019 15:39:20 GMT","purchase_date_ms":"1546529950667","product_id":"com.SolveHQ.SolveSubTesting.OneWeekFreeTrial","is_trial_period":"false","purchase_date":"Thu, 03 Jan 2019 15:39:10 GMT"}],"receipt":{"receipt_type":"ProductionSandbox","original_application_version":"1.0"},"latest_receipt":"fdfa87e8-b20e-410f-8aaf-5792c66ab07f","environment":"Production","pending_renewal_info":{"auto_renew_product_id":"com.SolveHQ.SolveSubTesting.OneWeekFreeTrial","original_transaction_id":"5bc5e2c7-c33e-5bf7-87cf-8753c59fef95","is_in_billing_retry_period":"0","expiration_intent":"0","product_id":"com.SolveHQ.SolveSubTesting.OneWe [TRUNCATED]'
      },
      {
        id: "34592803863375366389245655651118149365860953243809939474",
        timestamp: 1551194973774,
        message:
          "(515f1e99-39db-11e9-9e96-01e5c04505b9) Method response headers: {X-Amzn-Trace-Id=Root=1-5c755b5d-07b29b94e632d3da19d88789;Parent=61e6466ca210cdf8;Sampled=1}"
      },
      {
        id: "34592803863375366389245655651118149365860953243809939475",
        timestamp: 1551194973774,
        message:
          "(515f1e99-39db-11e9-9e96-01e5c04505b9) Successfully completed execution"
      },
      {
        id: "34592803863375366389245655651118149365860953243809939476",
        timestamp: 1551194973774,
        message:
          "(515f1e99-39db-11e9-9e96-01e5c04505b9) Method completed with status: 200"
      },
      {
        id: "34592803863375366389245655651118149365860953243809939477",
        timestamp: 1551194973774,
        message:
          "(515f1e99-39db-11e9-9e96-01e5c04505b9) AWS Integration Endpoint RequestId : 57593f79-6e46-4a6f-91b1-f5d848cc2059"
      },
      {
        id: "34592803863375366389245655651118149365860953243809939478",
        timestamp: 1551194973774,
        message:
          "(515f1e99-39db-11e9-9e96-01e5c04505b9) X-ray Tracing ID : 1-5c755b5d-07b29b94e632d3da19d88789"
      }
    ]
  };

  const results = parseLogs({}, logData);

  expect(results).toMatchObject({
    api_stage: "h733q2j6gb/Prod",
    request_id: "515f1e99-39db-11e9-9e96-01e5c04505b9",
    http_method: "POST",
    http_resource_path: "/verifyReceipt",
    request_path: "{}",
    request_query_string: {},
    method_request_headers: {
      Accept: "application/json",
      "Debug-Log-Enabled": "false",
      "User-Agent": "python-requests/2.20.0",
      "X-Forwarded-Proto": "https",
      "x-correlation-id": "f82097ed-5302-4a98-8200-dad186b419be",
      "X-Forwarded-For": "18.130.162.42",
      Host: "h733q2j6gb.execute-api.eu-west-2.amazonaws.com",
      "X-Forwarded-Port": "443",
      "X-Amzn-Trace-Id": "Self",
      "Content-Type": "application/json;charset",
      "x-correlation-span-id": "LUUMyTw58JG0vhnGfa"
    },
    method_request_body: {},
    endpoint_request_uri:
      "https://lambda.eu-west-2.amazonaws.com/2015-03-31/functions/arn:aws:lambda:eu-west-2:958845080241:function:mock-receipt-api-2-25-VerifyReceiptFunction-8K5LT90CVKH6/invocations",
    endpoint_request_body: {
      '*/*","Content-Type":"application/json;charset': [
        'utf-8"',
        '"Debug-Log-Enabled":"false"',
        '"Host":"h733q2j6gb.execute-api.eu-west-2.amazonaws.com"',
        '"User-Agent":"python-requests/2.20.0"',
        '"X-Amzn-Trace-Id":"Self'
      ],
      '*/*"],"Content-Type":["application/json;charset': [
        'utf-8"]',
        '"Debug-Log-Enabled":["false"]',
        '"Host":["h733q2j6gb.execute-api.eu-west-2.amazonaws.com"]',
        '"User-Agent":["python-requests/2.20.0"]',
        '"X-Amzn-Trace-Id":["Self'
      ]
    },
    integration_latency: 40,
    endpoint_response_body: { truncated: true },
    endpoint_response_headers: {
      Date: "Tue",
      "Content-Type": "application/json",
      "Content-Length": "1136",
      Connection: "keep-alive",
      "x-amzn-RequestId": "57593f79-6e46-4a6f-91b1-f5d848cc2059",
      "x-amzn-Remapped-Content-Length": "0",
      "X-Amz-Executed-Version": "$LATEST",
      "X-Amzn-Trace-Id": "root"
    },
    method_response_body: { truncated: true },
    method_response_headers: { "X-Amzn-Trace-Id": "Root" },
    method_status: 200,
    "request-start-time": new Date("2019-02-26T15:29:33.732Z"),
    "request-end-time": new Date("2019-02-26T15:29:33.774Z"),
    "request-execution-duration": 42,
    "@timestamp": "2019-02-26T15:29:33.732Z"
  });
});
