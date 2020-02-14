---
layout: basic.11ty.js
title: serverless web dev training with architect
---

# Set up your local development environment

1. Make sure you have the following installed on your computer:

- <a href=https://nodejs.org/en/download/ target=blank>Node</a>
- <a href=https://deno.land target=blank>Deno</a>
- <a href=https://git-scm.com/ target=blank>Git</a>

### Install Node
Go to the <a href=https://nodejs.org/en/download/ target=blank>Node.js website</a> and download the version that matches your operating system.

>To test that you have Node installed, open a terminal window and run `node -v`. You should see a version number in your terminal output, such as `12.14.1`.

### Install Deno

There are a few options for installing Deno using the command line. Choose one that is relevant to your operating system from the <a href=https://deno.land target=blank>Deno website</a>.

>To test that you have Deno installed, run `deno -V` (including the capitalization) in your terminal. You should see a version number in your output.

### Install Git

Head to the <a href=https://git-scm.com/ target=blank>Git website</a> and download Git.

> To test that you have Git installed, run `git --version` in your terminal. You should see a version number in the output.

2. Install the Architect command line interface(CLI)

The following command uses [npm](https://www.npmjs.com/), the package manager for JavaScript, to install Architect, a framework for building serverless applications. This will allow you to use Architect in any project directory on your computer.

```bash
npm install --global @architect/architect
```

Or, if you prefer, you can install Architect into a local project:

```bash
npm init @architect ./myproject
```

3. Set up production deployment with Begin

Sign up for a free account at [Begin.com](https://begin.com) with your GitHub account to deploy with Git.

4. Set up production development directly to AWS (Optional)

Architect is a completely open source project so you can deploy your projects directly to your own Amazon Web Services account anytime without Begin. In order to deploy to AWS, follow these getting started guides:

- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv1.html)
- [SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
