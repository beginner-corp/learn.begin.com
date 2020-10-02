---
layout: basic.11ty.js
title: serverless web dev training with architect
---

# Hello world

[Begin.com](https://begin.com/) supports building static web applications alongside the popular backend JavaScript runtimes Node and Deno. You can even use both Node and Deno in the same app.

## Exercise 1: Static website

1. Create a project with Architect

To create a directory for a basic Architect static website, open a terminal window and run the following command:

```bash
arc init --static ./my-static-app
```

2. Spin up the server

Change directories to `my-static-app` and start the server:

```bash
cd my-static-app
arc sandbox
```

3. Preview the site in your browser

Copy `http://localhost:3333` from the terminal output into a web browser to preview your static website.

You should now see `Hello world` from `public/index.html`.

To stop the server, hold down the `control` + `C` keys in terminal.

---

## Exercise 2: HTTP function using Node

1. Initialize with node

To create an HTTP function with Node, open a terminal window and run the following command:

```bash
arc init --runtime node ./my-node-app
```

You should see the terminal output:

```bash
⚬ Create Bootstrapping new Architect project
  | Project name .. my-node-app
  | Creating in ... /my-node-app
✓ Create Created Architect project manifest (app.arc)
✓ Create Created new project files in src/http
✓ Create Done!
```

2. Create a `package.json` file

Change directories to the new `my-node-app` directory and run the following commands. The `--yes` flag will automatically populate `package.json` with information from the directory.

```bash
cd my-node-app
npm init --yes
```

5. Add a start script to `package.json`

```bash
    "start": "arc sandbox"
```

6. Start the server

To start the server using npm, run the following command:

```bash
npm start
```

7. Preview in browser

Visit [`http://localhost:3333`](http://localhost:3333) in your web browser to preview your Node application.

---

## Exercise 3: HTTP function using Deno

1. To create an HTTP function with Deno, open a terminal window and run the following command:

```bash
arc init --runtime deno ./my-deno-app
```

You should see output like this, as with your Node app:

```bash
⚬ Create Bootstrapping new Architect project
  | Project name .. my-deno-app
  | Creating in ... /my-deno-app
✓ Create Created Architect project manifest (app.arc)
✓ Create Created new project files in src/http
✓ Create Done!
```

2. Go to your new `my-deno-app` directory:

```bash
cd my-deno-app
```

3. Start the server:

```bash
arc sandbox
```

4. Visit [`http://localhost:3333`](http://localhost:3333) in your web browser to preview your Deno application.


---

## Exercise 4: set up testing

1. To create another new app with `arc init`, run the following command:

```bash
arc init --node ./my-app
```

2. Go to your project directory:

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

4. To install testing tools `tape` and `tap-spec`, along with `@architect/sandbox` as development dependencies, run the following command:

```bash
npm i tape tap-spec @architect/sandbox -D
```

5. To add tests to your app, open your `package.json` file in a text editor and replace the test script line with:  

```javascript
    "start": "arc sandbox", // start script
    "test": "tape test/index-test.js | tap-spec" // test script
```

6. To add the test scaffolding, create a `test` folder in the root of your project with `index-test.js` file in it, and add the following to your `test/index-test.js` file inside your project directory:

```javascript
// example sandbox start/stop

let sandbox = require('@architect/sandbox')
let test = require('tape')

test('Start the Sandbox', async t => {
    t.plan(1)
    let result = await sandbox.start()
    t.ok(result, 'Sandbox successfully started')
  })
  
//   test('Tests go here', t => {
//     // Make use of various Sandbox resources in your tests...
//   })
  
  test('Shut down the Sandbox', async t => {
    t.plan(1)
    let result = await sandbox.end()
    t.ok(result, 'Sandbox successfully shut down')
  })
```

7. Run the tests using `npm`:

 ```bash
 npm t
 ```

8. Add a test to see that `http://localhost:3333` returns an HTTP statusCode 200 using `tiny-json-http`
