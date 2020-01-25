---
layout: sidebar.11ty.js
title: FASTstack training
---

# Infrastructure as Code

Infra as Code (IaC) is like a lockfile for the cloud resources your code depends on.

IaC is a practice to capture the cloud infrastructure resource requirements alongside the application code that depends on it by saving it, usually in a declarative manifest file, in version control with the code. In the most ideal scenario the code and cloud resources can be provisioned and updated from single deterministic artifact.

Architect is an implementation of IaC for AWS.

Architect implements a manifest file in the following formats:

- `.arc`
- `arc.json` 
- `arc.yaml` 
- `arc.toml`

Architect takes the developer defined high level definition and compiles it into CloudFormation for deployment to AWS. While the AWS cloud is vast Architect is a shortcut to using only the most common serverless service primitives you need to build a very scalable application, very rapidly and at a very low cost. 

A common hello world `.arc` file:

```
@app
myapp

@http
get /
post /login
post /logout
```

This defines an app namespace of `myapp` and three Lambda functions wired up to receive requests from API Gateway for each route. Running `arc init`, `arc sandbox` or even `arc deploy` will generate the following local code:

- `src/http/get-index`
- `src/http/post-login`
- `src/http/post-logout`

Architect supports many formats. The `arc.json` equivalent:

```javascript
{
  "app": "myapp",
  "http": [
    {"get": "/"},
    {"post": "/login"},
    {"post ": "/logout"},
  ]
}
```

## Primitives supported

Architect supports the following cloud resource primitives:

### Network

- <code>@cdn</code> for the CloudFront CDN
- <code>@domains</code> to define Route53 DNS

### HTTP and web socket functions

- `@http` API Gateway
- `@ws` also API Gateway

### Storage

- `@tables` and `@indexs` to configure DynamoDB
- `@static` S3

### Asynchronous compute tasks

- `@queues` SQS
- `@events` SNS
- `@scheduled` EventBridge

### Governance

- `@macros`
