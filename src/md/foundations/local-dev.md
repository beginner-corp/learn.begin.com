---
layout: sidebar.11ty.js
title: FASTstack training
---

# Local development

Architect ships an extremely fast local development web server. It allows you to work locally, even offline, even without an AWS account and still have confidence deploying to S3, API Gateway, SQS, SNS, EventBridge, and DynamoDB. 

Run with `arc sandbox` or require the module directly in Node for test suites.

## Testing

### Node

Currently writing tests is best supported with Node. We reccomend the `tape` and `tap-spec` libraries.

```javascript
// example sandbox start/stop
let sandbox = require('@architect/sandbox')
let tape = require('tape')
let end

test('sandbox.start', async t=> {
  t.plan(1)
  end = await sandbox.start()
  t.ok(true, 'start the sandbox')
})

// your tests here

test('end', async t=> {
  t.plan(1)
  end()
  t.ok(true, 'shut down sandbox')
})
```
