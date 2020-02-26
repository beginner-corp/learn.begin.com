---
layout: basic.11ty.js
title: serverless web dev training with architect
---

# Environment variables

Environment variables allow us to parameterize sensitive state, like third party API keys and URLs, without hard coding them into our application code. We will take you through the process of using those variables to create an application with a user login. 

1. To start, deploy the Begin template below. When prompted give it a cool name!

[![Deploy to Begin](https://static.begin.com/deploy-to-begin.svg)](https://begin.com/apps/create?template=https://github.com/begin-examples/learn-static-oauth)

> Make note of the `staging` and `production` URLs after it is deployed. 

2. Create *three* OAuth applications on GitHub [following these instructions](https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/) …this ensures totally isolated systems for `testing`, `staging` and `production` environments

| Application name  | Homepage URL                      | Authorization callback URL               |
|------------------ |---------------------------------- |----------------------------------------- |
| My App Local      | http://localhost:3333             | http://localhost:3333/login              |
| My App Staging    | https://foo-123-staging.begin.app | https://foo-123-staging.begin.app/login  | 
| My App Production | https://foo-123.begin.app         | https://foo-123.begin.app/login          |


3. Set up local development for this project. 

```bash
# Clone your app repo locally
git clone https://github.com/username/begin-app-project-name.git

# cd into your Begin project dir
cd begin-app-project-name

# Install NPM packages
npm install
```

4. Create a file called `.arc-env` in the root of the project directory and add the GitHub Client ID, Github Secret Key and redirect values from the Github OAuth apps created in step 2. This will allow you to test your app locally.

```bash
# .arc-env
@testing
GITHUB_CLIENT_ID xxx
GITHUB_CLIENT_SECRET xxx
GITHUB_REDIRECT http://localhost:3333/login
```
> ⚠️ **Do not commit**  `.arc-env` to revision control. Make sure it is added to your `.gitignore`. 

4. Add the environment variables for `staging` and `production` on Begin. To add your environment variables, open `Environments` in the left nav of your project's console.

![Environment Variables Screenshot](/assets/screenshots/env-screenshot.jpg)

5. Now that the environment variables are set both locally in the `.arc-env` file and on Begin, Proceed to [implement OAuth](/basic/state/oauth)
