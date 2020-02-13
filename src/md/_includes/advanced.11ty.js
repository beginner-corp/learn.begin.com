module.exports = function layout(params) {
  return `
<!doctype html>
<html>
<head>
<title>${params.title}</title>
<meta charset=UTF-8>
<meta name=viewport content=width=device-width,initial-scale=1>
<link rel=stylesheet type=text/css href=https://docs.begin.com/css/app.css>
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
      <li><a href=/foundations/deployment  class=${params.page.url === '/foundations/deployment/'?  'active' : ''}>‣ Deploy</a></li>
    </ul>

    <hr>

    <h2>Frontend patterns</h2>
    <ul>
      <li><a href=/frontend/spa class=${params.page.url === '/frontend/spa/'? 'active' : ''}>‣ Single page applications</a></li>
      <li><a href=/frontend/ssg class=${params.page.url === '/frontend/ssg/'? 'active' : ''}>‣ Static site generators</a></li>
      <li><a href=/frontend/ssr class=${params.page.url === '/frontend/ssr/'? 'active' : ''}>‣ Server side rendering</a></li>
    </ul>

    <hr>

    <h2>Handling state</h2>
    <ul>
      <li><a href=/state/env      class=${params.page.url === '/state/env/'?      'active' : ''}>‣ Environment variables</a></li>
      <li><a href=/state/sessions class=${params.page.url === '/state/sessions/'? 'active' : ''}>‣ Tracking sessions</a></li>
      <li><a href=/state/oauth    class=${params.page.url === '/state/oauth/'?    'active' : ''}>‣ oAuth</a></li>
    </ul>

    <hr>

    <h2>Backend patterns</h2>
    <ul>
      <li><a href=/backend/rest    class=${params.page.url === '/backend/rest/'?    'active' : ''}>‣ REST</a></li>
      <li><a href=/backend/graphql class=${params.page.url === '/backend/graphql/'? 'active' : ''}>‣ GraphQL</a></li>
      <li><a href=/backend/ws      class=${params.page.url === '/backend/ws/'?      'active' : ''}>‣ Web sockets</a></li>
    </ul>

  </section>

  <main id="doc">${params.content}</main>
</div>
<footer>
  <a href=https://github.com/smallwins/training.begin.com/blob/master/${params.page.inputPath}>Edit this page on GitHub</a>
</footer>
<section id=popup style=display:none></section>
<script type=module src=/_static/js/index.js></script>
</body>
</html>`
}
