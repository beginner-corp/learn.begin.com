---
layout: basic.11ty.js
title: serverless web dev training with architect
---

# Deployment

There are currently three ways to deploy an Architect app to AWS:

- <a href=#deploy-begin>Begin.com</a>
- <a href=#deploy-arc>Architect CLI</a>
- <a href=#deploy-sam>AWS SAM or CloudFormation CLI</a>

---

<h2 id=deploy-begin>Deploy with [Begin.com](https://begin.com/)</h2>

Create an app on Begin:

[![Deploy to Begin](https://static.begin.com/deploy-to-begin.svg)](https://begin.com/apps/create?template=https://github.com/begin-examples/node-minimal)

To deploy to your staging environment, all you need to do is make a change in your GitHub repo and push it to master:

```bash
git push origin master
```

Git tags deploy to production:

```bash
npm version patch
git push origin master
```

Congrats, you've deployed to your production environment!

<h2 id=deploy-arc>Deploy with Architect</h2>

Architect deploys to a `staging` stack by default, and will generate and clean up the required JSON, YAML and deployment bucket for you.

```bash
arc deploy
```

To manually deploy to a production run:

```bash
arc deploy production
```

> Protip: there are many other options for Architect deployment…it is a deployment tool!

<h2 id=deploy-sam>Deploy with SAM</h2>

Running `arc package` generates SAM/CloudFormation `sam.json` which can then be deployed by [AWS SAM](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html) or [AWS CLI](https://aws.amazon.com/cli/) tools.

```bash
arc package

sam package \
  --template-file sam.json \
  --output-template-file out.yaml \
  --s3-bucket [S3 bucket] \

sam deploy
  --template-file out.yaml \
  --stack-name [Stack Name] \
  --s3-bucket [S3 bucket] \
  --capabilities CAPABILITY_IAM,CAPABILITY_AUTO_EXPAND \
  --region [AWS_REGION]
```
> Note: `s3-bucket`, `stack-name` and `region parameters` are required

---

## Exercise: deploy an app to AWS using one or more of the methods above!
