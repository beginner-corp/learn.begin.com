module.exports = function layout(params) {
  return `<!doctype html>
<html>
<head>
<title>${params.title}</title>
<meta charset=UTF-8>
<meta name=viewport content=width=device-width,initial-scale=1>
<link rel=stylesheet type=text/css href=/_static/css/theme.css>
<link rel=stylesheet type=text/css href=/_static/css/index.css>
</head>
<body>
<nav>
  <a href=/ class=${params.page.url === '/'? 'active' : ''}>home</a>
  <a href=/faq class=${params.page.url === '/faq'? 'active' : ''}>faq</a>
  <a href=/instructors class=${params.page.url === '/instructors'? 'active' : ''}>instructors</a>
  <a href=/jargon class=${params.page.url === '/jargon'? 'active' : ''}>jargon</a>
</nav>
<div>
  <section>

    <h2>Foundations</h2>
    <blockquote>
      <p>Getting started with serverless (1 hour)</p>
    </blockquote>
    <ul>
      <li><a href=/foundations/setup class=${params.page.url === '/foundations/setup/'? 'active' : ''}>Setup</a></li>
      <li><a href=/foundations/hello-world class=${params.page.url === '/foundations/hello-world/'? 'active' : ''}>Hello world</a></li>
      <li><a href=/foundations/iac class=${params.page.url === '/foundations/iac/'? 'active' : ''}>Infra as Code</a></li>
      <li><a href=/foundations/local-dev class=${params.page.url === '/foundations/local-dev/'? 'active' : ''}>Local development</a></li>
      <li><a href=/foundations/sharing-code class=${params.page.url === '/foundations/sharing-code/'? 'active' : ''}>Sharing code</a></li>
      <li><a href=/foundations/deployment class=${params.page.url === '/foundations/deployment/'? 'active' : ''}>Deployment</a></li>
      <li><a href=/foundations/logging class=${params.page.url === '/foundations/logging/'? 'active' : ''}>Logging</a></li>
    </ul>

    <hr>

    <h2>Web primitives</h2>
    <blockquote>
      <p>Building blocks for web applications (30 min)</p>
    </blockquote>
    <ul>
      <li><a href=/basic/static class=${params.page.url === '/basic/static/'? 'active' : ''}><code>@static</code></a></li>
      <li><a href=/basic/http class=${params.page.url === '/basic/http/'? 'active' : ''}><code>@http</code></a></li>
      <li><a href=/basic/cdn class=${params.page.url === '/basic/cdn/'? 'active' : ''}><code>@cdn</code></a></li>
      <li><a href=/basic/dns class=${params.page.url === '/basic/dns/'? 'active' : ''}><code>@domains</code></a></li>
    </ul>

    <hr>

    <h2>Web patterns</h2>
    <blockquote>
      <p>Techniques for modern web delivery (1 hour)</p>
    </blockquote>
    <ul>
      <li><a href=/patterns/ssg class=${params.page.url === '/patterns/ssg/'? 'active' : ''}>Static site generators</a></li>
      <li><a href=/patterns/spa class=${params.page.url === '/patterns/spa/'? 'active' : ''}>Single page apps</a></li>
      <li><a href=/patterns/esm class=${params.page.url === '/patterns/esm/'? 'active' : ''}>Deploy esmodules and progressive bundling</a></li>
      <li><a href=/patterns/ssr class=${params.page.url === '/patterns/ssr/'? 'active' : ''}>Master serverless side rendering</a></li>
    </ul>

    <hr>
    
    <h2>Persistent storage</h2>
    <blockquote>
      <p>Reading and writing structured data (1 hour)</p>
    </blockquote>
    <ul>
      <li><a href=/storage/begin-data class=${params.page.url === '/storage/begin-data/'? 'active' : ''}><code>@begin/data</code> simplified DynamoDB</a></li>
      <li><a href=/storage/tables     class=${params.page.url === '/storage/tables/'? 'active' : ''}><code>@tables</code> and <code>@indexes</code></a></li>
      <li><a href=/storage/streams    class=${params.page.url === '/storage/streams/'? 'active' : ''}>DynamoDB Streams</a></li>
    </ul>

    <hr>

    <h2>Web app development</h2>
    <blockquote>
      <p>Proven techniques done serverless (2 hours)</p>
    </blockquote>
    <ul>
      <li><a href=/advanced/forms    class=${params.page.url === '/advanced/forms/'? 'active' : ''}>Forms</a></li>
      <li><a href=/advanced/sessions class=${params.page.url === '/advanced/sessions/'? 'active' : ''}>Tracking sessions</a></li>
      <li><a href=/advanced/env      class=${params.page.url === '/advanced/env/'? 'active' : ''}>Environment variables</a></li>
      <li><a href=/advanced/oauth    class=${params.page.url === '/advanced/oauth/'? 'active' : ''}>oAuth</a></li>
      <li><a href=/advanced/rest     class=${params.page.url === '/advanced/rest/'? 'active' : ''}>REST</a></li>
      <li><a href=/advanced/graphql  class=${params.page.url === '/advanced/graphql/'? 'active' : ''}>GraphQL</a></li>
      <li><a href=/advanced/ws       class=${params.page.url === '/advanced/ws/'? 'active' : ''}>Web sockets</a></li>
    </ul>

    <hr>

    <h2>Asynchronous primitives</h2>
    <blockquote>
      <p>Background tasks that scale to zero (1 hour)</p>
    </blockquote>
    <ul>
      <li><a href=/async/events    class=${params.page.url === '/async/events/'? 'active' : ''}><code>@events</code></a></li>
      <li><a href=/async/queues    class=${params.page.url === '/async/queues/'? 'active' : ''}><code>@queues</code></a></li>
      <li><a href=/async/scheduled class=${params.page.url === '/async/scheduled/'? 'active' : ''}><code>@scheduled</code></a></li>
    </ul>

    <hr>

    <h2>Final boss</h2>
    <blockquote>
      <p>Extend into raw CloudFormation to access any AWS service (? hours)</p>
    </blockquote>
    <ul>
      <li><a href=/final/boss/macros class=${params.page.url === '/final/boss/macros/'? 'active' : ''}><code>@macros</code></a></li>
    </ul>
  </section>

  <main>${params.content}</main>
</div>
<footer>
  <a href=https://github.com/smallwins/training.begin.com/blob/master/${params.page.inputPath}>Edit this page on GitHub</a>
</footer>
<script type=module src=/_static/js/index.js></script>
</body>
</html>`
}
