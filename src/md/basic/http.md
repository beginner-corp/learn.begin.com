---
layout: sidebar.11ty.js
title: FASTstack training
---

# `@http`

Lambda functions listening for HTTP events from API Gateway

HTTP functions are defined very plainly with one route per line. A route in Architect is defined as: an HTTP verb and a path separated by a space (e.g. `get /foo/bar`).

An example blogging app's Architect project manifest:
```
@app
testapp

@http
get /
get /about
get /posts/:postID
post /login
post /logout
post /posts
patch /posts/:postID
delete /posts/:postID
```

> Notice how clear it is what this app does by reviewing the .arc file

This will generate the following Lambda function code:

- `src/http/get-index`
- `src/http/get-about`
- `src/http/get-posts-000postID`
- `src/http/post-login`
- `src/http/post-logout`
- `src/http/post-posts`
- `src/http/patch-posts-000postID`
- `src/http/delete-posts-000postID`

Many functions is a powerful feature not a bug. Consider this: a typical monolith also has many functions. The difference is monolith functions they have no isolation between them. Lambda functions can be tuned independently. This means each Lambda can be a different runtime with different disk and memory configuration. Lambdas can be secured discreetly with IAM to the least privilege. And they can also be deployed in parallel. Bug resolution is faster. That means iteration speed is better. 

## Behaviors

When `get /` is defined it will be 'greedy' and intercept 'not found' invocations. If `get /` is not defined everything is proxied to files in S3 defined by `@static`. When serverless side rendering you can access static assets from `/_static` to avoid brittle, confusing, and often insecure CORS.

### Exercise: post form

### Exercise: greedy web server 

### Exercise: access static assets
