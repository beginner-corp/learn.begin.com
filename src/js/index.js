/* global window document fetch */
// global state bag; everything renders from this
window.STATE = {}

// init the app by reading state
document.addEventListener('DOMContentLoaded', async function main() {
  let request = await fetch('/api/progress')
  window.STATE = await request.json()
  return render()
}, false)

// prog enhancement yall
async function render() {
  // render the markup
  await Promise.all([
    Nav(),
    Form(),
    Checks(),
    Popup(),
  ])
  // register the event listeners
  await Promise.all([
    SaveProgress(),
    ShowProgress(),
  ])
}

// render login/logout
async function Nav() {
  let state = window.STATE
  if (state.authorized) {
    document.querySelector('nav').innerHTML += `
    <div
      class="
        d-flex-lg
      "
    >
      <a
        id=show
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
        "
      >
        ${state.account.login}
      </a>
      <a
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
        "
        href=/logout
      >
        logout
      </a>
    </div>
    `
  }
  else {
    document.querySelector('nav').innerHTML += `<a href=${state.href}>login</a>`
  }
}

// couple of helper strings we reuse a bit
let on = 'Page complete. Way to go!'
let off = '☜ Mark this page as complete'

// render the progress form
async function Form() {
  let state = window.STATE
  let depth = window.location.pathname.split('/').filter(Boolean).length
  if (state.authorized && depth === 3) {

    let page = window.location.pathname
    let complete = state.progress[page] && state.progress[page].complete

    document.querySelector('main').innerHTML += `
      <form id=progress action=/api/progress method=post>
        <input type=hidden name=page value=${page}>
        <input type=checkbox name=complete id=check ${complete? ' checked' : ''}>
        <label for=check>${complete?  on : off}</label>
      </form>
    `
  }
}

// render the popup
async function Popup() {
  let state = window.STATE
  if (state.authorized) {
    let popup = document.getElementById('popup')

    let course = {
      basic: {foundations:0, frontend:0, state:0, backend:0}
    }

    let keys = Object.keys(state.progress).reduce((a, b) => {
      let bits = b.split('/').filter(Boolean)
      // let course = bits.shift() // discard for now while there is only one course
      let section = bits.shift()
      if (!a[section])
        a[section] = 0
      a[section] += 1
      return a
    }, {})

    let html = ''
    for (let section of Object.keys(course.basic)) {
      html += `<li><b>${section}</b> ${ keys[section] || 0 } of 3</li>`
    }
    popup.innerHTML = `
      <img src=${state.account.avatar}>
      <h3>${state.account.name}</h3>
      <ul>${html}</ul>
    `
  }
}

// render check marks
async function Checks() {
  let state = window.STATE
  let depth = window.location.pathname.split('/').filter(Boolean).length
  if (state.authorized && depth <= 3) {
    let els = document.querySelectorAll('div > section > ul > li > a')
    for (let el of els) {
      let path = (new URL(el.href)).pathname
      let txt = state.progress[path] && state.progress[path].complete? el.innerText.replace('‣', '✔') : el.innerText.replace('✔', '‣')
      el.innerText = txt
    }
  }
}

// toggle the popup visability
async function ShowProgress() {
  let popup = document.getElementById('popup')
  let show = document.getElementById('show')
  show.addEventListener('click', function click(e) {
    popup.style.display =  popup.style.display === 'none' ? 'flex' : 'none'
    e.preventDefault()
  }, false)
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
      window.STATE.progress = json.progress
      // re-render
      await Promise.all([
        Checks(),
        Popup()
      ])
    }
  }
}

// Footer
// let copyright =  `Copyright © ${new Date().getFullYear()}`
