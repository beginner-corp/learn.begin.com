---
layout: sidebar.11ty.js
title: FASTstack training
---

# Why

- Outsource undifferentiated heavy lifting and focus on core business value
- Scaling to zero to achieve 100% utilization
- Operational excellence and resiliency
- Least privilege security by default
- Better iteration speed, lead time to production and bug resolution

## Infrastructure as Code

Infra as Code (IaC) is a practice to capture the cloud infrastructure resource requirements alongside the application code that depends on it by saving it, usually in a declarative manifest file, in version control with the code. In the most ideal scenario the code and cloud resources can be provisioned and updated from single deterministic artifact. IaC is like a lockfile for an applications cloud resources.

## Implemenation

Architect is an IaC implementation for building serverless web apps. Architect implements a manifest file in the following formats:

- `.arc`
- `arc.json` 
- `arc.yaml` 
- `arc.toml`

Architect takes the developer defined high level definition and compiles it into CloudFormation for deployment to AWS.

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
