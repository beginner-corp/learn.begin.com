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
<symbol viewBox="0 0 16 14" id="icon-apps"><path fill-rule="evenodd" d="M12.26 8.215l1.207-.773L16 8.908 8 14 0 8.908l2.525-1.466 1.215.773-1.286.741L8 12.486l5.538-3.53-1.278-.74zM8 9.713L0 4.622 8 0l8 4.622-8 5.091zM2.454 4.677L8 8.207l5.538-3.53L8 1.474 2.454 4.677z"></path></symbol>

<symbol viewBox="0 0 16 14" id="icon-docs"><path fill-rule="evenodd" d="M16 4.978l-3.338 6.163H10.16V14l-3.193-1.66L3.773 14v-2.86H2.54C.853 11.14 0 10.245 0 8.453 0 7.92.063 7.334.308 6.86 1.596 4.356 2.612 2.763 3.62 1.533 4.454.52 5.161 0 6.739 0h9.134l-4.127 6.874H2.54c-.436 0-1.089 0-1.089 1.563 0 1.519.626 1.519 1.089 1.519h1.233v-1.66h1.451v3.541l1.742-.904 1.741.904v-3.54h1.452v1.659h1.55l2.704-4.978H16zm-11.175-2.8c-.707.866-1.505 2.089-2.313 3.51h8.327l2.703-4.503H6.739c-.961 0-1.251.193-1.914.993z"></path></symbol>

<symbol viewBox="0 0 16 14" id="icon-heart"><path d="M15.99 4.058c.07 1.062-.22 2.663-1.99 4.319-3.01 2.798-5.4 5.056-5.42 5.074L8 14l-.58-.549C7.4 13.433 5.01 11.175 2 8.377.23 6.72-.06 5.12.01 4.057c.08-1.24.7-2.401 1.66-3.103C2.5.35 3.59 0 4.68 0 6.33 0 7.38.639 8 1.413 8.62.639 9.67 0 11.32 0c1.09 0 2.18.35 3.01.954.96.702 1.58 1.862 1.66 3.104zm-3.14 3.32c1.37-1.278 1.6-2.465 1.54-3.24-.06-.989-.59-1.718-1.07-2.06-.54-.404-1.29-.638-2-.638-2.29 0-2.48 1.817-2.52 2.024-.05.234-.23.567-.77.567-.56 0-.79-.306-.83-.576-.03-.189-.23-2.015-2.52-2.015-.71 0-1.46.234-2 .638-.48.342-1.01 1.071-1.07 2.06-.06.775.17 1.962 1.54 3.24C5.28 9.366 7.11 11.076 8 11.913c.89-.837 2.72-2.547 4.85-4.535z" fill-rule="evenodd"></path></symbol>

<symbol viewBox="0 0 18 12" id="icon-menu"><g fill-rule="evenodd"><rect width="18" height="2" rx="1"></rect><rect y="5" width="18" height="2" rx="1"></rect><rect y="10" width="18" height="2" rx="1"></rect></g></symbol>

<symbol viewBox="0 0 16 10" id="icon-disclose"><path d="M5.762 8L.475 2.725C.158 2.4 0 2.025 0 1.6 0 1.175.158.804.475.487.8.162 1.175 0 1.6 0c.425 0 .8.158 1.125.475L8 5.762 13.275.475C13.6.158 13.975 0 14.4 0c.425 0 .796.162 1.112.487.326.317.488.688.488 1.113 0 .425-.158.8-.475 1.125L10.238 8l-1.44 1.44c-.262.272-.528.407-.798.405-.27-.002-.54-.141-.81-.417L5.762 8z" fill-rule="evenodd"></path></symbol>

<symbol viewBox="0 0 11 11" id="icon-left-arrow"><path d="M5.385 0l5.518 5.517-5.518 5.518-.751-.745 4.245-4.245H0V4.99h8.88L4.633.745z" fill-rule="nonzero"></path></symbol>

<symbol viewBox="0 0 16 14" id="icon-support"><path fill-rule="evenodd" d="M12.462 0C14.413 0 16 1.504 16 3.354v3.792c0 1.85-1.587 3.354-3.538 3.354H9.317l-3.702 3.3a.852.852 0 0 1-.538.2.821.821 0 0 1-.298-.055.735.735 0 0 1-.471-.674V10.5h-.77C1.587 10.5 0 8.996 0 7.146V3.354C0 1.504 1.587 0 3.538 0h8.924zm2 7.146V3.354c0-1.048-.895-1.896-2-1.896H3.538c-1.105 0-2 .848-2 1.896v3.792c0 1.048.895 1.896 2 1.896h2.308v2.606l2.856-2.606h3.76c1.105 0 2-.848 2-1.896z"></path></symbol>

