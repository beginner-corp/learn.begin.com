---
layout: basic.11ty.js
title: serverless web dev training with architect
---

# Hello world

[Begin.com](https://begin.com/) supports building static web applications alongside the popular backend JavaScript runtimes Node and Deno. You can even use both Node and Deno in the same app. Or other programming languages like Ruby and Python.

## Exercise 1: preview in the browser

Build and preview all the different runtime starter apps you are interested in!

### Static website

1. To create a directory for a basic Architect static website, open a terminal window and run the following command:

```bash
arc init --static ./my-static-app
```

>To test that this was successful, run `ls` in the terminal. One of the directories should be `my-static-app`, or the name of your choice.

2. Change directories so you're now in your `my-static-app` directory:

```bash
cd my-static-app
```

3. To start a server running on your computer, run the following command:

```bash
arc sandbox
```

4. Copy `http://localhost:3333` from the terminal output into a web browser window to preview your static website.

>You should see `Hello world from public/index.html` in your browser window.

5. To stop the server, go back to your terminal window and hold down the `control` + `C` keys.

### Node

1. To create an HTTP function with Node, open a terminal window and run the following command:

```bash
arc init --runtime node ./my-node-app
```

2. You should see terminal output somewhat like this:

```bash
⚬ Create Bootstrapping new Architect project
  | Project name .. my-node-app
  | Creating in ... /my-node-app
✓ Create Created Architect project manifest (.arc)
✓ Create Created new project files in src/http
✓ Create Done!
```

3. Change directories so you're now in your new `my-node-app` directory:

```bash
cd my-node-app
```

4. To create a default `package.json` file inside your project using npm, run the following command:

```bash
npm init --yes
```
## [need to add installing npm packages and a start script here for package.json]

5. To start the server using npm, run the following command:
```bash
npm start
```

6. Copy `http://localhost:3333` from the terminal output into a web browser window to preview your Node application.

7. To stop the server, go back to your terminal window and hold down the `control` + `C` keys.

### Deno

1. To create an HTTP function with Deno, open a terminal window and run the following command:

```bash
arc init --runtime deno ./my-deno-app
```

You should see output like this, as with your Node app:

```bash
⚬ Create Bootstrapping new Architect project
  | Project name .. my-deno-app
  | Creating in ... /my-deno-app
✓ Create Created Architect project manifest (.arc)
✓ Create Created new project files in src/http
✓ Create Done!
```

2. Change directories so you're now in your new `my-deno-app` directory:

```bash
cd my-deno-app
```

3. Start the server:

```bash
arc sandbox
```

4. Copy `http://localhost:3333` from the terminal output into a web browser window to preview your Deno application.

5. To stop the server, go back to your terminal window and hold down the `control` + `C` keys.

---

## Exercise 2: set up testing

1. To create another new app with `arc init`, run the following command:

```bash
arc init --node ./my-app
```

2. Change directories to go to your project directory:

```bash
cd my-app
```

You should now have a source tree that looks like this:

```bash
my-app
  └── src
      └── http
          └── get-index
              └── index.js
```

3. To create a default `package.json` file using npm, run the following command:

```bash
npm init --yes
```

4. To install testing tools `tape` and `tap-sec` as development dependencies, run the following command:

```bash
npm i tape tap-spec -D
```

3. To add tests to your app, open your `package.json` file in a text editor and replicate the test script line with:  

```javascript
    "test": "tape test/index-test.js | tap-spec"
```

4. To add the test scaffolding, add the following to your `index.js` file inside your project directory:

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

5. Run the tests using npm:

 ``bash
 npm t
 ```

6. Add a test to see that `http://localhost:3333` returns an HTTP statusCode 200 using `tiny-json-http`
