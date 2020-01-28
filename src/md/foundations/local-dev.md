---
layout: sidebar.11ty.js
title: FASTstack training
---

# Local development

Automated test suites are a requirement for ensuring projects stay high quality while maintaining a rapid delivery cadence. Test suites catch bugs before customers do. Test suites also prevent regressions so bugs do not reappear. Iterations become tighter which means we can arrive at solutions faster. 

The first principle of automated testing is staged delivery to discreet but identical environments. Architect projects have `testing`, `staging` and `production` environments. Architect ships an extremely fast local development web server to preview work locally, even offline, without an AWS account and still have confidence deploying to S3, API Gateway, SQS, SNS, EventBridge, and DynamoDB will work as expected. 

Run with `arc sandbox` or require the module directly in Node for test suites.

---
### Exercise 101: setup a basic testing rig


1. Generate an app 

```bash
arc init --node ./myapp` 
cd myapp
```

2. Install testing tools `npm i tape tap-spec -D`

3. Add to `package.json` 

```javascript
{
  "scripts": {
    "test": "tape test/index-test.js | tap-spec"
  }
}
```

4. Add the test scaffolding

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

// your tests will go here

test('end', async t=> {
  t.plan(1)
  end()
  t.ok(true, 'shut down sandbox')
})
```

5. Run the tests `npm t`

6. Add a test to see that `http://localhost:3333` returns an HTTP statusCode 200 using `tiny-json-http`
