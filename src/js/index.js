/* global window document fetch */
const state = {}
function setState(obj) {
  render(Object.assign(state, obj))
}
// init the app by reading state
document.addEventListener('DOMContentLoaded', async function main() {
  goAway()
  let request = await fetch('/api/progress')
  let state = await request.json()
  setState(state)
}, false)

function goAway() {
  /mobile/i.test(window.navigator.userAgent)
    && !window.location.hash
    && setTimeout(() => window.scrollTo(0, 1), 1000)
}

// prog enhancement yall
async function render(state) {
  // render the markup
  await Promise.all([
    Nav(state),
    Form(state),
    Checks(state),
    Popup(state),
  ])
  // register the event listeners
  await Promise.all([
    SaveProgress(),
    ShowProgress(state),
  ])
}

// render login/logout
async function Nav(state) {
  let disclose = document.getElementById('js-disclose')
  let nav = document.getElementById('js-nav')
  let doc = document.getElementById('doc')
  let menu = document.getElementById('js-menu')
  let appsLink = document.getElementById('js-apps-link')
  let auth = document.getElementById('js-auth')
  if (menu) {
    menu.onclick = e => {
      e.preventDefault()
      doc.classList.toggle('slide-menu')
      disclose.classList.remove('rotate180')
      nav.classList.remove('max-h-infinity')
    }
  }
  disclose.onclick = e => {
    e.preventDefault()
    disclose.classList.toggle('rotate180')
    nav.classList.toggle('max-h-infinity')
  }
  if (state.authorized) {
    appsLink.classList.remove('d-none')
    appsLink.classList.add('d-flex')
    auth && (auth.innerHTML = `
    <div
      class="
        d-flex-lg
      "
    >
      <a
        href="https://begin.com/account"
        class="
          d-flex
          ai-c
          fs-off-scale
          fw-medium
          upper
          lh2
          pr0
          pl-3
          pr-none-lg
          pl-none-lg
          c-p26
          c-h3
          c-a5
          bg-a7
          br-pill
          transition-all
          mb-2
          mb-none-lg
        "
      >
        <div
          class="
            avatar
            mr-3
            mr-none-lg
          "
        >
          <img
            src="${state.account.avatar}"
            alt="Profile avatar"
            class="
              br-100
              o-hidden
            "
            style="object-fit: cover;"
          >
        </div>
        <span
        class="
          d-none-lg
          fs-off-scale
          fw-medium
          uppercase
          pr0
          c-p26
          c-h3
          c-a5
          transition-all
          mb-1
          mb-none-lg
        "
        >
          Your profile
        </span>
      </a>
    </div>
    `)
  } else {
    appsLink.classList.add('d-none')
    appsLink.classList.remove('d-flex')
    auth && (auth.innerHTML =  `
    <span class="mb0 mb-none-lg d-flex fd-c fd-r-lg">
      <a
        href=${state.href}
        class="
          pt-4
          pr-1
          pb-4
          pl-1
          order1
          order-initial-lg
          fw-medium
          fs-off-scale
          ta-c
          upper
          br-pill
          bg-p26
          c-p25
          c-h3
          c-a5
          bg-a7
          transition-all
          cu-pointer
        "
        style="max-width: 6rem;"
      >
        Login
      </a>
    </span>
    `)
  }
}

// couple of helper strings we reuse a bit
let on = 'Page complete. Way to go!'
let off = 'Mark this page as complete'

// render the progress form
async function Form(state) {
  let form = document.getElementById('js-form')
  let depth = window.location.pathname
    .split('/').filter(Boolean).length

  if (state.authorized && depth === 3) {
    let page = window.location.pathname
    let complete = state.progress[page] &&
      state.progress[page].complete

    form.innerHTML = `
      <form
        class="
          d-inline-flex
          ai-c
          pb1
        "
        id=progress
        action=/api/progress
        method=post
      >
        <input
          type=hidden
          name=page
          value=${page}
        />
        <input
          class="mr-2"
          type=checkbox
          name=complete
          id=check
          ${complete ? 'disabled' : ''}
          ${complete ? 'checked' : ''}
        />
        <label for=check>${complete?  on : off}</label>
      </form>
    `
  }
}