<symbol viewBox="0 0 15 16" id="icon-settings"><path d="M14.636 9.852a1.1 1.1 0 0 1 .233 1.335l-.933 1.626c-.187.32-.552.53-.934.53a.986.986 0 0 1-.342-.062l-1.377-.484c-.466.375-.98.672-1.54.89l-.264 1.446A1.096 1.096 0 0 1 8.436 16H6.57c-.497 0-.956-.383-1.042-.867l-.272-1.445a5.958 5.958 0 0 1-1.54-.891l-1.377.484a1.092 1.092 0 0 1-1.268-.469l-.934-1.624a1.087 1.087 0 0 1 .226-1.336l1.105-.954A5.883 5.883 0 0 1 1.404 8c0-.297.016-.594.063-.898L.362 6.148a1.087 1.087 0 0 1-.226-1.335l.934-1.625c.241-.415.809-.633 1.268-.47l1.377.485a5.958 5.958 0 0 1 1.54-.89L5.527.867A1.083 1.083 0 0 1 6.57 0h1.867c.49 0 .95.383 1.043.867l.264 1.446c.56.218 1.074.515 1.54.89l1.377-.484c.46-.164 1.027.047 1.276.469l.933 1.624a1.1 1.1 0 0 1-.233 1.336l-1.105.954a5.903 5.903 0 0 1 0 1.796l1.105.954zm-.63.835c.008-.015 0-.07-.016-.078l-1.54-1.328.055-.289c.062-.328.1-.664.1-.992 0-.328-.038-.664-.1-.992l-.055-.29 1.54-1.327c.016-.008.024-.063.016-.079l-.934-1.625a.146.146 0 0 0-.07-.03l-1.929.679-.217-.188a4.968 4.968 0 0 0-1.712-.992l-.272-.094-.373-2.007C8.49 1.03 8.452 1 8.436 1H6.57c-.023 0-.062.031-.062.055l-.38 2.008-.273.093a4.967 4.967 0 0 0-1.711.992l-.218.188-1.914-.68a.191.191 0 0 0-.078.031L1 5.313c-.008.015 0 .07.015.078l1.533 1.328-.055.289a5.355 5.355 0 0 0 0 1.984l.055.29-1.54 1.327c-.008.008-.016.063-.008.079l.933 1.624a.117.117 0 0 0 .07.032l1.922-.68.218.188a4.968 4.968 0 0 0 1.71.992l.273.094.381 2.007c0 .024.04.055.062.055h1.867c.016 0 .055-.031.063-.055l.373-2.008.272-.093a4.968 4.968 0 0 0 1.712-.992l.217-.188 1.922.68c.046 0 .07-.024.077-.031l.934-1.626zM7.503 4.75c1.781 0 3.236 1.46 3.236 3.25s-1.455 3.25-3.236 3.25c-1.781 0-3.236-1.46-3.236-3.25s1.455-3.25 3.236-3.25zm0 6A2.748 2.748 0 0 0 10.24 8a2.748 2.748 0 0 0-2.738-2.75A2.748 2.748 0 0 0 4.765 8a2.748 2.748 0 0 0 2.738 2.75z" fill-rule="evenodd"></path></symbol>

<symbol viewBox="0 0 16 16" id="icon-sprout"><path d="M13.781 6.774q.109.43.164.863T14 8.5q0 .742-.246 1.394t-.668 1.144q-.43.492-1.019.875t-1.269.625q-.336.117-.699.207t-.746.152l-.102-2.148 2.398-2q.086-.086.102-.176t-.047-.176q-.086-.125-.187-.152t-.219.051L9.15 9.452l-.148-3.953q0-.187-.156-.344t-.344-.156-.344.156-.156.344v9.5q0 .414-.293.707t-.707.293-.707-.293-.293-.707v-2.25q-.844-.187-1.559-.555t-1.262-.891q-.555-.523-.867-1.246t-.312-1.559q0-.867.223-1.726t.574-1.562q.344-.703.848-1.398t.973-1.203T5.659 1.59t.953-.809q.187-.141.387-.289t.402-.289Q7.667 0 8.003 0t.602.203q.414.289.793.582t.949.801q.57.516 1.039 1.023t.977 1.203q.5.695.848 1.398t.574 1.562z"></path></symbol>

</svg>
<div class="vh-100 d-flex fd-c o-hidden">
<header
  class="
    p-relative
    d-flex
    ai-c
    jc-b
    p0
    bg-p25
  "
