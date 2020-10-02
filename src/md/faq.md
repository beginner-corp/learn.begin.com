---
layout: layout.11ty.js
title: FASTstack training
---

# Frequently asked questions

- <a href=#who-is-this-for>Who is this for?</a>
- <a href=#why-serverless>Why serverless?</a>
- <a href=#why-aws>Why AWS?</a>
- <a href=#why-dynamo>Why choose DynamoDB?</a>
- <a href=#what-is-iac>What is Infrastructure as Code (IaC)?</a>
- <a href=#why-architect>Why choose Architect?</a>
- <a href=#how-architect>How does Architect work?</a>
- <a href=#compare>How does Architect compare to <code>$DEPLOY_TOOL</code>?</a>
- <a href=#what-resources>What cloud resources are currently supported by Architect?</a>
- <a href=#how-to-extend>How do I extend Architect to use AWS resources not directly supported?</a>
- <a href=#how-to-eject>How do I export `app.arc` to raw CloudFormation?</a>
- <a href=#where-are-examples>Where can I find examples?</a>


<h1 id=who-is-this-for>Who is this for?</h1>

This guide is designed for web dev beginners who want to get started with building modern serverless web applications on AWS from scratch. This guide does not assume that you have any prior experience with AWS.

<h1 id=why-serverless>Why serverless?</h1>

The core ethos of serverless is to outsource undifferentiated work so you can focus on creating unique value. Cloud adopters agree their core business is not running data centers. And through that evolution we are now automating deployment and scaling of our code at an increasingly discreet level of granularity. 

Modern serverless web apps share the following characteristics:

- **100% utilization** This means the compute scales to zero and we only pay for the usage; there is no provisioning of instances, pods, containers, servers or virtual machines … business logic code and/or configuration is the sole expression of unique business value 
- **Least privilege** When the runtime execution code is locked down to the least privilege security possible at a function level and by default can do nothing at all; compute execution is completely isolated at the function level with fine grained access control 
- **Infra as Code** Progressive staged delivery of deterministic artifacts; infrastructure resources requirements are expressed alongside the code that depends on them 

Said another way: 
- Only pay for what you use
- Completely isolated and granular runtime security
- Fully deterministic deploys

This is important to you because these characteristics in tandem lead to shorter, more frequent and faster iterations. Faster lead times to production means feature addition and bug resolution is faster. And this means happy software developers and happier customers.

<h1 id=why-aws>Why AWS?</h1>

- market pioneer and leader with a track record of  operational excellence and resiliency 
- most services and capabilities
- most points of presence and fastest network

<h1 id=why-dynamo>Why choose DynamoDB?</h1>

- Single digit latency no matter now many rows you have
- Auto scaling
- Generous free tier

<h1 id=what-is-iac>What is Infrastructure as Code?</h1>

Infra as Code (IaC) is like a lockfile for the cloud resources your code depends on.

IaC is a practice to capture the cloud infrastructure resource requirements alongside the application code that depends on it by saving it, usually in a declarative manifest file, in version control with the code. In the most ideal scenario the code and cloud resources can be provisioned and updated from single deterministic artifact. 

<h1 id=why-architect>Why choose Architect?</h1>

Architect is an Infra as Code (IaC) implementation for building serverless web apps. 

- Developer experience tuned for building serverless web applications
- Curated subset of free tier serverless primitives from AWS without the vendor specific configuration 
- Seamless frontend development workflows 
- Open source, open governance, great cadence, no breaking changes, mature and well tested
- Solid, helpful and growing community
- Deployments are standard AWS SAM and CloudFormation (eject and bail to vanilla SAM anytime or stay high level)

<h1 id=how-architect>How does Architect work?</h1>

Architect implements an Infrastructure as Code  manifest file in the following formats: `app.arc`, `arc.json`, `arc.yaml` and `arc.toml`.

Architect takes the developer defined high level definition and compiles it into CloudFormation for deployment to AWS. While the AWS cloud is vast, Architect is a shortcut to using only the most common serverless service primitives you need to build a very scalable application, very rapidly and at a very low cost. 

<h2>Common Service Primitives</h2>
Architect primitives are based on the following AWS serverless ecosystem services:

