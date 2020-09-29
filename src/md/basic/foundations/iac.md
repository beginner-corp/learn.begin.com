---
layout: basic.11ty.js
title: serverless web dev training with architect
---

# Infrastructure as Code

### Infra as Code (IaC) is a lockfile for the cloud resources your code depends on

IaC is a practice to capture the cloud infrastructure resource configuration requirements alongside the application code that depends on it by saving it, usually in a declarative manifest file, into revision control with the code that depends on it. This allows the code and cloud resources be provisioned and updated from single versioned and therefore deterministic artifact.

Architect takes the developer defined high level `.arc` file definition and compiles it into the low level `sam.yaml` CloudFormation template required for deployment to AWS. While the AWS cloud is vast Architect is a shortcut to using only the most common serverless service primitives you need to build a very scalable application, very rapidly and at a very low cost. 

An example `app.arc` file:

```bash
# this is a comment
@app
myapp

@static
folder dist 

@http
post /graphql
post /login
post /logout
```

The file above defines an app namespace of `myapp`, an S3 bucket website and three Lambda functions wired up to receive requests from API Gateway for each route. The local project code looks like this:

```
|-dist
| |-index.html
| |-index.css
| '-index.js
|-src
| '-http
|   |-post-graphql
|   |-post-login
|   '-post-logout
'-.arc
```

Everything in `dist` gets deployed to S3. Functions in `src` are deployed to Lambda.
