---
layout: basic.11ty.js
title: serverless web dev training with architect
---

# Server side rendering

Leverage the Deno runtime to render HTML on the backend.

1. Create a fresh Architect project

```bash
npm init @architect ./mydeno
cd mydeno

```

2. Update the build folder configuration in `app.arc`

```bash
@app
mydeno

@static

@http
get /
```

3. Update the `arc.config` file in `src/http/get-index`:

```bash
# arc.config
@aws
runtime deno
```

4. Update the `get-index` function with the following:
```javascript
// src/http/get-index/index.js

import HTML from './components/html.js'

export async function handler(req) {
  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: HTML({
      title: 'Deno Clock'
    })
  }
}
```

5. Create `src/http/get-index/components/html.js`:
```javascript
import Main from './main.js'

export default function (state = {}) {
  let { title } = state
  return `
<!DOCTYPE html>
<html>
<head>
  <title>${title}</title>
  <style>
   h1 {
     font-size: 3em;
   }
   p {
     font-size: 2em;
   }
  </style>
</head>
 <body>
  ${Main()}
  <script src='_static/index.js'> </script>
 </body>
</html>
  `
}
```

6. Create `src/http/get-index/components/main.js`
```javascript
export default function Main(state={}) {

  return `
  <div>
  <h1> Hello From Deno </h1>
  <p> It is now <span id='time'></span> </p>
  </div>
  `
}
```

7. Create `public/index.js`

```javascript
console.log('Hello World from client-side JS')
let timeSpan = document.querySelector('#time')

function myTimer() {
  let date = new Date()
  let time = date.toLocaleTimeString()
  timeSpan.textContent = time
}

let updateTime = setInterval(myTimer, 1000)
```

8. Start the local dev server and check out your work at http://localhost:3333.

```bash
npm start
```

8. Clone the example source:

[![Deploy to Begin](https://static.begin.com/deploy-to-begin.svg)](https://begin.com/apps/create?template=https://github.com/begin-examples/learn-deno-ssr)
