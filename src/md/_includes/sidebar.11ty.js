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
  <a href=/jargon class=${params.page.url === '/jargon'? 'active' : ''}>jargon</a>
</nav>
<div>
  <section>

    <h2>Foundations</h2>
    <ul>
      <li><a href=/foundations/setup       class=${params.page.url === '/foundations/setup/'?       'active' : ''}>‣ Setup</a></li>
      <li><a href=/foundations/hello-world class=${params.page.url === '/foundations/hello-world/'? 'active' : ''}>‣ Hello world</a></li>
      <li><a href=/foundations/iac         class=${params.page.url === '/foundations/iac/'?         'active' : ''}>‣ Infra as Code</a></li>
      <li><a href=/foundations/local-dev   class=${params.page.url === '/foundations/local-dev/'?   'active' : ''}>‣ Local development</a></li>
      <li><a href=/foundations/deployment  class=${params.page.url === '/foundations/deployment/'?  'active' : ''}>‣ Deployment</a></li>
      <li><a href=/foundations/logging     class=${params.page.url === '/foundations/logging/'?     'active' : ''}>‣ Logging</a></li>
    </ul>

    <hr>

    <h2>Frontend patterns</h2>
    <ul>
      <li><a href=/patterns/spa class=${params.page.url === '/patterns/spa/'? 'active' : ''}>‣ Single page apps</a></li>
      <li><a href=/patterns/ssg class=${params.page.url === '/patterns/ssg/'? 'active' : ''}>‣ Static site generators</a></li>
      <li><a href=/patterns/ssr class=${params.page.url === '/patterns/ssr/'? 'active' : ''}>‣ Serverless side rendering</a></li>
      <li><a href=/patterns/esm class=${params.page.url === '/patterns/esm/'? 'active' : ''}>‣ Progressive bundling esmodules</a></li>
    </ul>

    <hr>
    
    <h2>Handling state</h2>
    <ul>
      <li><a href=/advanced/forms    class=${params.page.url === '/advanced/forms/'?    'active' : ''}>‣ Forms</a></li>
      <li><a href=/advanced/sessions class=${params.page.url === '/advanced/sessions/'? 'active' : ''}>‣ Tracking sessions</a></li>
      <li><a href=/advanced/env      class=${params.page.url === '/advanced/env/'?      'active' : ''}>‣ Environment variables</a></li>
      <li><a href=/advanced/oauth    class=${params.page.url === '/advanced/oauth/'?    'active' : ''}>‣ oAuth</a></li>
    </ul>

    <hr>

    <h2>Backend patterns</h2>
    <ul>
      <li><a href=/advanced/rest    class=${params.page.url === '/advanced/rest/'?    'active' : ''}>‣ REST</a></li>
      <li><a href=/advanced/graphql class=${params.page.url === '/advanced/graphql/'? 'active' : ''}>‣ GraphQL</a></li>
      <li><a href=/advanced/ws      class=${params.page.url === '/advanced/ws/'?      'active' : ''}>‣ Web sockets</a></li>
    </ul>

  </section>

  <main>${params.content}</main>
</div>
<footer>
  <a href=https://github.com/smallwins/training.begin.com/blob/master/${params.page.inputPath}>Edit this page on GitHub</a>
</footer>
<section id=popup style=display:none></section>
<script type=module src=/_static/js/index.js></script>
</body>
</html>`
}
