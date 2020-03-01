---
layout: basic.11ty.js
title: serverless web dev training with architect
---

# OAuth

The open standard for authorization on the web is OAuth and it is implemented via HTTP.  In this guide we will implement OAuth for GitHub with a Static Website using Lambda and API Gateway. We will continue to work on the app from the previous section on [environment variables](https://learn.begin.com/basic/state/env)

[View the completed app here →](https://fly-ogy.begin.app/)

### 1. Add the following dependencies to your http functions.
By now, you should have a local copy of the source code. Each function has its own `package.json` to keep them isolated and performant.

```bash
cd src/http/get-login
npm init -f
npm i @architect/functions tiny-json-http

cd ../get-auth
npm init -f
npm i @architect/functions

cd ../post-logout
npm init -f
npm i @architect/functions
```


### 2. Modify `src/http/get-auth/index.js`

This `get-auth` function is used to retrieve a login link for authentication. It will also return account data if it is available on the session.

- First we attempt to read the account from the session.

- Then we construct a GitHub login URL with the secret client ID and redirect URL from the GitHub OAuth app we set up [previously](https://learn.begin.com/basic/state/env)

- Finally we return the login URL and account data if available.

```javascript
const arc = require('@architect/functions')

async function auth(req) {
  let account = req.session &&
    req.session.account
  let clientID = process.env.GITHUB_CLIENT_ID
  let redirectURL = process.env.GITHUB_REDIRECT
  let href = `https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_url=${redirectURL}`
  let payload = {
    account,
    href
  }

  return {
    body: JSON.stringify(payload)
  }
}

exports.handler = arc.http.async(auth)
```


### 3. Modify `src/http/get-login/index.js`

This `get-login` function is where our GitHub app redirects to after successfully authenticating.

If we have successfully authenticated we can then use the returned code to retrieve the account data from GitHub's API.

- We check for `req.query.code`

- Then use the code to retrieve the user account from the GitHub API

- Finally we return the account if present.

```javascript
const arc = require('@architect/functions')
const github = require('./github')

async function login(req) {
  let account
  if (req.query.code) {
    try {
      account = await github(req)
    } catch (err) {
      return {
        statusCode: err.code,
        body: err.message
      }
    }
    return {
      session: {account},
      location: '/'
    }
  } else {
    return {
      location: '/'
    }
  }
}

exports.handler = arc.http.async(login)
```


### 4. Create `src/http/get-login/github.js`

This `github.js` is used to retrieve the account data from GitHub.

- First we POST to the GitHub OAuth service with the authentication code to retrieve an access token

- Then we retrieve the account data with the access token set as an `Authorization` `Header`.

- Finally we return the account data or any error we receive.

```javascript
const tiny = require('tiny-json-http')

module.exports = async function github(req) {
  try {
    let result = await tiny.post({
      url: 'https://github.com/login/oauth/access_token',
      headers: {Accept: 'application/json'},
      data: {
        code: req.query.code,
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        redirect_url: process.env.GITHUB_REDIRECT
      }
    })
    let token = result.body.access_token
    let user = await tiny.get({
      url: `https://api.github.com/user`,
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/json'
      }
    })
    return {
      token,
      name: user.body.name,
      login: user.body.login,
      id: user.body.id,
      url: user.body.url,
      avatar: user.body.avatar_url
    }
  } catch (err) {
    return {
      error: err.message
    }
  }
}
```

### 5. Modify `src/http/post-logout/index.js`

This `post-logout` function is used to logout the user by clearing the session.

 - We clear the session by returning an empty object as the value for `session`

 - Then we redirect back to the index page

```javascript
let arc = require('@architect/functions')

async function logout(req) {
  return {
    session: {},
    location: '/'
  }
}

exports.handler = arc.http.async(logout)

```


### 6. Preview by starting the dev server

```bash
npm start
```

### 7. Deploy your changes with [Begin.com](https://begin.com) by committing your code to the `master` branch on Github. Check out your shiny new OAuth app! 
