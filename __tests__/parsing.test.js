const {
  parseLogs
} = require("..");

test("parsing log events where the lambda timed out", () => {
  const logData = {
    messageType: "DATA_MESSAGE",
    owner: "958845080241",
    logGroup: "API-Gateway-Execution-Logs_uwe3g5jm54/Prod",
    logStream: "e369853df766fa44e1ed0ff613f563bd",
    subscriptionFilters: ["ship-logs"],
    logEvents: [{
        id: "34594411449411532791988959220823609535420837773733789696",
        timestamp: 1551267060425,
        message: "(286364ab-3a83-11e9-8dc8-db3cf4c83204) Extended Request Id: Vwc2MGFUrPEFV_g="
      },
      {
        id: "34594411449411532791988959220823609535420837773733789697",
        timestamp: 1551267060425,
        message: "(286364ab-3a83-11e9-8dc8-db3cf4c83204) Verifying Usage Plan for request: 286364ab-3a83-11e9-8dc8-db3cf4c83204. API Key: API Stage: uwe3g5jm54/Prod"
      },
      {
        id: "34594411449478435027584551090248216690238782858251730946",
        timestamp: 1551267060428,
        message: "(286364ab-3a83-11e9-8dc8-db3cf4c83204) API Key authorized because method 'GET /echo' does not require API Key. Request will not contribute to throttle or quota limits"
      },
      {
        id: "34594411449478435027584551090248216690238782858251730947",
        timestamp: 1551267060428,
        message: "(286364ab-3a83-11e9-8dc8-db3cf4c83204) Usage Plan check succeeded for API Key and API Stage uwe3g5jm54/Prod"
      },
      {
        id: "34594411449500735772783081713389752408511431219757711364",
        timestamp: 1551267060429,
        message: "(286364ab-3a83-11e9-8dc8-db3cf4c83204) Starting execution for request: 286364ab-3a83-11e9-8dc8-db3cf4c83204"
      },
      {
        id: "34594411449500735772783081713389752408511431219757711365",
        timestamp: 1551267060429,
        message: "(286364ab-3a83-11e9-8dc8-db3cf4c83204) HTTP Method: GET, Resource Path: /echo"
      },
      {
        id: "34594411449500735772783081713389752408511431219757711366",
        timestamp: 1551267060429,
        message: "(286364ab-3a83-11e9-8dc8-db3cf4c83204) Method request path: {}"
      },
      {
        id: "34594411449500735772783081713389752408511431219757711367",
        timestamp: 1551267060429,
        message: "(286364ab-3a83-11e9-8dc8-db3cf4c83204) Method request query string: {}"
      },
      {
        id: "34594411449500735772783081713389752408511431219757711368",
        timestamp: 1551267060429,
        message: "(286364ab-3a83-11e9-8dc8-db3cf4c83204) Method request headers: {Accept=application/json, CloudFront-Viewer-Country=GB, CloudFront-Forwarded-Proto=https, CloudFront-Is-Tablet-Viewer=false, CloudFront-Is-Mobile-Viewer=false, User-Agent=Paw/3.1.8 (Macintosh; OS X/10.14.0) GCDHTTPRequest, X-Forwarded-Proto=https, CloudFront-Is-SmartTV-Viewer=false, Host=uwe3g5jm54.execute-api.eu-west-2.amazonaws.com, X-Forwarded-Port=443, X-Amzn-Trace-Id=Root=1-5c7674f4-a3491d0a9c8012c191821b83, Via=1.1 ddc96a08bf7ad89b0ed3c40b6e4e6d27.cloudfront.net (CloudFront), X-Amz-Cf-Id=Hcd55qxuXLG3Eyo00VI-2W4d-aP8JKgZ19O2-c1hIp4aqiDK77RSXw==, X-Forwarded-For=62.254.81.74, 52.46.38.85, CloudFront-Is-Desktop-Viewer=true}"
      },
      {
        id: "34594411449500735772783081713389752408511431219757711369",
        timestamp: 1551267060429,
        message: "(286364ab-3a83-11e9-8dc8-db3cf4c83204) Method request body before transformations: "
      },
      {
        id: "34594411449500735772783081713389752408511431219757711370",
        timestamp: 1551267060429,
        message: "(286364ab-3a83-11e9-8dc8-db3cf4c83204) Endpoint request URI: https://lambda.eu-west-2.amazonaws.com/2015-03-31/functions/arn:aws:lambda:eu-west-2:958845080241:function:log-test-1-EchoFunction-175HKORAF18IO/invocations"
      },
      {
        id: "34594411449500735772783081713389752408511431219757711371",
        timestamp: 1551267060429,
        message: "(286364ab-3a83-11e9-8dc8-db3cf4c83204) Endpoint request headers: {x-amzn-lambda-integration-tag=286364ab-3a83-11e9-8dc8-db3cf4c83204, Authorization=************************************************************************************************************************************************************************************************************************************************************************************************************************37c4d7, X-Amz-Date=20190227T113100Z, x-amzn-apigateway-api-id=uwe3g5jm54, X-Amz-Source-Arn=arn:aws:execute-api:eu-west-2:958845080241:uwe3g5jm54/Prod/GET/echo, Accept=application/json, User-Agent=AmazonAPIGateway_uwe3g5jm54, X-Amz-Security-Token=FQoGZXIvYXdzEMv//////////wEaDOCC3x/cRTJgXzZ9RiK3A4dtFJBCwcZIQqNgF4s1iuFe9KbpoBKV+2TbajT9rnnk+ru5jN1pacCfBCOqel3ZUJ1cE5WHs1ZkzDQWdUO8C9vEz9LHresBmXaDbOAVyS+9M5mNLvBW862+AMxB9N3vUKGlEizyxVEIL8lx771/Hj8Tt8LhUq2fcW/mouiNKaGu1tL6949xGcaCHLJtWG0jpaZiqGAiE9HYiSqcDVK70a5KrWKDe7MqtDfT+9/A/KN1308Q9rojxTbccIGr5nr9wbepIuvmtq9mBm6n5Lnzav6SLeJgwtqXbe3QvkwJav47PYzVhwgWL [TRUNCATED]"
      },
      {
        id: "34594411449500735772783081713389752408511431219757711372",
        timestamp: 1551267060429,
        message: '(286364ab-3a83-11e9-8dc8-db3cf4c83204) Endpoint request body after transformations: {"resource":"/echo","path":"/echo","httpMethod":"GET","headers":{"Accept":"application/json","CloudFront-Forwarded-Proto":"https","CloudFront-Is-Desktop-Viewer":"true","CloudFront-Is-Mobile-Viewer":"false","CloudFront-Is-SmartTV-Viewer":"false","CloudFront-Is-Tablet-Viewer":"false","CloudFront-Viewer-Country":"GB","Host":"uwe3g5jm54.execute-api.eu-west-2.amazonaws.com","User-Agent":"Paw/3.1.8 (Macintosh; OS X/10.14.0) GCDHTTPRequest","Via":"1.1 ddc96a08bf7ad89b0ed3c40b6e4e6d27.cloudfront.net (CloudFront)","X-Amz-Cf-Id":"Hcd55qxuXLG3Eyo00VI-2W4d-aP8JKgZ19O2-c1hIp4aqiDK77RSXw==","X-Amzn-Trace-Id":"Root=1-5c7674f4-a3491d0a9c8012c191821b83","X-Forwarded-For":"62.254.81.74, 52.46.38.85","X-Forwarded-Port":"443","X-Forwarded-Proto":"https"},"multiValueHeaders":{"Accept":["application/json"],"CloudFront-Forwarded-Proto":["https"],"CloudFront-Is-Desktop-Viewer":["true"],"CloudFront-Is-Mobile-Viewer":["false"],"CloudFront-Is-SmartTV-Viewer":["false"],"CloudFront-Is-Tablet-V [TRUNCATED]'
      },
      {
        id: "34594411449500735772783081713389752408511431219757711373",
        timestamp: 1551267060429,
        message: "(286364ab-3a83-11e9-8dc8-db3cf4c83204) Sending request to https://lambda.eu-west-2.amazonaws.com/2015-03-31/functions/arn:aws:lambda:eu-west-2:958845080241:function:log-test-1-EchoFunction-175HKORAF18IO/invocations"
      },
      {
        id: "34594411695455654567377324341387189237550210269215719438",
        timestamp: 1551267071458,
        message: "(286364ab-3a83-11e9-8dc8-db3cf4c83204) Received response. Integration latency: 11029 ms"
      },
      {
        id: "34594411695455654567377324341387189237550210269215719439",
        timestamp: 1551267071458,
        message: '(286364ab-3a83-11e9-8dc8-db3cf4c83204) Endpoint response body before transformations: {"errorMessage":"2019-02-27T11:31:11.456Z 71952965-d5cc-4974-ae08-6e2138b2275c Task timed out after 10.00 seconds"}'
      },
      {
        id: "34594411695455654567377324341387189237550210269215719440",
        timestamp: 1551267071458,
        message: "(286364ab-3a83-11e9-8dc8-db3cf4c83204) Endpoint response headers: {Date=Wed, 27 Feb 2019 11:31:11 GMT, Content-Type=application/json, Content-Length=115, Connection=keep-alive, x-amzn-RequestId=71952965-d5cc-4974-ae08-6e2138b2275c, X-Amz-Function-Error=Unhandled, x-amzn-Remapped-Content-Length=0, X-Amz-Executed-Version=$LATEST, X-Amzn-Trace-Id=root=1-5c7674f4-a3491d0a9c8012c191821b83;sampled=1}"
      },
      {
        id: "34594411695455654567377324341387189237550210269215719441",
        timestamp: 1551267071458,
        message: "(286364ab-3a83-11e9-8dc8-db3cf4c83204) Lambda execution failed with status 200 due to customer function error: 2019-02-27T11:31:11.456Z 71952965-d5cc-4974-ae08-6e2138b2275c Task timed out after 10.00 seconds. Lambda request id: 71952965-d5cc-4974-ae08-6e2138b2275c"
      },
      {
        id: "34594411695455654567377324341387189237550210269215719442",
        timestamp: 1551267071458,
        message: "(286364ab-3a83-11e9-8dc8-db3cf4c83204) Method completed with status: 502"
      },
      {
        id: "34594411695455654567377324341387189237550210269215719443",
        timestamp: 1551267071458,
        message: "(286364ab-3a83-11e9-8dc8-db3cf4c83204) AWS Integration Endpoint RequestId : 71952965-d5cc-4974-ae08-6e2138b2275c"
      },
      {
        id: "34594411695455654567377324341387189237550210269215719444",
        timestamp: 1551267071458,
        message: "(286364ab-3a83-11e9-8dc8-db3cf4c83204) X-ray Tracing ID : 1-5c7674f4-a3491d0a9c8012c191821b83"
      }
    ]
  };

  const results = parseLogs({}, logData);

  expect(results).toMatchSnapshot(results);
});

