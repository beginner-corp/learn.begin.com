---
layout: layout.11ty.js
title: FASTstack training
---

# Why

- Outsource undifferentiated heavy lifting and focus on core business value
- Scaling to zero to achieve 100% utilization
- Operational excellence and resiliancy
- Least priviledge security by default
- Better iteration speed, lead time to production and bug resolution

## Infrastructure as Code

Infra as Code (IaC) is a practice to capture the cloud infrastructure resource requirements alongside the application code that depends on it by saving it, usually in a declarative manifest file, in version control with the code. In the most ideal scenario the code and cloud resources can be provisoined and updated from single deterministic artifact. IaC is like a lockfile for an applications cloud resources.

## Implemenation

Architect is an IaC implementation for building serverless web apps. Architect implements a manifest file in the following formats:

- `.arc`
- `arc.json` 
- `arc.yaml` 
- `arc.toml`

Architect takes the developer defined high level definition and compiles it into the neccessary CloudFormation for deployment to AWS.

### Compute resources
<details><summary><code>@http</code></summary><p>Lambda functions handing HTTP events from API Gateway</p></details>
<details><summary><code>@ws</code></summary><p>Lambda functions handing HTTP events from API Gateway</p></details>
<details><summary><code>@events</code></summary><p>Lambda functions handing HTTP events from API Gateway</p></details>
<details><summary><code>@queues</code></summary><p>Lambda functions handing HTTP events from API Gateway</p></details>
<details><summary><code>@scheduled</code></summary><p>Lambda functions handing HTTP events from API Gateway</p></details>

### Storage resources
<details><summary><code>@static</code></summary><p>Lambda functions handing HTTP events from API Gateway</p></details>
<details><summary><code>@tables</code></summary><p>Lambda functions handing HTTP events from API Gateway</p></details>
<details><summary><code>@indexes</code></summary><p>Lambda functions handing HTTP events from API Gateway</p></details>

### Network resources
<details><summary><code>@cdn</code></summary><p>Lambda functions handing HTTP events from API Gateway</p></details>
<details><summary><code>@domains</code></summary><p>Lambda functions handing HTTP events from API Gateway</p></details>

