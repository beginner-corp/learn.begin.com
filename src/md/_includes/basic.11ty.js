module.exports = function layout(params) {
  return `<!doctype html>
<html>
<head>
<title>${params.title}</title>
<meta charset=UTF-8>
<meta name=viewport content=width=device-width,initial-scale=1>
<link rel=stylesheet type=text/css href=https://docs.begin.com/css/app.css>
</head>
<body>
<header
  class="
    p-relative d-flex ai-c jc-b p-1 bg-p25
  "
  style="min-height: 3.333rem;"
>
  <nav
    class="
      w-100
      max-h-infinity-lg
      max-h-0
      p-absolute
      p-static-lg
      d-flex-lg
      jc-b
      pr-4
      pl-4
      bg-p25
      o-hidden
      menu-transition
      z1
      z0-lg
    "
    style="
      top:2.8rem;
      right:0;
      left:0;
      border-bottom-right-radius:6px;
      border-bottom-left-radius:6px;
    "
    >
    <div
      class="
        d-flex-lg
      "
    >
      <a class="mr4" href="https://begin.com/">
        <div class="logo d-flex ai-c">
          <img
            src="/assets/begin-logo.svg"
            alt="begin logo"
            style="min-width:4.777rem;min-height:1.333rem;"
            width="86"
            height="24"
          >
        </div>
      </a>
      <a
        href=/
        class="
          d-flex
          ai-c
          fs-off-scale
          fw-medium
          upper
          lh2
          pr0
          pl-1
          c-p26
          c-h3
          c-a5
          bg-a7
          br-pill
          transition-all
          mb-2
          mb-none-lg
          mr1-lg
          cursor-pointer
          ${params.page.url === '/'? 'active' : ''}
        "
      >
        home
      </a>
      <a
        href=/faq
        class="
          d-flex
          ai-c
          fs-off-scale
          fw-medium
          upper
          lh2
          pr0
          pl-1
          c-p26
          c-h3
          c-a5
          bg-a7
          br-pill
          transition-all
          mb-2
          mb-none-lg
          mr1-l
          cursor-pointer
          ${params.page.url === '/faq'? 'active' : ''}
        "
      >
        faq
      </a>
      <a
        href=/jargon
        class="
          d-flex
          ai-c
          fs-off-scale
          fw-medium
          upper
          lh2
          pr0
          pl-1
          c-p26
          c-h3
          c-a5
          bg-a7
          br-pill
          transition-all
          mb-2
          mb-none-lg
          mr1-l
          cursor-pointer
          ${params.page.url === '/jargon'? 'active' : ''}
        "
      >
        jargon
      </a>
    </div>
  </nav>
</header>
<div
  class="
    d-flex-lg
  "
>
  <aside>

    <h2>Foundations</h2>
    <ul>
      <li><a href=/basic/foundations/setup       class=${params.page.url === '/basic/foundations/setup/'?       'active' : ''}>‣ Setup</a></li>
      <li><a href=/basic/foundations/hello-world class=${params.page.url === '/basic/foundations/hello-world/'? 'active' : ''}>‣ Hello world</a></li>
      <li><a href=/basic/foundations/deployment  class=${params.page.url === '/basic/foundations/deployment/'?  'active' : ''}>‣ Deploy</a></li>
    </ul>

    <hr>

    <h2>Frontend patterns</h2>
    <ul>
      <li><a href=/basic/frontend/spa class=${params.page.url === '/basic/frontend/spa/'? 'active' : ''}>‣ Single page applications</a></li>
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

  </aside>

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
