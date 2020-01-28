---
layout: basic.11ty.js
title: serverless web dev training with architect
---

# Setup a local development environment

1. Ensuring you have the following installed on your computer:

- <a href=https://nodejs.org target=blank>Node</a>
- <a href=https://deno.land target=blank>Deno</a>
- <a href=https://git-scm.com/>Git</a>

2. Install the Architect CLI

```bash
npm install --global @architect/architect
```

Or, if you prefer, you can install Architect into a local project:

```bash
npm init @architect ./myproject
```

3. Setup production deployment with Begin.com

Sign up for a free account at [Begin.com](https://begin.com) with your GitHub account to deploy with Git.

4. Setup production development directly to AWS (Optional)

Architect is a completely open source project so you can deploy your projects directly to your own Amazon Web Services account anytime without Begin. In order to deploy to AWS please follow these getting started guides:

- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv1.html)
- [SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