// render the popup
async function Popup(state) {
  if (state.authorized) {
    let popup = document.getElementById('popup')
    // Hard coded courses with sections ( just basic for now )
    let course = {
      basic: {
        foundations:0,
        frontend:0,
        state:0,
        backend:0
      }
    }
    // Copy of progress object
    let progress = Object.assign({}, state.progress)
    // Remove dynamo keys
    delete progress.key
    delete progress.table
    let keys = Object.keys(progress)
      .reduce((a, b) => {
          let parts = b.split('/').filter(Boolean)
          // let course = parts[0] // For later
          let section = parts[1]
          // let subSection = parts[2] // For later
          // Add up all the completed subsections of a section
          if (!a[section]) {
            // Since you can't add a number to undefined we need to initialize to zero
            // Mark it zero Donnie!
            a[section] = 0
          }
          // Add it up
          a[section] += 1
          return a
        },
        // Initialization object to populate during reduce
        {}
      )

    let html = ''
    for (let section of Object.keys(course.basic)) {
      let label = section[0].toUpperCase() + section.slice(1)
      html += `
     <li class="d-flex fw-book c-p8">
      <b class="fs0 fw-medium mr-1">${label}</b><span>${ keys[section] || 0 } of 3</span>
     </li>
      `
    }
    popup.innerHTML = `
  <div
    class="
      d-flex
      fd-c
      ai-c
      bg-p1
      br1
      pt0
      pr2
      pb2
      pl2
    "
    style="
      margin-top: -13vh;
      width:20rem;
      box-shadow: 0 1px 2px var(--p4);
    "
  >
    <div
      class="
        mb-1
        d-flex
        br-100
        b
        b-p1
        of-contain
        o-hidden
      "
      style="
        margin-top: -5rem;
        border-width: 1rem;
        width: 9rem;
        box-shadow: 0 -1px 2px var(--p4);
      "
    >
      <img
        src=${state.account.avatar}
        class="
s
        "
      >
    </div>
    <h3>${state.account.name}</h3>
    <ul>${html}</ul>
  </div>
    `
  }
}

// render check marks
async function Checks(state) {
  let depth = window.location.pathname
    .split('/')
    .filter(Boolean)
    .length
  if (state.authorized && depth <= 3) {
    let els = document.querySelectorAll('.js-list-item')
    for (let el of els) {
      let path = (new URL(el.href)).pathname
      if (state.progress[path]
        && state.progress[path].complete) {
        el.querySelector('.js-check')
          .classList
          .remove('d-none')
      }
    }
  }
}

// toggle the popup visability
async function ShowProgress(state) {
  let popup = document.getElementById('popup')
  let show = document.getElementById('js-show-progress')
  if (show && state.authorized) {
    show.classList.remove('d-none')
    popup.addEventListener('click', togglePopup, false)
    show.addEventListener('click', togglePopup, false)
    function togglePopup(e) {
      e.preventDefault()
      popup.classList.toggle('d-none')
      popup.classList.toggle('d-flex')
    }
  }
}

// save the progress, update the state and re-render
async function SaveProgress() {
  let form = document.getElementById('progress')
  if (form) {
    let check = form[1]
    let label = form.children[2]
    check.onchange = async function change() {
      // collect the data we need
      let page = window.location.pathname
      let complete = this.checked
      let title = document.querySelector('h1').innerText
      // optimistic update the label
      label.innerHTML = complete? on : off
      // save the data
      let path = (new URL(form.action)).pathname
      let request = await fetch(path, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({page, complete, title})
      })
      // updates state
      let json = await request.json()
      setState(json)
    }
  }
}

// Footer
// let copyright =  `Copyright © ${new Date().getFullYear()}`