test("parsing log events that is a key throttle log returns the correct results", () => {
  const logData = {
    messageType: "DATA_MESSAGE",
    owner: "958845080241",
    logGroup: "API-Gateway-Execution-Logs_uwe3g5jm54/Prod",
    logStream: "072b030ba126b2f4b2374f342be9ed44",
    subscriptionFilters: ["ship-logs"],
    logEvents: [{
        id: "34592803782802773986954514236420494137821591878455918592",
        timestamp: 1551194970161,
        message: "(4f3e3b0f-39db-11e9-9c2e-5bd7c2de5998) Extended Request Id: Vts2FFmArPEFh8g="
      },
      {
        id: "34592803782802773986954514236420494137821591878455918593",
        timestamp: 1551194970161,
        message: "(4f3e3b0f-39db-11e9-9c2e-5bd7c2de5998) Verifying Usage Plan for request: 4f3e3b0f-39db-11e9-9c2e-5bd7c2de5998. API Key:  API Stage: uwe3g5jm54/Prod"
      },
      {
        id: "34592803782825074732153044859562029856094240239961899010",
        timestamp: 1551194970162,
        message: "(4f3e3b0f-39db-11e9-9c2e-5bd7c2de5998) Key throttle limit exceeded for RestApi uwe3g5jm54, Stage Prod, Resource k0w8mc, HttpMethod POST. Limit: 1.00 Burst: 1"
      },
      {
        id: "34592803782825074732153044859562029856094240239961899011",
        timestamp: 1551194970162,
        message: "(4f3e3b0f-39db-11e9-9c2e-5bd7c2de5998) Method completed with status: 429"
      }
    ]
  };

  const results = parseLogs({}, logData);

  expect(results).toMatchSnapshot(results);
});

