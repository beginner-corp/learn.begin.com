---
layout: sidebar.11ty.js
title: FASTstack training
---

## Deploying with Begin.com

Sign up for an account at [Begin.com](https://begin.com) with your GitHub account. Deploying with Begin requires `node` to work locally in the sandbox and `git` to commit code. 

Code magically deploys instantly to AWS whenever you commit.

> We also recommend installing optional runtimes: Deno, Ruby 2.5 and Python3.7

## Deploying directly to AWS

Architect is a completely open source project so you can deploy your projects directly to your own Amazon Web Services account without Begin. Installing Architect will even work locally without an AWS account setup.

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

- AWS CLI
- SAM CLI
