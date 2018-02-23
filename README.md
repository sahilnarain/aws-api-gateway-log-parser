# aws-api-gateway-log-parser
With logging enabled, API Gateway streams execution logs to a log group, one event at a time, as plaintext strings. This makes it very hard to search on a specific portion of the request while maintaining perspective of the whole request at the same time.

This module aims to solve this problem by parsing logs for a single request into a JSON object, which can then be analysed easily.

# Installation
`npm install aws-api-gateway-log-parser --save`

# Usage
Typically, this is used inside a lambda function which is triggered by API gateway's execution logs.

#### Note:
Sometimes, when the amount of data being written to the log stream is very large, AWS truncates the log stream abruptly. This usually happens for very large API response objects. In case of truncation, some data can still be salvaged by specifying the keys to be retrieved (if already written to the log stream).

An array called `TRUNCATED_RESPONSE_KEYS` needs to be passed to the parser, which specifies the key and the data type of the key's value, as shown in the code example below. An additional `truncated: true` is added to the parsed log. If this array is not specified in the parser configuration, the parsed log would simply return `{truncated: true}` to indicate an abrupt truncation.

```
const zlib = require('zlib');
const logParser = require('aws-api-gateway-log-parser');

// Configuration
let parserConfig = {};
parserConfig.TRUNCATED_RESPONSE_KEYS = [{key: 'code', type: 'String'}, {key: 'error', type: 'Boolean'}, {key: 'message', type: 'String'}];
...

const uploadToS3 = (data, callback) => {
...
};

exports.handler = (event, context, callback) => {
  let payload = new Buffer(event.awslogs.data, 'base64');
  zlib.gunzip(payload, (err, logs) => {
    if(err) {
      return callback(err);
    }

    let parsedLogs = logParser.parseLogs(parserConfig, logs);

    uploadToS3(parsedLogs, (err) => {
      if(err) {
        console.log("Error: ", err);
        context.fail(err);
      }

      let _result = `Successfully processed ${result.logEvents.length} log events.`;
      console.log(_result);
      return callback(null, _result);
    });
  };
};
```

# License
- The MIT License.

# Author
- [Sahil Narain](https://github.com/sahilnarain)

# Credits
- With very helpful insights from [Manu Rana](https://github.com/manurana)
- Inspired by [rotemtam's serverless-aws-logs-parser](https://github.com/rotemtam/serverless-aws-logs-parser).
