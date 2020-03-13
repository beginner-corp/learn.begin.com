---
layout: basic.11ty.js
title: serverless web dev training with architect
---

# Set up testing with Tape 

 Investing time into testing your application code will help with maintenance and ensure that new code will be less likely to cause regressions.

Don't focus on whether your test is good or bad, or if you are using the right tool. I encourage you to write productive tests. Think through the parts of your application that are mission critical and automate your tests to keep those functions running. Productive tests are ones that catch regressions, evaluate expected behavior, and become part of software documentation. 

1. Start with the REST example.  

[![Deploy to Begin](https://static.begin.com/deploy-to-begin.svg)](https://begin.com/apps/create?template=https://github.com/begin-examples/learn-node-rest)

2. Clone your repo and set up local development. 

```bash
# Clone your app repo locally
git clone https://github.com/username/begin-app-project-name.git

# cd into your Begin project dir
cd begin-app-project-name

# Install NPM packages
npm install

# Start Sandbox
npm start
```

3. This example already has the test file and dependencies included, if you want to start from scratch you can delete the `/test` folder and skip this step. Otherwise follow along with the finished code starting in step 4. 

The methods for setting and retrieving data are already in place with `@begin/data`. So let's look at testing protected routes. We will begin by installing Tape, a minimal testing framework that outputs TAP. 

```bash
npm install tape tap-spec tiny-json-http
```

Then we will add a `test` script to `package.json`

```json
"scripts": {
  "test" : "QUIET=1 tape test/*-test.js | tap-spec"
}
```

4.  Let's create a `/test` folder and one test file named `get-todos-test.js`. To set up our test file, we will instantiate Sandbox and declare the necessary dependencies.

``` javascript
// test/get-todos-test.js
let tiny = require('tiny-json-http')
let test = require('tape')
let sandbox = require('@architect/sandbox')
let end

// this starts a sandbox environment for the tests to excecute in.
test('start', async t=> {
  t.plan(1)
  end = await sandbox.start()
  t.ok(true, 'started')
})

// test case will go here

// this ends sandbox
test('end', async t=> {
  t.plan(1)
  await end()
  t.ok(true, 'ended')
})
```
The benefit of creating the same environment for development, testing, staging, and production means that we have the best chance of catching bugs during the entire development lifecycle. 

Now let's add a test case and break down what's going on. 

Even though we are testing a GET request on the `/todos` route, we are actually testing the functionality of `/src/shared/auth.js`. This function holds value for our users, an authenticated route which blocks requests in a way that the front end can catch. 

Let's reference the [Backend REST example]('/basics/backend/rest). 

The Lambda function at `/src/http/get-todos/index.js` executes  `auth.js` and `read.js`, in that order. If a user has a valid account session, they will be redirected to a list of todos, otherwise it will return the HTTP status code 403. 

Tape is invoked with a test name which will be displayed in the output, and then a function which is passed a test object. The code will then make some assertion on that test object. In this case we want to assert that if a user is not authenticated, then the get-todo function will return an http status code of 403. 

```javascript
// test/get-todos-test.js
...
test('get /lists not authenticated', async t=> {
  t.plan(1)
  try {
    let url = 'http://localhost:3333/todos'
    let result = await tiny.get({url})
  }
  catch(e) {
    t.ok(e.statusCode === 403, 'not auth')
  }
})
...
```
`t.plan(1)` means that we expect this test to run with only 1 assertion. `plan()` is useful for catching functions that create more output than we expect and cause an error. `t.ok()` will test for truthiness in a value. There are other assertion methods like `t.equal()` that will evaluate equality of the function's return value. 

> You can learn more about Tape by [checking out their docs](https://github.com/substack/tape). And see Tape in action in the [tests of @begin/data](https://github.com/smallwins/begin-data/blob/master/test/integration/integration-test.js)

