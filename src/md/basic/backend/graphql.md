---
layout: basic.11ty.js
title: serverless web dev training with architect
---

# GraphQL

GraphQL is a software architectural style that defines a set of constraints for creating web services. Defined by Facebook in parallel with React the principles of GraphQL are extremely useful building blocks for web applications.

GraphQL defines a query language with a complementary schema definition language. Frontend developers author queries with a great deal more flexibility and predictability without needing to implement modifications to the backend data layer. Uncoupling the data layer has always been a good practice but GraphQL formalizes the practice with a strong schemas that confer inherent validation. GraphQL also has concepts for writing data (called mutations) and real time (called subscriptions). 

In this guide we will implement a GraphQL API using Lambda, API Gateway and DynamoDB from scratch. 

Clone the complete project on Begin

[![Deploy to Begin](https://static.begin.com/deploy-to-begin.svg)](https://begin.com/apps/create?template=https://github.com/begin-examples/learn-node-forms)

1. To start from scratch create a brand new `.arc` application

```bash
@app
graphql-example

@static
folder public

@http
get /login
post /logout
post /graphql

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
```

We will skip implementing `get /login` and `get /logout` (covered by [oAuth](/basic/state/oauth)) and focus on implementing `post /graphql` endpoint.

2. Create `public/index.html` 

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset=utf-8>
  <meta name=viewport 
    content=user-scalable=no,initial-scale=1,minimum-scale=1,maximum-scale=1,minimal-ui>
  <title>GraphQL Playground</title>
  <link rel=stylesheet 
    href=//cdn.jsdelivr.net/npm/graphql-playground-react/build/static/css/index.css>
  <link rel="shortcut icon"
    href=//cdn.jsdelivr.net/npm/graphql-playground-react/build/favicon.png>
  <script src=//cdn.jsdelivr.net/npm/graphql-playground-react/build/static/js/middleware.js></script>
</head>
<body>
<div id=root>
  <style>
    body {
      background-color: rgb(23, 42, 58);
      font-family: Open Sans, sans-serif;
      height: 90vh;
    }

    #root {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .loading {
      font-size: 32px;
      font-weight: 200;
      color: rgba(255, 255, 255, .6);
      margin-left: 20px;
    }

    img {
      width: 78px;
      height: 78px;
    }

    .title {
      font-weight: 400;
    }
  </style>
  <img src=//cdn.jsdelivr.net/npm/graphql-playground-react/build/logo.png>
  <div class=loading> Loading
    <span class=title>GraphQL Playground</span>
  </div>
</div>
<script>
window.addEventListener('load', function main(event) {
  GraphQLPlayground.init(document.getElementById('root'), {
    endpoint: '/graphql',
    settings: {
      'request.credentials': 'include'
    }
  })
})
</script>
</body>
</html>
```

3. Create `src/http/post-graphql/index.js`

Middleware is a nice pattern for HTTP functions. In this Lambda we register `auth` to run first and, if it does not respond, `query` will run next.

```javascript
let arc = require('@architect/functions')
let auth = require('./middleware/auth')
let query = require('./middleware/query')

exports.handler = arc.http.async(auth, query)
```

4. Create `src/http/post-graphql/middleware/auth.js` 

This middleware ensures the current session is authenticated if they want to run a GraphQL mutation.

```javascript
// mutations require req.session.account
module.exports = async function auth(req) {

  let client_id = process.env.GITHUB_CLIENT_ID
  let redirect_uri = process.env.GITHUB_REDIRECT
  let base = `https://github.com/login/oauth/authorize`
  let href = `${base}?client_id=${client_id}&redirect_uri=${redirect_uri}`

  if (!req.session.account && req.body.query.startsWith('mutation')) {
    return {
      statusCode: 403,
      json: {
        error: 'not_authorized',
        message: 'please sign in',
        href
      }
    }
  }
}
```

5. Create `src/http/post-graphql/middleware/query.js` 

This is the GraphQL query boilerplate. 

```javascript
let { graphql } = require('graphql')
let { makeExecutableSchema } = require('graphql-tools')

let fs = require('fs')
let path = require('path')

// 1. read resolvers
let { account, draft, drafts, save, destroy } = require('../resolvers')

// 2. read the schema
let typeDefs = fs.readFileSync(path.join(__dirname, '..', 'schema.graphql')).toString()

// 3. combine resolvers and schema
let schema = makeExecutableSchema({
  typeDefs,
  resolvers: {
    Query: { draft, drafts },
    Mutation: { account, save, destroy }
  }
})

/** graphql middleware */
module.exports = async function query({body, session}) {
  try {
    let result = await graphql(schema, body.query, {}, session, body.variables, body.operationName)
    return {
      json: result
    }
  }
  catch(e) {
    return {
      json: { error: e.name, message: e.message, stack: e.stack }
    }
  }
}

```

6. Define `src/http/post-graphql/schema.graphql`

```graphql
type Account {
  id: ID!
  name: String
  avatar: String
  login: String
}

type Draft {
  key: ID!
  title: String
  body: String
}

type Query {
  draft(key: String): Draft
  drafts(cursor: String): [Draft]
}

type Mutation {
  account: Account
  save(title: String!, body: String!): Draft
  destroy(key: String!): Boolean
}

```

7. Implement `src/http/post-graphql/resolvers.js`

The main event! This is the data access layer implementation for GraphQL. We'll use `@begin/data` with DynamoDB.

```javascript
let data = require('@begin/data')
let xss = require('xss')

module.exports = {
  account,
  draft,
  drafts,
  save,
  destroy
}

async function account(root, args, session) {
  if (!session.account)
    throw Error('not authorized')
  let copy = session.account
  delete copy.token
  return copy
}

async function draft(root, args, session) {
  return await data.get({
    table: 'drafts',
    ...args
  })
}

async function drafts(root, args, session) {
  return await data.get({
    table: 'drafts',
  })
}

async function save(root, draft, session) {
  if (!session.account)
    throw Error('not authorized')
  let required = ['title', 'body']
  for (let param of required) {
    if (!draft[param])
      throw ReferenceError(`missing param ${param}`)
    if (draft[param] && draft[param].length < 4)
      throw RangeError(`${param} must be four or more characters`)
  }
  draft.author = session.account.name
  draft.avatar = session.account.avatar
  draft.title = xss(draft.title)
  draft.body = xss(draft.body)
  return await data.set({
    table: 'drafts',
    ...draft
  })
}

async function destroy(root, draft, session) {
  if (!session.account)
    throw Error('not authorized')
  return await data.destroy({
    table: 'drafts',
    ...draft
  })
}

```

8. Preview by starting the dev server

```bash
npm start
```

