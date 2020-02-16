---
layout: basic.11ty.js
title: serverless web dev training with architect
---

# Server side rendering 

Leverage the Deno runtime to render JSX on the backend.

1. Create a fresh Architect project

```bash
npm init @architect --runtime deno ./mydeno
cd mydeno
npm init -f
npm install -D @architect/sandbox 
npm install -D rollup
npm install -D typescript
npm install -D tslib
npm install react
npm install react-dom
npm install -D @rollup/plugin-typescript@2.0
npm install -D @types/react
npm install -D @types/react-dom
```

2. Update the build folder configuration in `.arc`

```bash
@app
mydeno

@static
folder dist

@http
get /
```

3. Update the build script in `package.json`:

```javascript
"scripts": {
  "build": "rollup -c .rollup.config.js",
  "start": "npm run build && npx sandbox"
}
```

4. Add a `.rollup.config.js` config file 

```javascript
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/browser.tsx',
  output: {
    dir: 'dist'
  },
  plugins: [typescript({
    emitDecoratorMetadata: true,
    experimentalDecorators: true,
    forceConsistentCasingInFileNames: true,
    jsx: "react",
    module: "es6",
    moduleResolution: "node",
    noImplicitAny: true,
    outDir: "./dist",
    preserveConstEnums: true,
    target: "es5"
  })]
}
```

5. Add `src/browser.tsx` for a browser entry file

```typescript
import { React, ReactDOM } from 'https://unpkg.com/es-react@16.8.60/index.js'
import { App } from './http/get-index/app.tsx'

window.addEventListener('DOMContentLoaded', () => {
  let el = window.document.getElementById('app')
  ReactDOM.hydrate(<App/>, el)
})
```

6. Modify `src/http/get-index/index.ts` to call into a render function

```typescript
import { render } from './render.tsx'

export async function handler() {
  return {
    headers: {
      'content-type': 'text/html; charset=utf8'
    },
    body: await render()
  }
}
```

7. Add `src/http/get-index/render.tsx`

```typescript
import React from 'https://dev.jspm.io/react'
import ReactDOMServer from 'https://dev.jspm.io/react-dom/server'
import { App } from './app.tsx'

export async function render() {
  let body = ReactDOMServer.renderToString(<App/>)
  return `<!DOCTYPE html>
<html>
<body>
<div id=app>${body}</div>
<script type="module" src=/_static/browser.js></script>
</body>
</html>
`
}
```

> `/_static` is a proxy to the compiled static assets on S3 which is useful when you have a Lambda function serving `get /`

8. Last of all, with all this scaffolding out of the way, add `src/http/get-index/app.tsx`

```typescript
import React from 'https://dev.jspm.io/react'

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

9. Clone the example source: 

[![Deploy to Begin](https://static.begin.com/deploy-to-begin.svg)](https://begin.com/apps/create?template=https://github.com/begin-examples/learn-node-ssr)


