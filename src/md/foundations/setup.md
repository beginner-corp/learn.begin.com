---
layout: sidebar.11ty.js
title: FASTstack training
---

## Deploying with Begin.com

Sign up for a free account at [Begin.com](https://begin.com) with your GitHub account. Deploying with Begin requires `node` and `deno` to work locally in the sandbox and `git` to commit code. Code deploys instantly to AWS for every commit.

## Deploying directly to AWS

Architect is a completely open source project so you can deploy your projects directly to your own Amazon Web Services account anytime without Begin. Installing Architect will even work locally without an AWS account setup.

### Global installation

```bash
npm install --global @architect/architect
```

### Local installation

If you prefer you can install Architect local to a project:

```bash
npm init @architect ./myproject
```

### AWS Setup

In order to deploy to AWS please follow these getting started guides:

- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv1.html)
- [SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
