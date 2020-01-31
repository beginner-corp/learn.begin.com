---
layout: basic.11ty.js
title: serverless web dev training with architect
---

# oAuth

The open standard for authorization on the web is oAuth and it is implemented via HTTP. In this guide we will implement oAuth for GitHub using Lambda and API Gateway.

1. Add dependencies 

```bash
cd src/http/get-login
npm init -f
npm i @architect/functions tiny-json-http

cd ../get-admin
npm init -f
npm i @architect/functions

cd ../post-logout
npm init -f
npm i @architect/functions
```

2. Modify `src/http/get-admin/index.js`

```javascript
let arc = require('@architect/functions')
let admin = require('./admin')
let signin = require('./signin')

async function http(req) {

  let account = req.session.account
  let render = account? admin : signin

  return {
    html: render(account)
  }
}

exports.handler = arc.http.async(http)
```

3. Add `src/http/get-admin/signin.js`

```javascript
module.exports = function signin() {

  let client_id = process.env.GITHUB_CLIENT_ID
  let redirect_uri = process.env.GITHUB_REDIRECT
  let href = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}`

  return `
<!doctype html>
<html>
<body>
<a href=${href}>Sign in with GitHub</a>
</body>
</html>`
}
```

4. Add `src/http/get-admin/admin.js`

```javascript
module.exports = function admin(account) {
  return `
<!doctype html>
<html>
<body>
<form method=post action=/logout>
  <button>Logout</button>
</form>
<pre>${JSON.stringify(account, null, 2)}</pre>
</body>
</html>`
}
```

5. Modify `src/http/get-login/index.js`

```javascript
let arc = require('@architect/functions')
let github = require('./github')

async function login(req) {
  if (req.query.code) {
    let account = await github(req)
    return {
      session: {account},
      location: '/admin'
    }
  }
  else {
    return {
      location: '/admin/?authorized=false'
    }
  }
}

exports.handler = arc.http.async(login)
```

6. Create `src/http/get-login/github.js`

```javascript
let tiny = require('tiny-json-http')

module.exports = async function github(req) {

  // trade the code for an access token
  let result = await tiny.post({
    url: 'https://github.com/login/oauth/access_token',
    headers: {Accept: 'application/json'},
    data: {
      code: req.query.code,
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      redirect_uri: process.env.GITHUB_REDIRECT,
    }
  })

  let token = result.body.access_token

  // use the access token to get the user account
  let user = await tiny.get({
    url: `https://api.github.com/user?access_token=${token}`,
    headers: {Accept: 'application/json'},
  })

  // create a clean acccount obj
  return {
    token,
    name: user.body.name,
    login: user.body.login,
    id: user.body.id,
    url: user.body.url,
    avatar: user.body.avatar_url
  }
}
```


7. Preview by starting the dev server

```bash
npm start
```

8. Deploy to [Begin.com](https://begin.com)
