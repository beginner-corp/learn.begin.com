module.exports = function layout(params) {
  return `<!doctype html>
<html>
<head>
  <title>${params.title}</title>
  <meta charset=UTF-8>
  <meta name=viewport content=width=device-width,initial-scale=1>
  <link rel="shortcut icon" href="https://static.begin.com/web/favicon/favicon.ico">
  <link rel="icon" sizes="16x16 32x32 64x64" href="https://static.begin.com/web/favicon/favicon.ico">
  <link rel="icon" type="image/png" sizes="196x196" href="https://static.begin.com/web/favicon/favicon-192.png">
  <link rel="icon" type="image/png" sizes="160x160" href="https://static.begin.com/web/favicon/favicon-160.png">
  <link rel="icon" type="image/png" sizes="96x96" href="https://static.begin.com/web/favicon/favicon-96.png">
  <link rel="icon" type="image/png" sizes="70x70" href="https://static.begin.com/web/favicon/favicon-70.png">
  <link rel="icon" type="image/png" sizes="64x64" href="https://static.begin.com/web/favicon/favicon-64.png">
  <link rel="icon" type="image/png" sizes="32x32" href="https://static.begin.com/web/favicon/favicon-32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="https://static.begin.com/web/favicon/favicon-16.png">
  <link rel="apple-touch-icon" href="https://static.begin.com/web/favicon/favicon-180.png">
  <link rel="apple-touch-icon" sizes="180x180" href="https://static.begin.com/web/favicon/favicon-180.png">
  <link rel="apple-touch-icon" sizes="167x167" href="https://static.begin.com/web/favicon/favicon-167.png">
  <link rel="apple-touch-icon" sizes="152x152" href="https://static.begin.com/web/favicon/favicon-152.png">
  <link rel="apple-touch-icon" sizes="144x144" href="https://static.begin.com/web/favicon/favicon-144.png">
  <link rel="apple-touch-icon" sizes="120x120" href="https://static.begin.com/web/favicon/favicon-120.png">
  <link rel="apple-touch-icon" sizes="114x114" href="https://static.begin.com/web/favicon/favicon-114.png">
  <link rel="apple-touch-icon" sizes="76x76" href="https://static.begin.com/web/favicon/favicon-76.png">
  <link rel="apple-touch-icon" sizes="72x72" href="https://static.begin.com/web/favicon/favicon-72.png">
  <link rel="apple-touch-icon" sizes="60x60" href="https://static.begin.com/web/favicon/favicon-60.png">
  <link rel="apple-touch-icon" sizes="57x57" href="https://static.begin.com/web/favicon/favicon-57.png">
  <link rel=stylesheet type=text/css href=/_static/css/app.css>
  <link rel=stylesheet href=https://fonts.begin.com/fonts.css>
</head>
<body style="opacity:0;">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0" height="0" style="display:none;">
<symbol id="icon-question" viewBox="0 0 32 32"><path d="M7.955 4.375q1.75-0.739 3.682-0.739t3.682 0.739q1.75 0.75 3.017 2.017t2.017 3.017q0.739 1.75 0.739 3.682t-0.739 3.682q-0.75 1.75-2.017 3.017t-3.017 2.006q-1.75 0.75-3.682 0.75t-3.682-0.75q-1.75-0.739-3.017-2.006t-2.006-3.017q-0.75-1.75-0.75-3.682t0.75-3.682q0.739-1.75 2.006-3.017t3.017-2.017zM13.091 16q0-0.33 0.193-0.642t0.682-0.744q0.466-0.42 0.892-0.955t0.79-1.307q0.17-0.386 0.261-0.75t0.091-0.693q0-0.841-0.278-1.608t-0.801-1.392q-0.534-0.614-1.381-0.989t-1.903-0.375-1.903 0.375-1.369 0.989q-0.534 0.625-0.813 1.392t-0.278 1.608h2.909q0-0.057 0.011-0.153t0.091-0.358q0.068-0.25 0.205-0.438t0.443-0.347q0.148-0.080 0.324-0.119t0.381-0.040q0.295 0 0.534 0.080t0.386 0.193 0.261 0.278 0.159 0.301 0.074 0.29 0.040 0.21v0.102q0 0.42-0.307 0.915t-0.932 1.051q-0.341 0.307-0.58 0.563t-0.511 0.642q-0.284 0.398-0.432 0.864t-0.148 0.989v0.068h2.909zM10.614 19.932q0.42 0.432 1.023 0.432t1.034-0.432q0.42-0.42 0.42-1.023t-0.42-1.034q-0.432-0.42-1.034-0.42t-1.023 0.42q-0.432 0.432-0.432 1.034t0.432 1.023z"></path></symbol>
<symbol id="icon-home" viewBox="0 0 32 32"><path d="M22.784 12q0.477 0.432 0.511 1.028t-0.364 1.085q-0.216 0.216-0.489 0.324t-0.602 0.108q-0.261 0-0.517-0.091t-0.506-0.273l-9.159-8.58-9.159 8.58q-0.443 0.432-1.045 0.403t-1-0.472q-0.42-0.443-0.392-1.045t0.472-1l9.159-8.58q0.818-0.761 1.966-0.761t1.966 0.761zM4.386 14.545l7.273-6.545 7.273 6.545v8q0 0.602-0.426 1.028t-1.028 0.426h-3.636v-5.818h-4.364v5.818h-3.636q-0.602 0-1.028-0.426t-0.426-1.028v-8z"></path></symbol>
<symbol id="icon-dictionary" viewBox="0 0 32 32"><path d="M18.909 7.273q0.602 0 1.028 0.426t0.426 1.028v13.091q0 1.205-0.852 2.057t-2.057 0.852h-10.909q-1.205 0-2.057-0.852t-0.852-2.057v-16q0-1.795 1.284-3.080t3.080-1.284h10.909q0.602 0 1.028 0.426t0.426 1.028-0.426 1.028-1.028 0.426h-10.909q-0.602 0-1.028 0.426t-0.426 1.028 0.426 1.028 1.028 0.426h10.909z"></path></symbol>
<symbol viewBox="0 0 18 12" id="icon-menu"><g fill-rule="evenodd"><rect width="18" height="2" rx="1"></rect><rect y="5" width="18" height="2" rx="1"></rect><rect y="10" width="18" height="2" rx="1"></rect></g></symbol>
<symbol viewBox="0 0 16 10" id="icon-disclose"><path d="M5.762 8L.475 2.725C.158 2.4 0 2.025 0 1.6 0 1.175.158.804.475.487.8.162 1.175 0 1.6 0c.425 0 .8.158 1.125.475L8 5.762 13.275.475C13.6.158 13.975 0 14.4 0c.425 0 .796.162 1.112.487.326.317.488.688.488 1.113 0 .425-.158.8-.475 1.125L10.238 8l-1.44 1.44c-.262.272-.528.407-.798.405-.27-.002-.54-.141-.81-.417L5.762 8z" fill-rule="evenodd"></path></symbol>
<symbol viewBox="0 0 11 11" id="icon-left-arrow"><path d="M5.385 0l5.518 5.517-5.518 5.518-.751-.745 4.245-4.245H0V4.99h8.88L4.633.745z" fill-rule="nonzero"></path></symbol>
</svg>
<div class="vh-100 d-flex fd-c o-hidden">
<header
  class="
    p-relative
    d-flex
    ai-c
    jc-b
    pt-1
    pr1
    pb-1
    pl1
    bg-p25
  "
  style="min-height: 3.333rem;"
>
  <div
    class="
      d-flex
      ai-c
      w-100
    "
  >
    <div
      class="d-none-lg mr-1"
      style="margin-top:-0.111rem;"
    >
      <a
        id=js-menu
        class=f-p1 bg-p0
        href=/menu
      >
        <div style="width:1rem;height:0.666rem;" class="">
        <svg>
          <use xlink:href="#icon-menu"></use>
        </svg>
        </div>
      </a>
    </div>
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
    <nav
      id="js-nav"
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
            active
          "
        >
          <div
            class="mr-2 f-p26"
            style="width:1.333rem;height:1.333rem;"
          >
            <svg>
              <use xlink:href="#icon-home"></use>
            </svg>
          </div>
          <span>
            Home
          </span>
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
          "
        >
          <div
            class="mr-2 f-p26"
            style="width:1.333rem;height:1.333rem;"
          >
            <svg>
              <use xlink:href="#icon-question"></use>
            </svg>
          </div>
          <span>
            FAQ
          </span>
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

          "
        >
          <div
            class="mr-2 f-p26"
            style="width:1.25rem;height:1.25rem;"
          >
            <svg>
              <use xlink:href="#icon-dictionary"></use>
            </svg>
          </div>
          <span>
            Jargon
          </span>
        </a>
      </div>
    </nav>
  </div>
  <div>
    <a
      id="js-disclose"
      href="#"
      class="
        d-block
        d-none-lg
        p-4
        bg-p0
        transition-rotate
      "
    >
      <div
        class="f-p26"
        style="width:0.888rem;height:0.555rem;"
      >
        <svg>
          <use xlink:href="#icon-disclose"></use>
        </svg>
      </div>
    </a>
  </div>
</header>
<div class="h-100 top-0 p-relative p-static-lg fg-1 d-flex-lg o-hidden">
<div
  class="
    d-flex-lg
    fg-1
  "
>
 <aside
    style="min-width:16.666rem;max-width:19.999rem;"
    class="
      p-absolute
      p-static-lg
      trbl
      d-flex
      fd-c
      jc-b
      fg-0
      p1
      o-auto
    "
  >
    <div class="fg-1">
      <h2
        class="
          pt-3
          pb-3
          fs-1
          fw-medium
          c-p8
          uppercase
          nowrap
          cu-pointer
        "
      >
        Foundations
      </h2>
      <ul
        class="
          mb-1
          pl0
        "
      >
        <li
          class="
            c-p3
            c-h0
            c-a0
            fw-book
          "
        >
          <a
            href=/basic/foundations/setup
            class="
              d-block
              fw-book
              c-p8
              c-h0
              c-a6
              ${params.page.url === '/basic/foundations/setup/'
                ? 'active'
                : ''
               }
              "
            >
              ${params.page.url === '/basic/foundations/setup/'
                ? `
                <span class="d-inline-flex ai-c mr-4 f-p3"
                  style="width:0.6111rem;height:0.666rem;"
                >
                  <svg>
                    <use xlink:href="#icon-left-arrow"></use>
                  </svg>
                </span>`
                : ''
              }
              Setup
            </a>
        </li>
        <li
          class="
            c-p3
            c-h0
            c-a0
            fw-book
          "
        >
          <a
            href=/basic/foundations/hello-world
            class="
              d-block
              fw-book
              c-p8
              c-h0
              c-a6
              ${params.page.url === '/basic/foundations/hello-world/'
                ? 'active'
                : ''
              }
            "
            >
              ${params.page.url === '/basic/foundations/hello-world/'
                ? `
                <span class="d-inline-flex ai-c mr-4 f-p3"
                  style="width:0.6111rem;height:0.666rem;"
                >
                  <svg>
                    <use xlink:href="#icon-left-arrow"></use>
                  </svg>
                </span>`
                : ''
              }
              Hello world
          </a>
        </li>
        <li
          class="
            c-p3
            c-h0
            c-a0
            fw-book
          "
        >
          <a
            href=/basic/foundations/deployment
            class="
              d-block
              fw-book
              c-p8
              c-h0
              c-a6
              ${params.page.url === '/basic/foundations/deployment/'
                ? 'active'
                : ''
               }
            "
          >
              ${params.page.url === '/basic/foundations/deployment/'
                ? `
                <span class="d-inline-flex ai-c mr-4 f-p3"
                  style="width:0.6111rem;height:0.666rem;"
                >
                  <svg>
                    <use xlink:href="#icon-left-arrow"></use>
                  </svg>
                </span>`
                : ''
               }
            Deploy
          </a>
        </li>
      </ul>

      <h2
        class="
          pt-3
          pb-3
          fs-1
          fw-medium
          c-p8
          uppercase
          nowrap
          cu-pointer
        "
      >
        Frontend patterns
      </h2>
      <ul
        class="
          mb-1
          pl0
        "
      >
        <li
          class="
            c-p3
            c-h0
            c-a0
            fw-book
          "
        >
          <a
            href=/basic/frontend/spa
            class="
              d-block
              fw-book
              c-p8
              c-h0
              c-a6
              ${params.page.url === '/basic/frontend/spa/'
                ? 'active'
                : ''
              }
            "
            >
              ${params.page.url === '/basic/frontend/spa/'
                ? `
                <span class="d-inline-flex ai-c mr-4 f-p3"
                  style="width:0.6111rem;height:0.666rem;"
                >
                  <svg>
                    <use xlink:href="#icon-left-arrow"></use>
                  </svg>
                </span>`
                : ''
               }
              Single page applications
          </a>
        </li>
        <li
          class="
            c-p3
            c-h0
            c-a0
            fw-book
          "
        >
          <a
            href=/basic/frontend/ssg
            class="
              d-block
              fw-book
              c-p8
              c-h0
              c-a6
              ${params.page.url === '/basic/frontend/ssg/'
                ? 'active'
                : ''
              }
            "
            >
            ${params.page.url === '/basic/frontend/ssg/'
                ? `
                <span class="d-inline-flex ai-c mr-4 f-p3"
                  style="width:0.6111rem;height:0.666rem;"
                >
                  <svg>
                    <use xlink:href="#icon-left-arrow"></use>
                  </svg>
                </span>`
                : ''
              }
              Static site generators
          </a>
        </li>

        <li
          class="
            c-p3
            c-h0
            c-a0
            fw-book
          "
        >
          <a
            href=/basic/frontend/ssr
            class="
              d-block
              fw-book
              c-p8
              c-h0
              c-a6
              ${params.page.url === '/basic/frontend/ssr/'
                ? 'active'
                : ''
              }
            "
          >
              ${params.page.url === '/basic/frontend/ssr/'
                ? `
                <span class="d-inline-flex ai-c mr-4 f-p3"
                  style="width:0.6111rem;height:0.666rem;"
                >
                  <svg>
                    <use xlink:href="#icon-left-arrow"></use>
                  </svg>
                </span>`
                : ''
              }
            Server side rendering
          </a>
        </li>
      </ul>

      <h2
        class="
          pt-3
          pb-3
          fs-1
          fw-medium
          c-p8
          uppercase
          nowrap
          cu-pointer
        "
      >
        Handling state
      </h2>
      <ul
        class="
          mb-1
          pl0
        "
      >
        <li
          class="
            c-p3
            c-h0
            c-a0
            fw-book
          "
        >
          <a
            href=/basic/state/sessions
            class="
              d-block
              fw-book
              c-p8
              c-h0
              c-a6
              ${params.page.url === '/basic/state/sessions/'
                ? 'active'
                : ''
              }
            "
          >
            ${params.page.url === '/basic/state/sessions/'
              ? `
              <span class="d-inline-flex ai-c mr-4 f-p3"
                style="width:0.6111rem;height:0.666rem;"
              >
                <svg>
                  <use xlink:href="#icon-left-arrow"></use>
                </svg>
              </span>`
              : ''
            }
            Tracking sessions
          </a>
        </li>
        <li
          class="
            c-p3
            c-h0
            c-a0
            fw-book
          "
        >
          <a
            href=/basic/state/env
            class="
              d-block
              fw-book
              c-p8
              c-h0
              c-a6
              ${params.page.url === '/basic/state/env/'
                ? 'active'
                : ''
              }
            "
          >
            ${params.page.url === '/basic/state/env/'
              ? `
              <span class="d-inline-flex ai-c mr-4 f-p3"
                style="width:0.6111rem;height:0.666rem;"
              >
                <svg>
                  <use xlink:href="#icon-left-arrow"></use>
                </svg>
              </span>`
              : ''
            }
            Environment variables
          </a>
        </li>
        <li
          class="
            c-p3
            c-h0
            c-a0
            fw-book
          "
        >
          <a
            href=/basic/state/oauth
            class="
              d-block
              fw-book
              c-p8
              c-h0
              c-a6
              ${params.page.url === '/basic/state/oauth/'
                ? 'active'
                : ''
               }
            "
          >
            ${params.page.url === '/basic/state/oauth/'
              ? `
              <span class="d-inline-flex ai-c mr-4 f-p3"
                style="width:0.6111rem;height:0.666rem;"
              >
                <svg>
                  <use xlink:href="#icon-left-arrow"></use>
                </svg>
              </span>`
              : ''
            }
            Authentication
          </a>
        </li>
      </ul>

      <h2
        class="
          pt-3
          pb-3
          fs-1
          fw-medium
          c-p8
          uppercase
          nowrap
          cu-pointer
        "
      >
        Backend patterns
      </h2>
      <ul
        class="
          mb-1
          pl0
        "
      >
        <li
          class="
            c-p3
            c-h0
            c-a0
            fw-book
          "
        >
          <a
            href=/basic/backend/forms
            class="
              d-block
              fw-book
              c-p8
              c-h0
              c-a6
              ${params.page.url === '/basic/backend/forms/'
                ? 'active'
                : ''
              }
            "
          >
            ${params.page.url === '/basic/backend/forms/'
              ? `
              <span class="d-inline-flex ai-c mr-4 f-p3"
                style="width:0.6111rem;height:0.666rem;"
              >
                <svg>
                  <use xlink:href="#icon-left-arrow"></use>
                </svg>
              </span>`
              : ''
            }
            HTML forms
          </a>
        </li>
       <li
        class="
          c-p3
          c-h0
          c-a0
          fw-book
        "
       >
        <a
          href=/basic/backend/rest
          class="
            d-block
            fw-book
            c-p8
            c-h0
            c-a6
            ${params.page.url === '/basic/backend/rest/'
              ? 'active'
              : ''
            }
          "
        >
          ${params.page.url === '/basic/backend/rest/'
            ? `
            <span class="d-inline-flex ai-c mr-4 f-p3"
              style="width:0.6111rem;height:0.666rem;"
            >
              <svg>
                <use xlink:href="#icon-left-arrow"></use>
              </svg>
            </span>`
            : ''
          }
          REST
        </a>
      </li>
        <li
          class="mb0 c-p3 c-h0 c-a0 fw-book"
        >
          <a
            href=/basic/backend/graphql
            class="
              d-block
              fw-book
              c-p8
              c-h0
              c-a6
              ${params.page.url === '/basic/backend/graphql/'
                ? 'active'
                : ''
              }
            "
          >
            ${params.page.url === '/basic/backend/graphql/'
              ? `
              <span class="d-inline-flex ai-c mr-4 f-p3"
                style="width:0.6111rem;height:0.666rem;"
              >
                <svg>
                  <use xlink:href="#icon-left-arrow"></use>
                </svg>
              </span>`
              : ''
            }
            GraphQL
          </a>
        </li>
      </ul>

      <hr
        class="mb0 b-b b-p18"
        style="border-width:0.5px"
      />

      <h2
        class="
          pt-3
          pb-3
          fs-1
          fw-medium
          c-p8
          uppercase
          nowrap
          cu-pointer
        "
      >
        Information
      </h2>

      <ul
        class="
          mb-1
          pl0
        "
      >
        <li
          class="
            c-p3
            c-h0
            c-a0
            fw-medium
          "
        >
          <a
            href=/faq
            class="
              d-block
              fw-book
              c-p8
              c-h0
              c-a6
              ${params.page.url === '/faq'
                ? 'active'
                : ''
              }
            "
          >
            ${params.page.url === '/faq'
              ? `
              <span class="d-inline-flex ai-c mr-4 f-p3"
                style="width:0.6111rem;height:0.666rem;"
              >
                <svg>
                  <use xlink:href="#icon-left-arrow"></use>
                </svg>
              </span>`
              : ''
            }
            Frequently Asked Questions
          </a>
        </li>
        <li
          class="
            c-p3
            c-h0
            c-a0
            fw-medium
          "
        >
          <a
            href=/jargon
            class="
              d-block
              fw-book
              c-p8
              c-h0
              c-a6
              ${params.page.url === '/jargon'
                ? 'active'
                : ''
              }
            "
          >
            ${params.page.url === '/jargon'
              ? `
              <span class="d-inline-flex ai-c mr-4 f-p3"
                style="width:0.6111rem;height:0.666rem;"
              >
                <svg>
                  <use xlink:href="#icon-left-arrow"></use>
                </svg>
              </span>`
              : ''
            }
            Jargon
          </a>
        </li>
      <ul>
    </div>

    <footer>
        <a
          href=https://github.com/smallwins/training.begin.com/blob/master/${params.page.inputPath}
          class="
            c-p3
            c-h0
            c-a0
            f-p3
            f-h0
            f-a0
          "
        >
          Edit this page on GitHub
          <span
            class="d-inline-flex ai-c ml-4"
            style="width:0.6111rem;height:0.666rem;"
          >
            <svg>
              <use xlink:href="#icon-left-arrow"></use>
            </svg>
          </span>
        </a>
    </footer>
  </aside>

  <div class="fg-1 o-auto">
    <main
      id="doc"
      class="
        p-absolute
        p-static-lg
        trbl
        min-w0
        fg-1
        pt1
        pl0
        pr0
        pb3
        bg-p1
        transition-transform
        transition-none-lg
        o-auto
        o-hidden-lg
      "
    >
      <div
        class="
          fg-1
          max-w-60
          pb2
        "
      >
        ${params.content}
      </div>
    </main>
  </div>
</div>
</div>
<section id=popup style=display:none></section>
<script type=module src=/_static/js/index.js></script>
</div>
</body>
</html>`
}
