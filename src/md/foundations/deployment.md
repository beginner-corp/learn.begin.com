---
layout: sidebar.11ty.js
title: FASTstack training
---

# Deployment

There are currently three ways to deploy an Architect app to AWS:

- <a href=#deploy-begin>Begin.com</a>
- <a href=#deploy-arc>Architect CLI</a>
- <a href=#deploy-sam>AWS SAM or CloudFormation CLI</a>

<hr>

<h2 id=deploy-begin>Deploy with Begin.com</h2>

If you've created an app using [Begin.com](https://begin.com) all you need to do is commit to master!

```bash
git push origin master
```

Git tags deploy to production.

```bash
npm version patch 
git push origin master
```

That's it!

---
<h2 id=deploy-arc>Deploy with Architect</h2>

Architect deploys to a `staging` stack by default, will generate and cleanup all the required JSON, YAML and deployment bucket ceremony for you.

```bash
arc deploy
```

To manually deploy to a production stack run `arc deploy production`. 

> Protip: there are many other options for Architect deployment…it is a deployment tool!


---
<h2 id=deploy-sam>Deploy with SAM</h2>

Running `arc package` generates SAM/CloudFormation `sam.json` which can then be deployed by AWS SAM or AWS CLI tools.

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
> Note: s3-bucket, stack-name and region parameters are required

---
### Exercise 103: deploy an app to AWS using one or more of the methods above!