>
  <div
    class="
      d-flex
      ai-c
      w-100
    "
  >
    <div
      class="
        d-none-lg
        mr-1
      "
      style="
        margin-top:-0.111rem;
      "
    >
      <a
        id="js-menu"
        class="
          f-p1
          bg-p0
        "
        href="#"
      >
        <div
          style="
            width:1rem;
            height:0.666rem;
          "
        >
          <svg>
            <use xlink:href="#icon-menu"></use>
          </svg>
        </div>
      </a>
    </div>
    <a
      class="mr4"
      href="/apps"
    >
      <div
        class="
          logo
          d-flex
          ai-c
        "
      >
        <img
          src="https://static.begin.com/web/begin-logo.svg"
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
        max-h-0
        max-h-infinity-lg
        p-absolute
        p-static-lg
        d-flex-lg
        jc-b
        pr-4
        pl-4
        o-hidden
        bg-p25
        menu-transition
        z1
        z0-lg
      "
      style="
        top:3rem;
        right:0;
        left:0;
        border-bottom-right-radius:6px;
        border-bottom-left-radius:6px;
      "
    >
      <span
        class="
          d-flex-lg
        "
      >
        <a
          id="js-apps-link"
          alt="/apps"
          class="
            d-none
            ai-c
            fs-off-scale
            fw-medium
            uppercase
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
          "
          href="https://begin.com/apps"
          target="_blank"
          rel="noopener"
        >
          <div
            class="
              mr-2
              f-p26
            "
            style="
              width:0.888rem;
              height:0.777rem;
            "
          >
            <svg>
              <use xlink:href="#icon-apps"></use>
            </svg>
          </div>
          <span>Apps</span>
        </a>
        <a
          alt="https://docs.begin.com"
          class="
            d-flex
            ai-c
            fs-off-scale
            fw-medium
            uppercase
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
          "
          href="https://docs.begin.com"
          target="_blank"
          rel="noopener"
        >
        <div
          class="
            mr-2
            f-p26
          "
          style="
            width:0.888rem;
            height:0.777rem;
          "
        >
          <svg>
            <use xlink:href="#icon-docs"></use>
          </svg>
        </div>
        <span>Docs</span>
       </a>
        <a
          alt="https://learn.begin.com"
          class="
            d-flex
            ai-c
            fs-off-scale
            fw-medium
            uppercase
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
            active
          "
          href="#"
          target="_blank"
          rel="noopener"
        >
        <div
          class="
            mr-2
            f-p26
          "
          style="
            width:0.888rem;
            height:0.777rem;
          "
        >
          <svg>
            <use xlink:href="#icon-sprout"></use>
          </svg>
        </div>
        <span>Learn</span>
       </a>
       <a
        alt="https://spectrum.chat/begin"
        class="
          d-flex
          ai-c
          fs-off-scale
          fw-medium
          uppercase
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
        "
        href="https://spectrum.chat/begin"
        target="_blank"
        rel="noopener"
      >
        <div
          class="
            mr-2
            f-p26
          "
          style="
            width:0.888rem;
            height:0.777rem;
          "
        >
          <svg>
            <use xlink:href="#icon-heart"></use>
          </svg>
        </div>
        <span>Community</span>
      </a>
      <a
        alt="https://begin-help.zendesk.com"
        class="
          d-flex
          ai-c
          fs-off-scale
          fw-medium
          uppercase
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
        "
        href="https://begin-help.zendesk.com"
        target="_blank"
        rel="noopener"
      >
        <div
          class="
            mr-2
            f-p26
          "
          style="
            width:0.888rem;
            height:0.777rem;
          "
        >
          <svg>
            <use xlink:href="#icon-support"></use>
          </svg>
        </div>
        <span>Support</span>
      </a>
    </span>
  </nav>
</div>
<div id="js-disclose-container">
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
      style="
        width:0.888rem;
        height:0.555rem;
      "
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
          uppercase nowrap cu-pointer "
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
          uppercase
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

      <ul
        class="
          mb2
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
              c-p3
              c-h0
              c-a0
              f-p3
              f-h0
              f-a0
              ${params.page.url === '/faq'
                ? 'active'
                : ''
              }
            "
          >
            Frequently Asked Questions
          </a>
        </li>
        <li
          class="
            c-p3
            c-h0
            c-a0
          "
        >
          <a
            href=/jargon
            class="
              d-block
              fw-book
              c-p3
              c-h0
              c-a0
              f-p3
              f-h0
              f-a0
              ${params.page.url === '/jargon'
                ? 'active'
                : ''
              }
            "
          >
            Jargon Dictionary
          </a>
        </li>
      </ul>
      <button
        id=js-show-progress
        class="
          d-none
          ml0
          pt-1
          pr0
          pb-1
          pl0
          fs0
          fw-book
          c-p1
          br0
          cu-pointer
          shadow-card
        "
        style="
          background-image: linear-gradient(45deg, #007ACC, #9C24FF);"
        "
      >
        Check your progress
      </button>
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
<section
  id=popup
  class="
    d-none
    p-absolute
    trbl
    jc-c
    ai-c
  "
  style="
    background-color: rgba(0,0,0,0.6)
  "
></section>

<script
  type=module
  src=/_static/js/index.js
></script>
</div>
</body>
</html>`
}
