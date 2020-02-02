---
layout: layout.11ty.js
title: FASTstack training
---

# Jargon file
## Some of these terms are still being defined by the community and can exist on a sliding scale depending on the context of the situation. We encourage you to help define these words as you gain experience with modern application architecture. 

- 100% Utilization
  - You will only pay for what you use. For example, if you create a Lambda function, and you never execute it, you will not be charged for that resource. Lambdas are designed to only charge you for the time it is spent executing your code. It does not include the time it takes to create the underlying infrastructure and the time it is in standby. You can liken it to a metered resource like water or electricity. 

- Artifact (Build Artifact)
  - This is a file, or set of files, produced by a build step in your work flow. A build step might include front end assets that are minified or transpiled for browser compatibility. It also includes CloudFormation templates produced by Architect. A completed artifact can be tracked and will be the source of truth for your application in production. 

- Blast Radius
  - Modern web applications are made up of many small components and our target architecture pattern will reduce the amount of components that are affected by one particular piece. Reducing a functions "blast radius" refers to encapsulating errors and bugs to a minimum so it doesn't interfere with the system as a whole. There will be bugs in your code, using good serverless patterns, we can limit the amount of cascading damage to other parts of the application. 

- Cold Start
  - When your function is executed, the cloud provider performs a series of operations to provision compute resources, load your code, and make it ready to receive requests. The amount of time this process takes before you can receive a request and execute your function is known as the cold start time. The length of cold starts depend on a number of factors such as your function size, number of dependencies, runtimes, and how long it has been since the last time the lambda was triggered. In general we want to reduce the cold start time by making our functions small with minimal dependencies. Cloud providers have been constantly making improvements to reduce cold starts by optimizing their process. 

- CRON Lambdas
  - All Lambda functions are triggered, or invoked, by an event. The most common trigger is a HTTP request. Cron Lambdas are triggered at a specific time or continuous loop of time. For example, you can have a lambda run every morning at 9 a.m. to produce a report for your day. You can also schedule a Cron Lambda to run every hour to make an update.

- Declarative
  - This is a paradigm in programming that means we tell the system what our desired end state should be. This is in contrast to imperative programming where we give a system explicit instructions to execute. This is the difference between "Make me a tuna sandwich" and "Take 2 slices of bread, open a can of tuna, mix tuna with mayonnaise, etc". When we work with infrastructure in a declarative fashion, we are letting the cloud providers know what we want instead of how to do it. This reduces the amount of mental work a developer needs to do in order to have their program execute. The "how it's done" is taken care of by the cloud service provider. The cloud is a sandwich maker, we are just hungry and want a sandwich. 

- Determinism
  - This means that an algorithm will always produce a known output given the same input. The computations will always perform the same operations in the same sequence. 
  
- Spacklepunched
  -  An event produced by the cloud provider when they update a service right after you spent significant time creating a work around to accomplish the same thing. You might find yourself working with a cloud service that doesn't quite do what you want, these services are always getting better over time and sometimes a fix is around the corner. At that point you might get spacklepunched. 

- FASTstack
  - A short hand term for a set of technologies that enable a developer to build web applications with Functions as a Service, APIs, Storage, and Testing. The FASTstack is a technology and language-agnostic approach to building modern, full-featured web apps, sites, and APIs. It empowers individuals and teams of all sizes to rapidly prototype, ship, and scale their apps in a secure, reproducible way.
  - The FASTstack also provides a clear path to growing an app's capabilities. Delivering the most sophisticated functionality to your customers should never come at the cost of a total rewrite and major architecture change.

- Idempotence 
  - This is a property of a function which produces the same result regardless of the number of times it is executed. This is important to consider when a user is expecting a known operation to behave the same way each time. For example, if a user wants to retrieve their data. They should be able to access the data multiple times and not receive different results, until they make an update to the data. 

- Infrastructure as Code
  - The resources required to run an application is defined by a machine readable file that it can reproduce consistently. This is achieved with manifests that are executed by programs, rather than a human interface. 

- Imperative
 - This is a paradigm of programming with explicit instructions for how the computer should perform an operation. This is in contrast to declarative code. Imagine ordering a hamburger. The imperative way to order a hamburger would be to specify that you should start with beef, grind it up, form it into patties, cook it, get hamburger buns, etc. 

- JAMstack
 - A short hand term for a set of technologies that utilize JavaScript, APIs, and Markup. The JAMstack allows developers to create pre-rendered sites from markup templates with interactive JavaScript on the client side. 

- Least privilege security
 - Security is a very serious concern for users, and should be a top concern for application developers. The cloud operates on a Shared Security Model which separates the security concerns based on the level of service that the cloud provider is offering. For example, when you are running a Lambda function, AWS is responsible for securing their data centers, the runtime they provide, and account based network access to those services. The Lambda function developer is now only concerned with security of the code executing in the runtime and the access control to that lambda function from other parts of the system. All of the services in the cloud are provisioned with the least amount of permissions possible to operate. The developer is then responsible for expanding access to those services through Identity and Access Management (IAM). 

- Scale to zero
  - This is a phrase to indicate that a service can become dormant when not in use, and you will not incur a charge while it is idle. This is different from an always on service like a virtual machine or clusters of containers. 

- Serverless
  - Serverless is a large topic because it is still being discussed and there isn't a single definition. At the heart of the serverless movement, developers are choosing to focus on the unique value that their application contains. The undifferentiated work, such as patching operating systems and maintaining network routers are provided as a service by the cloud. Serverless also has some unique qualities not found in other cloud services, such as only paying for what you use and very high levels of automatic scaling.

- Serverless side render (SSR)
 - An application that utilizes SSR will generate front end code from a HTTP call, the response of the call will contain HTML formatted content that can be viewed in the browser. Server side rendering existed before FaaS, but now we can create dynamic content responses without a full web server framework. 

- Single Page App (SPA)
  - This is an architecture pattern for applications that can handle operations that used to require a separate call to a server. SPA became popular with AJAX requests where the browser could fetch data asynchronously and display data without reloading the entire web page. 

- Static Site Generator (SSG)
 - This is a framework that will build all the files needed to serve a web page without having to fetch content on every request. This gives you the ability to create performant pages from data stored in flat files such as markdown. Before this technique was created, a web developer would rely on a database or content management system to query for data and display that data each time a user makes a page request. 
