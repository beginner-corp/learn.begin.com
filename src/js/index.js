// global state bag
window.STATE = {}

// init the app
document.addEventListener('DOMContentLoaded', async function main() {
  let request = await fetch('/api/progress')
  window.STATE = await request.json()
  return render()
}, false)

// prog enhance
async function render() {
  // render the markup and reg event listeners
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
      <a id=show style=cursor:pointer>${state.account.login}</a> 
      <a href=/logout>logout</a>
    `
  }
  else {
    document.querySelector('nav').innerHTML += `<a href=${state.href}>login</a>`
  }
}

let on = 'Page complete. Way to go!'
let off = '☜ Mark this page as complete'

// render the progress form
async function Form() {
  let state = window.STATE
  let depth = window.location.pathname.split('/').filter(Boolean).length
  if (state.authorized && depth === 2) {

    let page = window.location.pathname
    let complete = !!state.progress[page]

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
    let copy = document.querySelector('div > section').innerHTML
    popup.innerHTML = `
      <img src=${state.account.avatar}>
      <h3>${state.account.name}</h3>
      ${copy}
    `
  }
}

// render check marks
async function Checks() {
  let state = window.STATE
  let depth = window.location.pathname.split('/').filter(Boolean).length
  if (state.authorized && depth <= 2) {
    let els = document.querySelectorAll('div > section > ul > li > a')
    for (let el of els) {
      let path = (new URL(el.href)).pathname
      let txt = state.progress[path]? el.innerText.replace('‣', '✔') : el.innerText.replace('✔', '‣')
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
  let check = form[1]
  let label = form.children[2]
  check.onchange = async function change(e) {
    let page = window.location.pathname
    let complete = this.checked
    label.innerHTML = complete? on : off
    let path = (new URL(form.action)).pathname
    let request = await fetch(path, {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({page, complete})
    })
    let json = await request.json()
    window.STATE.progress = json.progress
    await Promise.all([Checks(), Popup()])
  }
}