it("parses log events", () => {
  const logData = {
    messageType: "DATA_MESSAGE",
    owner: "958845080241",
    logGroup: "API-Gateway-Execution-Logs_h733q2j6gb/Prod",
    logStream: "37a749d808e46495a8da1e5352d03cae",
    subscriptionFilters: ["ship-logs"],
    logEvents: [{
        id: "34592803862438735090907369479173649198409722060558761984",
        timestamp: 1551194973732,
        message: "(515f1e99-39db-11e9-9e96-01e5c04505b9) Extended Request Id: Vts2pH6ArPEFcuQ="
      },
      {
        id: "34592803862461035836105900102315184916682370422064742401",
        timestamp: 1551194973733,
        message: "(515f1e99-39db-11e9-9e96-01e5c04505b9) Verifying Usage Plan for request: 515f1e99-39db-11e9-9e96-01e5c04505b9. API Key: API Stage: h733q2j6gb/Prod"
      },
      {
        id: "34592803862461035836105900102315184916682370422064742402",
        timestamp: 1551194973733,
        message: "(515f1e99-39db-11e9-9e96-01e5c04505b9) API Key authorized because method 'POST /verifyReceipt' does not require API Key. Request will not contribute to throttle or quota limits"
      },
      {
        id: "34592803862461035836105900102315184916682370422064742403",
        timestamp: 1551194973733,
        message: "(515f1e99-39db-11e9-9e96-01e5c04505b9) Usage Plan check succeeded for API Key and API Stage h733q2j6gb/Prod"
      },
      {
        id: "34592803862483336581304430725456720634955018783570722820",
        timestamp: 1551194973734,
        message: "(515f1e99-39db-11e9-9e96-01e5c04505b9) Starting execution for request: 515f1e99-39db-11e9-9e96-01e5c04505b9"
      },
      {
        id: "34592803862483336581304430725456720634955018783570722821",
        timestamp: 1551194973734,
        message: "(515f1e99-39db-11e9-9e96-01e5c04505b9) HTTP Method: POST, Resource Path: /verifyReceipt"
      },
      {
        id: "34592803862483336581304430725456720634955018783570722822",
        timestamp: 1551194973734,
        message: "(515f1e99-39db-11e9-9e96-01e5c04505b9) Method request path: {}"
      },
      {
        id: "34592803862483336581304430725456720634955018783570722823",
        timestamp: 1551194973734,
        message: "(515f1e99-39db-11e9-9e96-01e5c04505b9) Method request query string: {}"
      },
      {
        id: "34592803862483336581304430725456720634955018783570722824",
        timestamp: 1551194973734,
        message: "(515f1e99-39db-11e9-9e96-01e5c04505b9) Method request headers: {Accept=application/json, text/plain, */*, Debug-Log-Enabled=false, User-Agent=python-requests/2.20.0, X-Forwarded-Proto=https, x-correlation-id=f82097ed-5302-4a98-8200-dad186b419be, X-Forwarded-For=18.130.162.42, Host=h733q2j6gb.execute-api.eu-west-2.amazonaws.com, X-Forwarded-Port=443, X-Amzn-Trace-Id=Self=1-5c755b5d-6cdced0b55e7998bc0251bcb;Root=1-5c755b5d-07b29b94e632d3da19d88789;Parent=61e6466ca210cdf8;Sampled=1, Content-Type=application/json;charset=utf-8, x-correlation-span-id=LUUMyTw58JG0vhnGfa}"
      },
      {
        id: "34592803862483336581304430725456720634955018783570722825",
        timestamp: 1551194973734,
        message: '(515f1e99-39db-11e9-9e96-01e5c04505b9) Method request body before transformations: {"receiptData":"82ca4c4f-26dd-4554-a11e-c3feb5324345"}'
      },
      {
        id: "34592803862483336581304430725456720634955018783570722826",
        timestamp: 1551194973734,
        message: "(515f1e99-39db-11e9-9e96-01e5c04505b9) Endpoint request URI: https://lambda.eu-west-2.amazonaws.com/2015-03-31/functions/arn:aws:lambda:eu-west-2:958845080241:function:mock-receipt-api-2-25-VerifyReceiptFunction-8K5LT90CVKH6/invocations"
      },
      {
        id: "34592803862483336581304430725456720634955018783570722827",
        timestamp: 1551194973734,
        message: "(515f1e99-39db-11e9-9e96-01e5c04505b9) Endpoint request headers: {x-amzn-lambda-integration-tag=515f1e99-39db-11e9-9e96-01e5c04505b9, Authorization=************************************************************************************************************************************************************************************************************************************************************************************************************************7c8ada, X-Amz-Date=20190226T152933Z, x-amzn-apigateway-api-id=h733q2j6gb, X-Amz-Source-Arn=arn:aws:execute-api:eu-west-2:958845080241:h733q2j6gb/Prod/POST/verifyReceipt, Accept=application/json, User-Agent=AmazonAPIGateway_h733q2j6gb, X-Amz-Security-Token=FQoGZXIvYXdzELj//////////wEaDLalUxmTRqHiHj42YyK3A4gD12hu4qbiOwSlDeVRlCkCYZKwBvULoV7m93mf/vjJokO7k4GMuX8/ZRwO2fxAONWkGVZEVs8TjHjP9AotqEblh3WY6nJ6XSGNLB2/KImSrDz1fOLNd9Dw8T/RBBOgblTeWDo88lhb2QpWBOS6jeJiEHrQMjg4kwSyBNnGQvn2v80EaUkYp7zenEi8oELJi9ixEbrCBoqJ3fk45XGib+0VpgyeOe5aRUW/rDe7XbhkRABE0BN+NhtKyIXlxvbCaOrXgMtfzFHfp1agMePvUVroFoKaZWawTPH4bs8LnVx [TRUNCATED]"
      },
      {
        id: "34592803862483336581304430725456720634955018783570722828",
        timestamp: 1551194973734,
        message: '(515f1e99-39db-11e9-9e96-01e5c04505b9) Endpoint request body after transformations: {"resource":"/verifyReceipt","path":"/verifyReceipt","httpMethod":"POST","headers":{"Accept":"application/json, text/plain, */*","Content-Type":"application/json;charset=utf-8","Debug-Log-Enabled":"false","Host":"h733q2j6gb.execute-api.eu-west-2.amazonaws.com","User-Agent":"python-requests/2.20.0","X-Amzn-Trace-Id":"Self=1-5c755b5d-6cdced0b55e7998bc0251bcb;Root=1-5c755b5d-07b29b94e632d3da19d88789;Parent=61e6466ca210cdf8;Sampled=1","x-correlation-id":"f82097ed-5302-4a98-8200-dad186b419be","x-correlation-span-id":"LUUMyTw58JG0vhnGfa","X-Forwarded-For":"18.130.162.42","X-Forwarded-Port":"443","X-Forwarded-Proto":"https"},"multiValueHeaders":{"Accept":["application/json, text/plain, */*"],"Content-Type":["application/json;charset=utf-8"],"Debug-Log-Enabled":["false"],"Host":["h733q2j6gb.execute-api.eu-west-2.amazonaws.com"],"User-Agent":["python-requests/2.20.0"],"X-Amzn-Trace-Id":["Self=1-5c755b5d-6cdced0b55e7998bc0251bcb;Root=1-5c755b5d-07b29b94e632d3da19d88789;Paren [TRUNCATED]'
      },
      {
        id: "34592803862483336581304430725456720634955018783570722829",
        timestamp: 1551194973734,
        message: "(515f1e99-39db-11e9-9e96-01e5c04505b9) Sending request to https://lambda.eu-west-2.amazonaws.com/2015-03-31/functions/arn:aws:lambda:eu-west-2:958845080241:function:mock-receipt-api-2-25-VerifyReceiptFunction-8K5LT90CVKH6/invocations"
      },
      {
        id: "34592803863375366389245655651118149365860953243809939470",
        timestamp: 1551194973774,
        message: "(515f1e99-39db-11e9-9e96-01e5c04505b9) Received response. Integration latency: 40 ms"
      },
      {
        id: "34592803863375366389245655651118149365860953243809939471",
        timestamp: 1551194973774,
        message: '(515f1e99-39db-11e9-9e96-01e5c04505b9) Endpoint response body before transformations: {"body":"{\\"latest_receipt_info\\":[{\\"original_purchase_date\\":\\"Thu, 03 Jan 2019 15:39:10 GMT\\",\\"transaction_id\\":\\"5bc5e2c7-c33e-5bf7-87cf-8753c59fef95\\",\\"expires_date_ms\\":\\"1546529960667\\",\\"original_transaction_id\\":\\"5bc5e2c7-c33e-5bf7-87cf-8753c59fef95\\",\\"quantity\\":\\"1\\",\\"is_in_intro_offer_period\\":\\"false\\",\\"original_purchase_date_ms\\":\\"1546529950667\\",\\"expires_date\\":\\"Thu, 03 Jan 2019 15:39:20 GMT\\",\\"purchase_date_ms\\":\\"1546529950667\\",\\"product_id\\":\\"com.SolveHQ.SolveSubTesting.OneWeekFreeTrial\\",\\"is_trial_period\\":\\"false\\",\\"purchase_date\\":\\"Thu, 03 Jan 2019 15:39:10 GMT\\"}],\\"receipt\\":{\\"receipt_type\\":\\"ProductionSandbox\\",\\"original_application_version\\":\\"1.0\\"},\\"latest_receipt\\":\\"fdfa87e8-b20e-410f-8aaf-5792c66ab07f\\",\\"environment\\":\\"Production\\",\\"pending_renewal_info\\":{\\"auto_renew_product_id\\":\\"com.SolveHQ.SolveSubTesting.OneWeekFreeTrial\\",\\"original_transaction_id\\":\\"5bc5e2c7-c33e-5bf7-87cf-8753c59fef95\\",\\"is_in_billin [TRUNCATED]'
      },
      {
        id: "34592803863375366389245655651118149365860953243809939472",
        timestamp: 1551194973774,
        message: "(515f1e99-39db-11e9-9e96-01e5c04505b9) Endpoint response headers: {Date=Tue, 26 Feb 2019 15:29:33 GMT, Content-Type=application/json, Content-Length=1136, Connection=keep-alive, x-amzn-RequestId=57593f79-6e46-4a6f-91b1-f5d848cc2059, x-amzn-Remapped-Content-Length=0, X-Amz-Executed-Version=$LATEST, X-Amzn-Trace-Id=root=1-5c755b5d-07b29b94e632d3da19d88789;parent=61e6466ca210cdf8;sampled=1}"
      },
      {
        id: "34592803863375366389245655651118149365860953243809939473",
        timestamp: 1551194973774,
        message: '(515f1e99-39db-11e9-9e96-01e5c04505b9) Method response body after transformations: {"latest_receipt_info":[{"original_purchase_date":"Thu, 03 Jan 2019 15:39:10 GMT","transaction_id":"5bc5e2c7-c33e-5bf7-87cf-8753c59fef95","expires_date_ms":"1546529960667","original_transaction_id":"5bc5e2c7-c33e-5bf7-87cf-8753c59fef95","quantity":"1","is_in_intro_offer_period":"false","original_purchase_date_ms":"1546529950667","expires_date":"Thu, 03 Jan 2019 15:39:20 GMT","purchase_date_ms":"1546529950667","product_id":"com.SolveHQ.SolveSubTesting.OneWeekFreeTrial","is_trial_period":"false","purchase_date":"Thu, 03 Jan 2019 15:39:10 GMT"}],"receipt":{"receipt_type":"ProductionSandbox","original_application_version":"1.0"},"latest_receipt":"fdfa87e8-b20e-410f-8aaf-5792c66ab07f","environment":"Production","pending_renewal_info":{"auto_renew_product_id":"com.SolveHQ.SolveSubTesting.OneWeekFreeTrial","original_transaction_id":"5bc5e2c7-c33e-5bf7-87cf-8753c59fef95","is_in_billing_retry_period":"0","expiration_intent":"0","product_id":"com.SolveHQ.SolveSubTesting.OneWe [TRUNCATED]'
      },
      {
        id: "34592803863375366389245655651118149365860953243809939474",
        timestamp: 1551194973774,
        message: "(515f1e99-39db-11e9-9e96-01e5c04505b9) Method response headers: {X-Amzn-Trace-Id=Root=1-5c755b5d-07b29b94e632d3da19d88789;Parent=61e6466ca210cdf8;Sampled=1}"
      },
      {
        id: "34592803863375366389245655651118149365860953243809939475",
        timestamp: 1551194973774,
        message: "(515f1e99-39db-11e9-9e96-01e5c04505b9) Successfully completed execution"
      },
      {
        id: "34592803863375366389245655651118149365860953243809939476",
        timestamp: 1551194973774,
        message: "(515f1e99-39db-11e9-9e96-01e5c04505b9) Method completed with status: 200"
      },
      {
        id: "34592803863375366389245655651118149365860953243809939477",
        timestamp: 1551194973774,
        message: "(515f1e99-39db-11e9-9e96-01e5c04505b9) AWS Integration Endpoint RequestId : 57593f79-6e46-4a6f-91b1-f5d848cc2059"
      },
      {
        id: "34592803863375366389245655651118149365860953243809939478",
        timestamp: 1551194973774,
        message: "(515f1e99-39db-11e9-9e96-01e5c04505b9) X-ray Tracing ID : 1-5c755b5d-07b29b94e632d3da19d88789"
      }
    ]
  };

  const results = parseLogs({}, logData);

  expect(results).toMatchSnapshot(results);
});

