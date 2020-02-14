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
      <li><a href=/basic/foundations/setup       class=${params.page.url === '/basic/foundations/setup/'?       'active' : ''}>‣ Setup</a></li>
      <li><a href=/basic/foundations/hello-world class=${params.page.url === '/basic/foundations/hello-world/'? 'active' : ''}>‣ Hello world</a></li>
      <li><a href=/basic/foundations/deployment  class=${params.page.url === '/basic/foundations/deployment/'?  'active' : ''}>‣ Deploy</a></li>
    </ul>

    <hr>

    <h2>Frontend patterns</h2>
    <ul>
      <li><a href=/basic/frontend/spa class=${params.page.url === '/basic/frontend/spa/'? 'active' : ''}>‣ Single-page applications</a></li>
      <li><a href=/basic/frontend/ssg class=${params.page.url === '/basic/frontend/ssg/'? 'active' : ''}>‣ Static site generators</a></li>
      <li><a href=/basic/frontend/ssr class=${params.page.url === '/basic/frontend/ssr/'? 'active' : ''}>‣ Server side rendering</a></li>
    </ul>

    <hr>

    <h2>Handling state</h2>
    <ul>
      <li><a href=/basic/state/sessions class=${params.page.url === '/basic/state/sessions/'? 'active' : ''}>‣ Tracking sessions</a></li>
      <li><a href=/basic/state/env      class=${params.page.url === '/basic/state/env/'?      'active' : ''}>‣ Environment variables</a></li>
      <li><a href=/basic/state/oauth    class=${params.page.url === '/basic/state/oauth/'?    'active' : ''}>‣ Authentication</a></li>
    </ul>

    <hr>

    <h2>Backend patterns</h2>
    <ul>
      <li><a href=/basic/backend/forms   class=${params.page.url === '/basic/backend/forms/'?   'active' : ''}>‣ HTML forms</a></li>
      <li><a href=/basic/backend/rest    class=${params.page.url === '/basic/backend/rest/'?    'active' : ''}>‣ REST</a></li>
      <li><a href=/basic/backend/graphql class=${params.page.url === '/basic/backend/graphql/'? 'active' : ''}>‣ GraphQL</a></li>
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
