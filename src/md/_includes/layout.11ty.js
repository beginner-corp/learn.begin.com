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
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0" height="0" style="display:none;">
<symbol id="icon-question" viewBox="0 0 32 32"><path d="M7.955 4.375q1.75-0.739 3.682-0.739t3.682 0.739q1.75 0.75 3.017 2.017t2.017 3.017q0.739 1.75 0.739 3.682t-0.739 3.682q-0.75 1.75-2.017 3.017t-3.017 2.006q-1.75 0.75-3.682 0.75t-3.682-0.75q-1.75-0.739-3.017-2.006t-2.006-3.017q-0.75-1.75-0.75-3.682t0.75-3.682q0.739-1.75 2.006-3.017t3.017-2.017zM13.091 16q0-0.33 0.193-0.642t0.682-0.744q0.466-0.42 0.892-0.955t0.79-1.307q0.17-0.386 0.261-0.75t0.091-0.693q0-0.841-0.278-1.608t-0.801-1.392q-0.534-0.614-1.381-0.989t-1.903-0.375-1.903 0.375-1.369 0.989q-0.534 0.625-0.813 1.392t-0.278 1.608h2.909q0-0.057 0.011-0.153t0.091-0.358q0.068-0.25 0.205-0.438t0.443-0.347q0.148-0.080 0.324-0.119t0.381-0.040q0.295 0 0.534 0.080t0.386 0.193 0.261 0.278 0.159 0.301 0.074 0.29 0.040 0.21v0.102q0 0.42-0.307 0.915t-0.932 1.051q-0.341 0.307-0.58 0.563t-0.511 0.642q-0.284 0.398-0.432 0.864t-0.148 0.989v0.068h2.909zM10.614 19.932q0.42 0.432 1.023 0.432t1.034-0.432q0.42-0.42 0.42-1.023t-0.42-1.034q-0.432-0.42-1.034-0.42t-1.023 0.42q-0.432 0.432-0.432 1.034t0.432 1.023z"></path></symbol>
<symbol id="icon-home" viewBox="0 0 32 32"><path d="M22.784 12q0.477 0.432 0.511 1.028t-0.364 1.085q-0.216 0.216-0.489 0.324t-0.602 0.108q-0.261 0-0.517-0.091t-0.506-0.273l-9.159-8.58-9.159 8.58q-0.443 0.432-1.045 0.403t-1-0.472q-0.42-0.443-0.392-1.045t0.472-1l9.159-8.58q0.818-0.761 1.966-0.761t1.966 0.761zM4.386 14.545l7.273-6.545 7.273 6.545v8q0 0.602-0.426 1.028t-1.028 0.426h-3.636v-5.818h-4.364v5.818h-3.636q-0.602 0-1.028-0.426t-0.426-1.028v-8z"></path></symbol>
<symbol id="icon-dictionary" viewBox="0 0 32 32"><path d="M18.909 7.273q0.602 0 1.028 0.426t0.426 1.028v13.091q0 1.205-0.852 2.057t-2.057 0.852h-10.909q-1.205 0-2.057-0.852t-0.852-2.057v-16q0-1.795 1.284-3.080t3.080-1.284h10.909q0.602 0 1.028 0.426t0.426 1.028-0.426 1.028-1.028 0.426h-10.909q-0.602 0-1.028 0.426t-0.426 1.028 0.426 1.028 1.028 0.426h10.909z"></path></symbol>
</svg>

<header
  class="
    p-relative d-flex ai-c jc-b p-1 bg-p25
  "
  style="min-height: 3.333rem;"
>
  <nav>
    <a href=/ class=${params.page.url === '/'? 'active' : ''}>home</a>
    <a href=/faq class=${params.page.url === '/faq/'? 'active' : ''}>faq</a>
    <a href=/jargon class=${params.page.url === '/jargon/'? 'active' : ''}>jargon</a>
  </nav>
</header>
<div>
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