test("parses log data with multiple requests", () => {
  const logData = {
    messageType: "DATA_MESSAGE",
    owner: "958845080241",
    logGroup: "API-Gateway-Execution-Logs_uwe3g5jm54/Prod",
    logStream: "f033ab37c30201f73f142449d037028d",
    subscriptionFilters: ["ship-logs"],
    logEvents: [{
        id: "34592909646068185811315308345685942269576775152815702016",
        timestamp: 1551199717234,
        message: "(5cb7ee58-39e6-11e9-be7e-29aff96747f2) Extended Request Id: Vt4b0HdTLPEFV3Q="
      },
      {
        id: "34592909646068185811315308345685942269576775152815702017",
        timestamp: 1551199717234,
        message: "(5cb7ee58-39e6-11e9-be7e-29aff96747f2) Verifying Usage Plan for request: 5cb7ee58-39e6-11e9-be7e-29aff96747f2. API Key: API Stage: uwe3g5jm54/Prod"
      },
      {
        id: "34592909646090486556513838968827477987849423514321682434",
        timestamp: 1551199717235,
        message: "(5cb7ee58-39e6-11e9-be7e-29aff96747f2) API Key authorized because method 'POST /receipt' does not require API Key. Request will not contribute to throttle or quota limits"
      },
      {
        id: "34592909646090486556513838968827477987849423514321682435",
        timestamp: 1551199717235,
        message: "(5cb7ee58-39e6-11e9-be7e-29aff96747f2) Usage Plan check succeeded for API Key and API Stage uwe3g5jm54/Prod"
      },
      {
        id: "34592909646090486556513838968827477987849423514321682436",
        timestamp: 1551199717235,
        message: "(5cb7ee58-39e6-11e9-be7e-29aff96747f2) Starting execution for request: 5cb7ee58-39e6-11e9-be7e-29aff96747f2"
      },
      {
        id: "34592909646090486556513838968827477987849423514321682437",
        timestamp: 1551199717235,
        message: "(5cb7ee58-39e6-11e9-be7e-29aff96747f2) HTTP Method: POST, Resource Path: /receipt"
      },
      {
        id: "34592909646090486556513838968827477987849423514321682438",
        timestamp: 1551199717235,
        message: "(5cb7ee58-39e6-11e9-be7e-29aff96747f2) Method request path: {}"
      },
      {
        id: "34592909646090486556513838968827477987849423514321682439",
        timestamp: 1551199717235,
        message: "(5cb7ee58-39e6-11e9-be7e-29aff96747f2) Method request query string: {}"
      },
      {
        id: "34592909646090486556513838968827477987849423514321682440",
        timestamp: 1551199717235,
        message: "(5cb7ee58-39e6-11e9-be7e-29aff96747f2) Method request headers: {Accept=application/json, CloudFront-Viewer-Country=GB, CloudFront-Forwarded-Proto=https, CloudFront-Is-Tablet-Viewer=false, CloudFront-Is-Mobile-Viewer=false, User-Agent=python-requests/2.20.0, X-Forwarded-Proto=https, CloudFront-Is-SmartTV-Viewer=false, Host=uwe3g5jm54.execute-api.eu-west-2.amazonaws.com, Accept-Encoding=gzip, deflate, X-Forwarded-Port=443, X-Amzn-Trace-Id=Root=1-5c756de5-f69ee0aea16ccb26b0eb5c51, Via=1.1 e2ba00588275e7b45594ad99994de543.cloudfront.net (CloudFront), X-Amz-Cf-Id=KCem6vn221G2u9mfQEK0US4aO2sYkdTS5Sm7Hlkcdx26tmXDBTaOnA==, X-Forwarded-For=62.254.81.74, 54.239.166.85, CloudFront-Is-Desktop-Viewer=true, Content-Type=application/json}"
      },
      {
        id: "34592909646090486556513838968827477987849423514321682441",
        timestamp: 1551199717235,
        message: '(5cb7ee58-39e6-11e9-be7e-29aff96747f2) Method request body before transformations: {"receiptData": "82ca4c4f-26dd-4554-a11e-c3feb5324345"}'
      },
      {
        id: "34592909646090486556513838968827477987849423514321682442",
        timestamp: 1551199717235,
        message: "(5cb7ee58-39e6-11e9-be7e-29aff96747f2) Endpoint request URI: https://lambda.eu-west-2.amazonaws.com/2015-03-31/functions/arn:aws:lambda:eu-west-2:958845080241:function:log-test-1-StartReceiptVerifyFunc-BEGOSV0XJRHI/invocations"
      },
      {
        id: "34592909646090486556513838968827477987849423514321682443",
        timestamp: 1551199717235,
        message: "(5cb7ee58-39e6-11e9-be7e-29aff96747f2) Endpoint request headers: {x-amzn-lambda-integration-tag=5cb7ee58-39e6-11e9-be7e-29aff96747f2, Authorization=************************************************************************************************************************************************************************************************************************************************************************************************************************ad4886, X-Amz-Date=20190226T164837Z, x-amzn-apigateway-api-id=uwe3g5jm54, X-Amz-Source-Arn=arn:aws:execute-api:eu-west-2:958845080241:uwe3g5jm54/Prod/POST/receipt, Accept=application/json, User-Agent=AmazonAPIGateway_uwe3g5jm54, X-Amz-Security-Token=FQoGZXIvYXdzELn//////////wEaDKkvL26vW+vpO6oebyK3A7YNcUbY0OR/LDigGXvkfr8mTdBwrLp/bKgH3baW3ENcoTkggGmIs5wnL3iFe0Q1p/WMk+cHN9lRk6HXAubOe4Vg3Jpp3ASGGvBjgDKx090XEaAnj2pik830H28ezKRhHaYUhS/3KIneH/59Bt8t1T3gpVDWqPTCicr1d1GpYRGg+Xn9J5HKRVO/KXx2P8zqY1tJBGxOZg6cmR4BnwunlmyfioYGiSYurae3qLoyQdUIdoEmuXBOcH9cTtRaJwOThkehFx5yBg4NFnoKnIZD0VVBPIfjIVLuZBYxDTzvisx54HjSt [TRUNCATED]"
      },
      {
        id: "34592909646090486556513838968827477987849423514321682444",
        timestamp: 1551199717235,
        message: '(5cb7ee58-39e6-11e9-be7e-29aff96747f2) Endpoint request body after transformations: {"resource":"/receipt","path":"/receipt","httpMethod":"POST","headers":{"Accept":"application/json","Accept-Encoding":"gzip, deflate","CloudFront-Forwarded-Proto":"https","CloudFront-Is-Desktop-Viewer":"true","CloudFront-Is-Mobile-Viewer":"false","CloudFront-Is-SmartTV-Viewer":"false","CloudFront-Is-Tablet-Viewer":"false","CloudFront-Viewer-Country":"GB","Content-Type":"application/json","Host":"uwe3g5jm54.execute-api.eu-west-2.amazonaws.com","User-Agent":"python-requests/2.20.0","Via":"1.1 e2ba00588275e7b45594ad99994de543.cloudfront.net (CloudFront)","X-Amz-Cf-Id":"KCem6vn221G2u9mfQEK0US4aO2sYkdTS5Sm7Hlkcdx26tmXDBTaOnA==","X-Amzn-Trace-Id":"Root=1-5c756de5-f69ee0aea16ccb26b0eb5c51","X-Forwarded-For":"62.254.81.74, 54.239.166.85","X-Forwarded-Port":"443","X-Forwarded-Proto":"https"},"multiValueHeaders":{"Accept":["application/json"],"Accept-Encoding":["gzip, deflate"],"CloudFront-Forwarded-Proto":["https"],"CloudFront-Is-Desktop-Viewer":["true"],"CloudFront-Is-Mobi [TRUNCATED]'
      },
      {
        id: "34592909646090486556513838968827477987849423514321682445",
        timestamp: 1551199717235,
        message: "(5cb7ee58-39e6-11e9-be7e-29aff96747f2) Sending request to https://lambda.eu-west-2.amazonaws.com/2015-03-31/functions/arn:aws:lambda:eu-west-2:958845080241:function:log-test-1-StartReceiptVerifyFunc-BEGOSV0XJRHI/invocations"
      },
      {
        id: "34592909648588170018749268760679478434386040002991489038",
        timestamp: 1551199717347,
        message: "(5cb7ee58-39e6-11e9-be7e-29aff96747f2) Received response. Integration latency: 111 ms"
      },
      {
        id: "34592909648588170018749268760679478434386040002991489039",
        timestamp: 1551199717347,
        message: '(5cb7ee58-39e6-11e9-be7e-29aff96747f2) Endpoint response body before transformations: {"statusCode":500,"body":{"message":"Request failed with status code 502\\n\\n\\"Error: Request failed with status code 502\\\\n at createError (/var/task/node_modules/axios/lib/core/createError.js:16:15)\\\\n at settle (/var/task/node_modules/axios/lib/core/settle.js:18:12)\\\\n at IncomingMessage.handleStreamEnd (/var/task/node_modules/axios/lib/adapters/http.js:201:11)\\\\n at emitNone (events.js:111:20)\\\\n at IncomingMessage.emit (events.js:208:7)\\\\n at endReadableNT (_stream_readable.js:1064:12)\\\\n at /opt/nodejs/node_modules/async-listener/glue.js:188:31\\\\n at _combinedTickCallback (internal/process/next_tick.js:138:11)\\\\n at process._tickDomainCallback [as _tickCallback] (internal/process/next_tick.js:218:9)\\""}}'
      },
      {
        id: "34592909648588170018749268760679478434386040002991489040",
        timestamp: 1551199717347,
        message: "(5cb7ee58-39e6-11e9-be7e-29aff96747f2) Endpoint response headers: {Date=Tue, 26 Feb 2019 16:48:37 GMT, Content-Type=application/json, Content-Length=745, Connection=keep-alive, x-amzn-RequestId=15aba189-6719-4153-b214-46824db50ffa, x-amzn-Remapped-Content-Length=0, X-Amz-Executed-Version=$LATEST, X-Amzn-Trace-Id=root=1-5c756de5-f69ee0aea16ccb26b0eb5c51;sampled=1}"
      },
      {
        id: "34592909648632771509146330006962549870931336726003449873",
        timestamp: 1551199717349,
        message: "(5cb7ee58-39e6-11e9-be7e-29aff96747f2) Execution failed due to configuration error: Malformed Lambda proxy response"
      },
      {
        id: "34592909648632771509146330006962549870931336726003449874",
        timestamp: 1551199717349,
        message: "(5cb7ee58-39e6-11e9-be7e-29aff96747f2) Method completed with status: 502"
      },
      {
        id: "34592909648632771509146330006962549870931336726003449875",
        timestamp: 1551199717349,
        message: "(5cb7ee58-39e6-11e9-be7e-29aff96747f2) AWS Integration Endpoint RequestId : 15aba189-6719-4153-b214-46824db50ffa"
      },
      {
        id: "34592909648632771509146330006962549870931336726003449876",
        timestamp: 1551199717349,
        message: "(5cb7ee58-39e6-11e9-be7e-29aff96747f2) X-ray Tracing ID : 1-5c756de5-f69ee0aea16ccb26b0eb5c51"
      },
      {
        id: "34592909771955892457020675979655071918676775854075150357",
        timestamp: 1551199722879,
        message: "(6015718a-39e6-11e9-be7e-29aff96747f2) Extended Request Id: Vt4csHibrPEFV3Q="
      },
      {
        id: "34592909771955892457020675979655071918676775854075150358",
        timestamp: 1551199722879,
        message: "(6015718a-39e6-11e9-be7e-29aff96747f2) Verifying Usage Plan for request: 6015718a-39e6-11e9-be7e-29aff96747f2. API Key: API Stage: uwe3g5jm54/Prod"
      },
      {
        id: "34592909771978193202219206602796607636949424215581130775",
        timestamp: 1551199722880,
        message: "(6015718a-39e6-11e9-be7e-29aff96747f2) API Key authorized because method 'POST /receipt' does not require API Key. Request will not contribute to throttle or quota limits"
      },
      {
        id: "34592909771978193202219206602796607636949424215581130776",
        timestamp: 1551199722880,
        message: "(6015718a-39e6-11e9-be7e-29aff96747f2) Usage Plan check succeeded for API Key and API Stage uwe3g5jm54/Prod"
      },
      {
        id: "34592909771978193202219206602796607636949424215581130777",
        timestamp: 1551199722880,
        message: "(6015718a-39e6-11e9-be7e-29aff96747f2) Starting execution for request: 6015718a-39e6-11e9-be7e-29aff96747f2"
      },
      {
        id: "34592909771978193202219206602796607636949424215581130778",
        timestamp: 1551199722880,
        message: "(6015718a-39e6-11e9-be7e-29aff96747f2) HTTP Method: POST, Resource Path: /receipt"
      },
      {
        id: "34592909771978193202219206602796607636949424215581130779",
        timestamp: 1551199722880,
        message: "(6015718a-39e6-11e9-be7e-29aff96747f2) Method request path: {}"
      },
      {
        id: "34592909771978193202219206602796607636949424215581130780",
        timestamp: 1551199722880,
        message: "(6015718a-39e6-11e9-be7e-29aff96747f2) Method request query string: {}"
      },
      {
        id: "34592909771978193202219206602796607636949424215581130781",
        timestamp: 1551199722880,
        message: "(6015718a-39e6-11e9-be7e-29aff96747f2) Method request headers: {Accept=application/json, CloudFront-Viewer-Country=GB, CloudFront-Forwarded-Proto=https, CloudFront-Is-Tablet-Viewer=false, CloudFront-Is-Mobile-Viewer=false, User-Agent=python-requests/2.20.0, X-Forwarded-Proto=https, CloudFront-Is-SmartTV-Viewer=false, Host=uwe3g5jm54.execute-api.eu-west-2.amazonaws.com, Accept-Encoding=gzip, deflate, X-Forwarded-Port=443, X-Amzn-Trace-Id=Root=1-5c756dea-0c3dd21bd07278e4a5315d29, Via=1.1 e874817f6498def18bc3c2de8e842383.cloudfront.net (CloudFront), X-Amz-Cf-Id=vUztExf9G4abZd6OTnIaYjE2wmI3dXqp_c2WZtYUTaq0ZiK0VpjOjw==, X-Forwarded-For=62.254.81.74, 54.239.166.85, CloudFront-Is-Desktop-Viewer=true, Content-Type=application/json}"
      },
      {
        id: "34592909771978193202219206602796607636949424215581130782",
        timestamp: 1551199722880,
        message: '(6015718a-39e6-11e9-be7e-29aff96747f2) Method request body before transformations: {"receiptData": "82ca4c4f-26dd-4554-a11e-c3feb5324345"}'
      },
      {
        id: "34592909771978193202219206602796607636949424215581130783",
        timestamp: 1551199722880,
        message: "(6015718a-39e6-11e9-be7e-29aff96747f2) Endpoint request URI: https://lambda.eu-west-2.amazonaws.com/2015-03-31/functions/arn:aws:lambda:eu-west-2:958845080241:function:log-test-1-StartReceiptVerifyFunc-BEGOSV0XJRHI/invocations"
      },
      {
        id: "34592909771978193202219206602796607636949424215581130784",
        timestamp: 1551199722880,
        message: "(6015718a-39e6-11e9-be7e-29aff96747f2) Endpoint request headers: {x-amzn-lambda-integration-tag=6015718a-39e6-11e9-be7e-29aff96747f2, Authorization=************************************************************************************************************************************************************************************************************************************************************************************************************************5d5104, X-Amz-Date=20190226T164842Z, x-amzn-apigateway-api-id=uwe3g5jm54, X-Amz-Source-Arn=arn:aws:execute-api:eu-west-2:958845080241:uwe3g5jm54/Prod/POST/receipt, Accept=application/json, User-Agent=AmazonAPIGateway_uwe3g5jm54, X-Amz-Security-Token=FQoGZXIvYXdzELn//////////wEaDKkvL26vW+vpO6oebyK3A7YNcUbY0OR/LDigGXvkfr8mTdBwrLp/bKgH3baW3ENcoTkggGmIs5wnL3iFe0Q1p/WMk+cHN9lRk6HXAubOe4Vg3Jpp3ASGGvBjgDKx090XEaAnj2pik830H28ezKRhHaYUhS/3KIneH/59Bt8t1T3gpVDWqPTCicr1d1GpYRGg+Xn9J5HKRVO/KXx2P8zqY1tJBGxOZg6cmR4BnwunlmyfioYGiSYurae3qLoyQdUIdoEmuXBOcH9cTtRaJwOThkehFx5yBg4NFnoKnIZD0VVBPIfjIVLuZBYxDTzvisx54HjSt [TRUNCATED]"
      },
      {
        id: "34592909771978193202219206602796607636949424215581130785",
        timestamp: 1551199722880,
        message: '(6015718a-39e6-11e9-be7e-29aff96747f2) Endpoint request body after transformations: {"resource":"/receipt","path":"/receipt","httpMethod":"POST","headers":{"Accept":"application/json","Accept-Encoding":"gzip, deflate","CloudFront-Forwarded-Proto":"https","CloudFront-Is-Desktop-Viewer":"true","CloudFront-Is-Mobile-Viewer":"false","CloudFront-Is-SmartTV-Viewer":"false","CloudFront-Is-Tablet-Viewer":"false","CloudFront-Viewer-Country":"GB","Content-Type":"application/json","Host":"uwe3g5jm54.execute-api.eu-west-2.amazonaws.com","User-Agent":"python-requests/2.20.0","Via":"1.1 e874817f6498def18bc3c2de8e842383.cloudfront.net (CloudFront)","X-Amz-Cf-Id":"vUztExf9G4abZd6OTnIaYjE2wmI3dXqp_c2WZtYUTaq0ZiK0VpjOjw==","X-Amzn-Trace-Id":"Root=1-5c756dea-0c3dd21bd07278e4a5315d29","X-Forwarded-For":"62.254.81.74, 54.239.166.85","X-Forwarded-Port":"443","X-Forwarded-Proto":"https"},"multiValueHeaders":{"Accept":["application/json"],"Accept-Encoding":["gzip, deflate"],"CloudFront-Forwarded-Proto":["https"],"CloudFront-Is-Desktop-Viewer":["true"],"CloudFront-Is-Mobi [TRUNCATED]'
      },
      {
        id: "34592909771978193202219206602796607636949424215581130786",
        timestamp: 1551199722880,
        message: "(6015718a-39e6-11e9-be7e-29aff96747f2) Sending request to https://lambda.eu-west-2.amazonaws.com/2015-03-31/functions/arn:aws:lambda:eu-west-2:958845080241:function:log-test-1-StartReceiptVerifyFunc-BEGOSV0XJRHI/invocations"
      },
      {
        id: "34592909774743485606837003872347036702757821042322702371",
        timestamp: 1551199723004,
        message: "(6015718a-39e6-11e9-be7e-29aff96747f2) Received response. Integration latency: 123 ms"
      },
      {
        id: "34592909774743485606837003872347036702757821042322702372",
        timestamp: 1551199723004,
        message: '(6015718a-39e6-11e9-be7e-29aff96747f2) Endpoint response body before transformations: {"statusCode":200,"body":"{\\"subscriptionId\\":\\"5bc5e2c7-c33e-5bf7-87cf-8753c59fef95\\"}"}'
      },
      {
        id: "34592909774743485606837003872347036702757821042322702373",
        timestamp: 1551199723004,
        message: "(6015718a-39e6-11e9-be7e-29aff96747f2) Endpoint response headers: {Date=Tue, 26 Feb 2019 16:48:43 GMT, Content-Type=application/json, Content-Length=89, Connection=keep-alive, x-amzn-RequestId=5bebd615-2628-4e51-b176-d9522190c6f6, x-amzn-Remapped-Content-Length=0, X-Amz-Executed-Version=$LATEST, X-Amzn-Trace-Id=root=1-5c756dea-0c3dd21bd07278e4a5315d29;sampled=0}"
      },
      {
        id: "34592909774743485606837003872347036702757821042322702374",
        timestamp: 1551199723004,
        message: '(6015718a-39e6-11e9-be7e-29aff96747f2) Method response body after transformations: {"subscriptionId":"5bc5e2c7-c33e-5bf7-87cf-8753c59fef95"}'
      },
      {
        id: "34592909774743485606837003872347036702757821042322702375",
        timestamp: 1551199723004,
        message: "(6015718a-39e6-11e9-be7e-29aff96747f2) Method response headers: {X-Amzn-Trace-Id=Root=1-5c756dea-0c3dd21bd07278e4a5315d29;Sampled=0}"
      },
      {
        id: "34592909774743485606837003872347036702757821042322702376",
        timestamp: 1551199723004,
        message: "(6015718a-39e6-11e9-be7e-29aff96747f2) Successfully completed execution"
      },
      {
        id: "34592909774743485606837003872347036702757821042322702377",
        timestamp: 1551199723004,
        message: "(6015718a-39e6-11e9-be7e-29aff96747f2) Method completed with status: 200"
      },
      {
        id: "34592909774743485606837003872347036702757821042322702378",
        timestamp: 1551199723004,
        message: "(6015718a-39e6-11e9-be7e-29aff96747f2) AWS Integration Endpoint RequestId : 5bebd615-2628-4e51-b176-d9522190c6f6"
      },
      {
        id: "34592909774743485606837003872347036702757821042322702379",
        timestamp: 1551199723004,
        message: "(6015718a-39e6-11e9-be7e-29aff96747f2) X-ray Tracing ID : 1-5c756dea-0c3dd21bd07278e4a5315d29"
      },
      {
        id: "34592909793721419770786564165793932952781576683912036396",
        timestamp: 1551199723855,
        message: "(60aa5e11-39e6-11e9-be7e-29aff96747f2) Extended Request Id: Vt4c2HjOrPEFV3Q="
      },
      {
        id: "34592909793721419770786564165793932952781576683912036397",
        timestamp: 1551199723855,
        message: "(60aa5e11-39e6-11e9-be7e-29aff96747f2) Verifying Usage Plan for request: 60aa5e11-39e6-11e9-be7e-29aff96747f2. API Key: API Stage: uwe3g5jm54/Prod"
      },
      {
        id: "34592909793766021261183625412077004389326873406923997230",
        timestamp: 1551199723857,
        message: "(60aa5e11-39e6-11e9-be7e-29aff96747f2) API Key authorized because method 'POST /echo' does not require API Key. Request will not contribute to throttle or quota limits"
      },
      {
        id: "34592909793766021261183625412077004389326873406923997231",
        timestamp: 1551199723857,
        message: "(60aa5e11-39e6-11e9-be7e-29aff96747f2) Usage Plan check succeeded for API Key and API Stage uwe3g5jm54/Prod"
      },
      {
        id: "34592909793766021261183625412077004389326873406923997232",
        timestamp: 1551199723857,
        message: "(60aa5e11-39e6-11e9-be7e-29aff96747f2) Starting execution for request: 60aa5e11-39e6-11e9-be7e-29aff96747f2"
      },
      {
        id: "34592909793766021261183625412077004389326873406923997233",
        timestamp: 1551199723857,
        message: "(60aa5e11-39e6-11e9-be7e-29aff96747f2) HTTP Method: POST, Resource Path: /echo"
      },
      {
        id: "34592909793766021261183625412077004389326873406923997234",
        timestamp: 1551199723857,
        message: "(60aa5e11-39e6-11e9-be7e-29aff96747f2) Method request path: {}"
      },
      {
        id: "34592909793766021261183625412077004389326873406923997235",
        timestamp: 1551199723857,
        message: "(60aa5e11-39e6-11e9-be7e-29aff96747f2) Method request query string: {}"
      },
      {
        id: "34592909793766021261183625412077004389326873406923997236",
        timestamp: 1551199723857,
        message: "(60aa5e11-39e6-11e9-be7e-29aff96747f2) Method request headers: {Accept=application/json, CloudFront-Viewer-Country=GB, CloudFront-Forwarded-Proto=https, CloudFront-Is-Tablet-Viewer=false, CloudFront-Is-Mobile-Viewer=false, User-Agent=python-requests/2.20.0, X-Forwarded-Proto=https, CloudFront-Is-SmartTV-Viewer=false, Host=uwe3g5jm54.execute-api.eu-west-2.amazonaws.com, Accept-Encoding=gzip, deflate, X-Forwarded-Port=443, X-Amzn-Trace-Id=Root=1-5c756deb-b85c76f01d43eb2c8d8bb3c0, Via=1.1 6b11bd43fbd97ec7bb8917017ae0f954.cloudfront.net (CloudFront), X-Amz-Cf-Id=_cR9ADd_XKDi544atuG_2YYYzBIWRYBC85bsER8GoVnBVV7ooeEGaA==, X-Forwarded-For=62.254.81.74, 54.239.166.85, CloudFront-Is-Desktop-Viewer=true, Content-Type=application/json}"
      },
      {
        id: "34592909793766021261183625412077004389326873406923997237",
        timestamp: 1551199723857,
        message: '(60aa5e11-39e6-11e9-be7e-29aff96747f2) Method request body before transformations: {"id": "2a7fd6fe-45ae-4255-95b5-9e9339d5d321"}'
      },
      {
        id: "34592909793766021261183625412077004389326873406923997238",
        timestamp: 1551199723857,
        message: "(60aa5e11-39e6-11e9-be7e-29aff96747f2) Endpoint request URI: https://lambda.eu-west-2.amazonaws.com/2015-03-31/functions/arn:aws:lambda:eu-west-2:958845080241:function:log-test-1-EchoPostFunction-9TJON2VOEHC0/invocations"
      },
      {
        id: "34592909793766021261183625412077004389326873406923997239",
        timestamp: 1551199723857,
        message: "(60aa5e11-39e6-11e9-be7e-29aff96747f2) Endpoint request headers: {x-amzn-lambda-integration-tag=60aa5e11-39e6-11e9-be7e-29aff96747f2, Authorization=************************************************************************************************************************************************************************************************************************************************************************************************************************cb08c6, X-Amz-Date=20190226T164843Z, x-amzn-apigateway-api-id=uwe3g5jm54, X-Amz-Source-Arn=arn:aws:execute-api:eu-west-2:958845080241:uwe3g5jm54/Prod/POST/echo, Accept=application/json, User-Agent=AmazonAPIGateway_uwe3g5jm54, X-Amz-Security-Token=FQoGZXIvYXdzELn//////////wEaDKkvL26vW+vpO6oebyK3A7YNcUbY0OR/LDigGXvkfr8mTdBwrLp/bKgH3baW3ENcoTkggGmIs5wnL3iFe0Q1p/WMk+cHN9lRk6HXAubOe4Vg3Jpp3ASGGvBjgDKx090XEaAnj2pik830H28ezKRhHaYUhS/3KIneH/59Bt8t1T3gpVDWqPTCicr1d1GpYRGg+Xn9J5HKRVO/KXx2P8zqY1tJBGxOZg6cmR4BnwunlmyfioYGiSYurae3qLoyQdUIdoEmuXBOcH9cTtRaJwOThkehFx5yBg4NFnoKnIZD0VVBPIfjIVLuZBYxDTzvisx54HjStv/z [TRUNCATED]"
      },
      {
        id: "34592909793766021261183625412077004389326873406923997240",
        timestamp: 1551199723857,
        message: '(60aa5e11-39e6-11e9-be7e-29aff96747f2) Endpoint request body after transformations: {"resource":"/echo","path":"/echo","httpMethod":"POST","headers":{"Accept":"application/json","Accept-Encoding":"gzip, deflate","CloudFront-Forwarded-Proto":"https","CloudFront-Is-Desktop-Viewer":"true","CloudFront-Is-Mobile-Viewer":"false","CloudFront-Is-SmartTV-Viewer":"false","CloudFront-Is-Tablet-Viewer":"false","CloudFront-Viewer-Country":"GB","Content-Type":"application/json","Host":"uwe3g5jm54.execute-api.eu-west-2.amazonaws.com","User-Agent":"python-requests/2.20.0","Via":"1.1 6b11bd43fbd97ec7bb8917017ae0f954.cloudfront.net (CloudFront)","X-Amz-Cf-Id":"_cR9ADd_XKDi544atuG_2YYYzBIWRYBC85bsER8GoVnBVV7ooeEGaA==","X-Amzn-Trace-Id":"Root=1-5c756deb-b85c76f01d43eb2c8d8bb3c0","X-Forwarded-For":"62.254.81.74, 54.239.166.85","X-Forwarded-Port":"443","X-Forwarded-Proto":"https"},"multiValueHeaders":{"Accept":["application/json"],"Accept-Encoding":["gzip, deflate"],"CloudFront-Forwarded-Proto":["https"],"CloudFront-Is-Desktop-Viewer":["true"],"CloudFront-Is-Mobile-Vie [TRUNCATED]'
      },
      {
        id: "34592909793766021261183625412077004389326873406923997241",
        timestamp: 1551199723857,
        message: "(60aa5e11-39e6-11e9-be7e-29aff96747f2) Sending request to https://lambda.eu-west-2.amazonaws.com/2015-03-31/functions/arn:aws:lambda:eu-west-2:958845080241:function:log-test-1-EchoPostFunction-9TJON2VOEHC0/invocations"
      },
      {
        id: "34592909794033630203565992889775433008598653744995762234",
        timestamp: 1551199723869,
        message: "(60aa5e11-39e6-11e9-be7e-29aff96747f2) Received response. Integration latency: 11 ms"
      },
      {
        id: "34592909794033630203565992889775433008598653744995762235",
        timestamp: 1551199723869,
        message: '(60aa5e11-39e6-11e9-be7e-29aff96747f2) Endpoint response body before transformations: {"statusCode":200,"body":"{\\"body\\":{\\"id\\":\\"2a7fd6fe-45ae-4255-95b5-9e9339d5d321\\"}}"}'
      },
      {
        id: "34592909794033630203565992889775433008598653744995762236",
        timestamp: 1551199723869,
        message: "(60aa5e11-39e6-11e9-be7e-29aff96747f2) Endpoint response headers: {Date=Tue, 26 Feb 2019 16:48:43 GMT, Content-Type=application/json, Content-Length=88, Connection=keep-alive, x-amzn-RequestId=b3ebd3c9-1045-4001-ae58-fb611115ec9b, x-amzn-Remapped-Content-Length=0, X-Amz-Executed-Version=$LATEST, X-Amzn-Trace-Id=root=1-5c756deb-b85c76f01d43eb2c8d8bb3c0;sampled=0}"
      },
      {
        id: "34592909794033630203565992889775433008598653744995762237",
        timestamp: 1551199723869,
        message: '(60aa5e11-39e6-11e9-be7e-29aff96747f2) Method response body after transformations: {"body":{"id":"2a7fd6fe-45ae-4255-95b5-9e9339d5d321"}}'
      },
      {
        id: "34592909794033630203565992889775433008598653744995762238",
        timestamp: 1551199723869,
        message: "(60aa5e11-39e6-11e9-be7e-29aff96747f2) Method response headers: {X-Amzn-Trace-Id=Root=1-5c756deb-b85c76f01d43eb2c8d8bb3c0;Sampled=0}"
      },
      {
        id: "34592909794033630203565992889775433008598653744995762239",
        timestamp: 1551199723869,
        message: "(60aa5e11-39e6-11e9-be7e-29aff96747f2) Successfully completed execution"
      },
      {
        id: "34592909794033630203565992889775433008598653744995762240",
        timestamp: 1551199723869,
        message: "(60aa5e11-39e6-11e9-be7e-29aff96747f2) Method completed with status: 200"
      },
      {
        id: "34592909794033630203565992889775433008598653744995762241",
        timestamp: 1551199723869,
        message: "(60aa5e11-39e6-11e9-be7e-29aff96747f2) AWS Integration Endpoint RequestId : b3ebd3c9-1045-4001-ae58-fb611115ec9b"
      },
      {
        id: "34592909794033630203565992889775433008598653744995762242",
        timestamp: 1551199723869,
        message: "(60aa5e11-39e6-11e9-be7e-29aff96747f2) X-ray Tracing ID : 1-5c756deb-b85c76f01d43eb2c8d8bb3c0"
      },
      {
        id: "34592909824964763793927967187085474252761931153790599235",
        timestamp: 1551199725256,
        message: "(617ffe5e-39e6-11e9-be7e-29aff96747f2) Extended Request Id: Vt4dEHkaLPEFV3Q="
      },
      {
        id: "34592909824964763793927967187085474252761931153790599236",
        timestamp: 1551199725256,
        message: "(617ffe5e-39e6-11e9-be7e-29aff96747f2) Verifying Usage Plan for request: 617ffe5e-39e6-11e9-be7e-29aff96747f2. API Key: API Stage: uwe3g5jm54/Prod"
      },
      {
        id: "34592909825009365284325028433368545689307227876802560069",
        timestamp: 1551199725258,
        message: "(617ffe5e-39e6-11e9-be7e-29aff96747f2) API Key authorized because method 'POST /receipt' does not require API Key. Request will not contribute to throttle or quota limits"
      },
      {
        id: "34592909825009365284325028433368545689307227876802560070",
        timestamp: 1551199725258,
        message: "(617ffe5e-39e6-11e9-be7e-29aff96747f2) Usage Plan check succeeded for API Key and API Stage uwe3g5jm54/Prod"
      },
      {
        id: "34592909825031666029523559056510081407579876238308540487",
        timestamp: 1551199725259,
        message: "(617ffe5e-39e6-11e9-be7e-29aff96747f2) Starting execution for request: 617ffe5e-39e6-11e9-be7e-29aff96747f2"
      },
      {
        id: "34592909825031666029523559056510081407579876238308540488",
        timestamp: 1551199725259,
        message: "(617ffe5e-39e6-11e9-be7e-29aff96747f2) HTTP Method: POST, Resource Path: /receipt"
      },
      {
        id: "34592909825031666029523559056510081407579876238308540489",
        timestamp: 1551199725259,
        message: "(617ffe5e-39e6-11e9-be7e-29aff96747f2) Method request path: {}"
      },
      {
        id: "34592909825031666029523559056510081407579876238308540490",
        timestamp: 1551199725259,
        message: "(617ffe5e-39e6-11e9-be7e-29aff96747f2) Method request query string: {}"
      },
      {
        id: "34592909825031666029523559056510081407579876238308540491",
        timestamp: 1551199725259,
        message: "(617ffe5e-39e6-11e9-be7e-29aff96747f2) Method request headers: {Accept=application/json, CloudFront-Viewer-Country=GB, CloudFront-Forwarded-Proto=https, CloudFront-Is-Tablet-Viewer=false, CloudFront-Is-Mobile-Viewer=false, User-Agent=python-requests/2.20.0, X-Forwarded-Proto=https, CloudFront-Is-SmartTV-Viewer=false, Host=uwe3g5jm54.execute-api.eu-west-2.amazonaws.com, Accept-Encoding=gzip, deflate, X-Forwarded-Port=443, X-Amzn-Trace-Id=Root=1-5c756ded-19e3e86556cc4e32759fb8af, Via=1.1 e07a8966bd7e1454b7e4fbbface731a2.cloudfront.net (CloudFront), X-Amz-Cf-Id=mGmJz7sqdXXslLx6f-L_KQuS_Zpu7OCWoOsvWq4XBlSjNLU6h_ctZA==, X-Forwarded-For=62.254.81.74, 54.239.166.144, CloudFront-Is-Desktop-Viewer=true, Content-Type=application/json}"
      },
      {
        id: "34592909825031666029523559056510081407579876238308540492",
        timestamp: 1551199725259,
        message: '(617ffe5e-39e6-11e9-be7e-29aff96747f2) Method request body before transformations: {"receiptData": "82ca4c4f-26dd-4554-a11e-c3feb5324345"}'
      },
      {
        id: "34592909825031666029523559056510081407579876238308540493",
        timestamp: 1551199725259,
        message: "(617ffe5e-39e6-11e9-be7e-29aff96747f2) Endpoint request URI: https://lambda.eu-west-2.amazonaws.com/2015-03-31/functions/arn:aws:lambda:eu-west-2:958845080241:function:log-test-1-StartReceiptVerifyFunc-BEGOSV0XJRHI/invocations"
      },
      {
        id: "34592909825031666029523559056510081407579876238308540494",
        timestamp: 1551199725259,
        message: "(617ffe5e-39e6-11e9-be7e-29aff96747f2) Endpoint request headers: {x-amzn-lambda-integration-tag=617ffe5e-39e6-11e9-be7e-29aff96747f2, Authorization=************************************************************************************************************************************************************************************************************************************************************************************************************************2b1a45, X-Amz-Date=20190226T164845Z, x-amzn-apigateway-api-id=uwe3g5jm54, X-Amz-Source-Arn=arn:aws:execute-api:eu-west-2:958845080241:uwe3g5jm54/Prod/POST/receipt, Accept=application/json, User-Agent=AmazonAPIGateway_uwe3g5jm54, X-Amz-Security-Token=FQoGZXIvYXdzELn//////////wEaDKkvL26vW+vpO6oebyK3A7YNcUbY0OR/LDigGXvkfr8mTdBwrLp/bKgH3baW3ENcoTkggGmIs5wnL3iFe0Q1p/WMk+cHN9lRk6HXAubOe4Vg3Jpp3ASGGvBjgDKx090XEaAnj2pik830H28ezKRhHaYUhS/3KIneH/59Bt8t1T3gpVDWqPTCicr1d1GpYRGg+Xn9J5HKRVO/KXx2P8zqY1tJBGxOZg6cmR4BnwunlmyfioYGiSYurae3qLoyQdUIdoEmuXBOcH9cTtRaJwOThkehFx5yBg4NFnoKnIZD0VVBPIfjIVLuZBYxDTzvisx54HjSt [TRUNCATED]"
      },
      {
        id: "34592909825031666029523559056510081407579876238308540495",
        timestamp: 1551199725259,
        message: '(617ffe5e-39e6-11e9-be7e-29aff96747f2) Endpoint request body after transformations: {"resource":"/receipt","path":"/receipt","httpMethod":"POST","headers":{"Accept":"application/json","Accept-Encoding":"gzip, deflate","CloudFront-Forwarded-Proto":"https","CloudFront-Is-Desktop-Viewer":"true","CloudFront-Is-Mobile-Viewer":"false","CloudFront-Is-SmartTV-Viewer":"false","CloudFront-Is-Tablet-Viewer":"false","CloudFront-Viewer-Country":"GB","Content-Type":"application/json","Host":"uwe3g5jm54.execute-api.eu-west-2.amazonaws.com","User-Agent":"python-requests/2.20.0","Via":"1.1 e07a8966bd7e1454b7e4fbbface731a2.cloudfront.net (CloudFront)","X-Amz-Cf-Id":"mGmJz7sqdXXslLx6f-L_KQuS_Zpu7OCWoOsvWq4XBlSjNLU6h_ctZA==","X-Amzn-Trace-Id":"Root=1-5c756ded-19e3e86556cc4e32759fb8af","X-Forwarded-For":"62.254.81.74, 54.239.166.144","X-Forwarded-Port":"443","X-Forwarded-Proto":"https"},"multiValueHeaders":{"Accept":["application/json"],"Accept-Encoding":["gzip, deflate"],"CloudFront-Forwarded-Proto":["https"],"CloudFront-Is-Desktop-Viewer":["true"],"CloudFront-Is-Mob [TRUNCATED]'
      },
      {
        id: "34592909825031666029523559056510081407579876238308540496",
        timestamp: 1551199725259,
        message: "(617ffe5e-39e6-11e9-be7e-29aff96747f2) Sending request to https://lambda.eu-west-2.amazonaws.com/2015-03-31/functions/arn:aws:lambda:eu-west-2:958845080241:function:log-test-1-StartReceiptVerifyFunc-BEGOSV0XJRHI/invocations"
      },
      {
        id: "34592909829157303891251724337694189288019823116914917457",
        timestamp: 1551199725444,
        message: "(617ffe5e-39e6-11e9-be7e-29aff96747f2) Received response. Integration latency: 185 ms"
      },
      {
        id: "34592909829157303891251724337694189288019823116914917458",
        timestamp: 1551199725444,
        message: '(617ffe5e-39e6-11e9-be7e-29aff96747f2) Endpoint response body before transformations: {"statusCode":200,"body":"{\\"subscriptionId\\":\\"5bc5e2c7-c33e-5bf7-87cf-8753c59fef95\\"}"}'
      },
      {
        id: "34592909829157303891251724337694189288019823116914917459",
        timestamp: 1551199725444,
        message: "(617ffe5e-39e6-11e9-be7e-29aff96747f2) Endpoint response headers: {Date=Tue, 26 Feb 2019 16:48:45 GMT, Content-Type=application/json, Content-Length=89, Connection=keep-alive, x-amzn-RequestId=54030987-ce05-4f2e-ac9d-7ad4b5cee7ba, x-amzn-Remapped-Content-Length=0, X-Amz-Executed-Version=$LATEST, X-Amzn-Trace-Id=root=1-5c756ded-19e3e86556cc4e32759fb8af;sampled=1}"
      },
      {
        id: "34592909829157303891251724337694189288019823116914917460",
        timestamp: 1551199725444,
        message: '(617ffe5e-39e6-11e9-be7e-29aff96747f2) Method response body after transformations: {"subscriptionId":"5bc5e2c7-c33e-5bf7-87cf-8753c59fef95"}'
      },
      {
        id: "34592909829157303891251724337694189288019823116914917461",
        timestamp: 1551199725444,
        message: "(617ffe5e-39e6-11e9-be7e-29aff96747f2) Method response headers: {X-Amzn-Trace-Id=Root=1-5c756ded-19e3e86556cc4e32759fb8af;Sampled=1}"
      },
      {
        id: "34592909829157303891251724337694189288019823116914917462",
        timestamp: 1551199725444,
        message: "(617ffe5e-39e6-11e9-be7e-29aff96747f2) Successfully completed execution"
      },
      {
        id: "34592909829157303891251724337694189288019823116914917463",
        timestamp: 1551199725444,
        message: "(617ffe5e-39e6-11e9-be7e-29aff96747f2) Method completed with status: 200"
      },
      {
        id: "34592909829157303891251724337694189288019823116914917464",
        timestamp: 1551199725444,
        message: "(617ffe5e-39e6-11e9-be7e-29aff96747f2) AWS Integration Endpoint RequestId : 54030987-ce05-4f2e-ac9d-7ad4b5cee7ba"
      },
      {
        id: "34592909829157303891251724337694189288019823116914917465",
        timestamp: 1551199725444,
        message: "(617ffe5e-39e6-11e9-be7e-29aff96747f2) X-ray Tracing ID : 1-5c756ded-19e3e86556cc4e32759fb8af"
      }
    ]
  };

  const results = parseLogs({}, logData);

  expect(results).toMatchSnapshot(results);
});