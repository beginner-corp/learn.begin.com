---
layout: sidebar.11ty.js
title: FASTstack training
---

# Local development

Automated test suites are a requirement for ensuring projects stay high quality while maintaining a rapid delivery cadence. Test suites catch bugs before customers do. Test suites also prevent regressions so bugs do not reappear. When you get good at testing software delivery becomes very fun. Iterations are tighter which means you arrive at solutions faster. The first principle of automated testing is staged delivery. 

By default Architect projects stages are `testing`, and `staging` or `production` environments. It is possible to deploy additional stages as independent CloudFormation stacks. 

Architect ships an extremely fast local development web server. It allows you to preview work locally, even offline, even without an AWS account and still have confidence deploying to S3, API Gateway, SQS, SNS, EventBridge, and DynamoDB. 

Run with `arc sandbox` or require the module directly in Node for test suites.

## Testing

Currently writing tests is best supported with Node because you can interact with the sandbox directly however tests can be written with other languages by shelling out to `arc sandbox` in a child process. For the exercises we will use Node but you are encouraged to use other languages and we would appreciate contributions to port these exercises to other languages!

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

6. Add a test to see that `http://localhost:3333` returns an HTTP statusCode 200