- [CloudFormation](https://aws.amazon.com/cloudformation/) and [SAM](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-reference.html#serverless-sam-cli) for AWS standard deployments
- [Lambda](https://aws.amazon.com/lambda/) cloud native functions for compute
- [API Gateway](https://aws.amazon.com/api-gateway/) for HTTP and Websocket functions
- [Route53](https://aws.amazon.com/route53/) for DNS
- [CloudFront](https://aws.amazon.com/cloudfront/) for CDN
- [S3](https://aws.amazon.com/s3/) for static assets
- [Simple Notification Service](https://aws.amazon.com/sns/) for event pub/sub functions
- [Simple Queue Service](https://aws.amazon.com/sqs/) for queue functions
- [CloudWatch Events](https://docs.aws.amazon.com/lambda/latest/dg/with-scheduled-events.html) for scheduled functions
- [DynamoDB](https://aws.amazon.com/dynamodb/) for persistence of structured data and trigger functions
- [Parameter Store](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html) for service discovery and environment variables
- [IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#grant-least-privilege) automatically generated least privilege role

> Note: with [Architect Macros](https://arc.codes/primitives/macros) all AWS services supported by CloudFormation can be utilized!


<h1 id=compare>Compared to…?</h1>

- K8s/Docker: containers are not serverless when the smallest unit of compute is running a literal web server
- Terraform: wide support for older monolithic architectures and, while possible, serverless is not a first class citizen missing things like local development workflows
- Serverless, mature tool with wide support to many platforms and capabilities but without deep support for web use cases; things like local development are an after thought

<h1 id=what-resources>What cloud resources are currently supported by Architect?</h1>

Architect curates AWS to the minimum essential complexity so you can focus on shipping your app. It selects services that are serverless, scale to zero and have generous free tiers. 

### Compute resources
<details>
  <summary><code>@http</code></summary>
  <p>Lambda functions handing HTTP events from API Gateway.</p>
</details>
<details>
  <summary><code>@ws</code></summary>
  <p>Lambda functions handing web socket events from API Gateway.</p>
</details>
<details>
  <summary><code>@events</code></summary>
  <p>Lambda functions subscribed to SNS topics.</p>
</details>
<details>
  <summary><code>@queues</code></summary>
  <p>Lambda functions subscribed to SQS queues.</p>
</details>
<details>
  <summary><code>@scheduled</code></summary>
  <p>Lambda functions subscribed to an EventBridge rule with a schedule expression. Often colloquially referred to as "CRON Lambdas".</p>
</details>

### Storage resources
<details>
  <summary><code>@static</code></summary>
  <p>S3 the original serverless hero.</p>
</details>
<details>
  <summary><code>@tables</code></summary>
  <p>DynamoDB tables the leading serverless database.</p>
</details>
<details>
  <summary><code>@indexes</code></summary>
  <p>Define additional access patterns for DynamoDB tables. Each index is a full copy of the Dynamo table (with a different key schema for indexing) so be aware each indexe added will cost more. DynamoDB billing is faceted. Amazon charges for: reading data, writing data and storing data…among other things, but suffice to say, the free tier is generous. The first 25 GB stored per month is free. </p>
</details>

### Network resources
<details>
  <summary><code>@cdn</code></summary>
  <p>CloudFront is one of the oldest and largest content delivery networks in the industry.</p>
</details>
<details>
  <summary><code>@domains</code></summary>
  <p>Defines Route53 records for <code>@static</code>, <code>@http</code> and <code>@ws</code></p>
</details>

<h1 id=how-to-extend>How do I extend Architect to use AWS resources not directly supported?</h1>

Architect has a capability called `@macros` that allow you to intercept and modify generated CloudFormation prior to deployment. You can change any Architect defaults and extend it into any AWS service supported by CloudFormation.

<h1 id=how-to-eject>How do I export `app.arc` to raw CloudFormation?</h1>

Running `arc package` will export the current `app.arc` file as raw AWS CloudFormation.

<h1 id=where-are-examples>Where can I find examples?</h1>

Check out [examples at GitHub.com/begin-examples](https://github.com/begin-examples).
