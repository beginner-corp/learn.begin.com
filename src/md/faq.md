---
layout: layout.11ty.js
title: FASTstack training
---

# Frequently asked questions

- Why serverless?
- Why AWS?
- Why choose DynamoDB?
- What is Infrastructure as Code (IaC)?
- Why choose Architect?
- How does Architect work?
- How does Architect compare to <code>$DEPLOY_TOOL</code>?

## Why serverless?

The core ethos of serverless is to outsource undifferentiated work to free your business to focus on creating its own unique value. Cloud adopters agree their core business is not running data centers. And through that evolution we are now automating deployment and scaling of our code at a very discreet level. 

Modern serverless apps share the following characteristics:

- **100% utilization** This means the compute scales to zero and we only pay for the usage; there is no provisioning of instances, pods, containers, servers or vms … business logic code and/or configuration is the sole expression of unique business value 
- **Least priv** When the runtime execution code is locked down to the least privilege security possible at a function level and by default can do nothing at all; compute execution is completely isolated at the function level with fine grained access control 
- **Infra as Code** Progressive staged delivery of deterministic artifacts; infrastructure resources requirements are expressed alongside the code that depends on them 

Only pay for what you use. Fully isolated runtime security. Shorter, more frequent and faster iterations. 

Faster lead times to production means feature addition and bug resolution is faster. And this means happy software developers and happier customers.

## Why AWS?

- market pioneer and leader with a track record of  operational excellence and resiliency 
- most services and capabilities
- most points of presence and fastest network

# Why choose DynamoDB?

- Single digit latancy no matter now many rows you have
- Auto scaling
- Generous free tier

## What is Infrastructure as Code?

Infra as Code (IaC) is like a lockfile for the cloud resources your code depends on.

IaC is a practice to capture the cloud infrastructure resource requirements alongside the application code that depends on it by saving it, usually in a declarative manifest file, in version control with the code. In the most ideal scenario the code and cloud resources can be provisioned and updated from single deterministic artifact. 

## Why choose Architect?

Architect is an Infra as Code (IaC) implementation for building serverless web apps. 

- Developer experience tuned for building serverless web applications
- Curated subset of free tier serverless primitives from AWS without the vendor specific configuration 
- Seamless frontend development workflows 
- Open source, open governance, great cadence, no breaking changes, mature and well tested
- Solid, helpful and growing community
- Deployments are standard AWS SAM and CloudFormation (eject and bail to vanilla SAM anytime or stay high level)

## How does Architect work?

Architect implements a manifest file in the following formats:

- `.arc`
- `arc.json` 
- `arc.yaml` 
- `arc.toml`

Architect takes the developer defined high level definition and compiles it into CloudFormation for deployment to AWS. While the AWS cloud is vast Architect is a shortcut to using only the most common serverless service primitives you need to build a very scalable application, very rapidly and at a very low cost. 

One way to think cloud resources is in the following categories:

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

### Governance resources


<details>
  <summary><code>@macros</code></summary>
  <p>Modify generated CloudFormation before deployment. This enables adding, removing or changing any Architect defaults.</p>
  <p>Under the hood applications will need *service discovery* and a *security model*. Architect uses environment variables and SSM parameters to store the human readable resource names (like table names) and map them to the CloudFormation generated resource names at runtime. Architect also automatically generates the neccessary IAM configuration for a least privilege role for the application compute layer. Macros are an escape hatch to change or add to any of this behavior. </p>
</details>

## Compared to…?

- K8s/Docker: containers are not serverless when the smallest unit of compute is running a literal web server
- Terraform: wide support for older monolithic architectures and, while possible, serverless is not a first class citizen missing things like local development workflows
- Serverless, mature tool with wide support to many platforms and capabilities but without deep support for web use cases; things like local development are an after thought

