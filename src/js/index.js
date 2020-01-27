async function main() {
  
  // herein is the drawback of ssg
  let result = await fetch('/api/progress')
  let json = await result.json()

  if (json.authorized) {
    
    // render github login/logout link
    document.querySelector('nav').innerHTML += `
      <a id=show style=cursor:pointer>${json.account.login}</a> 
      <a href=/logout>logout</a>
    `

    // render the show progress control
    window.document.body.innerHTML += `<section id=popup style=display:none>
      <img src=${json.account.avatar}>
      <h3>${json.account.name}</h3>
      <pre>${JSON.stringify(json.progress, null, 2)}</pre>
    </section>`

    let popup = document.getElementById('popup')
    let show = document.getElementById('show')
    show.onclick = function click(e) {
      popup.style.display =  popup.style.display === 'none' ? 'flex' : 'none'
      e.preventDefault()
    }
  }
  else {
    // encourage a login otherwise
    document.querySelector('nav').innerHTML += `<a href=${json.href}>login</a>`
  }

  // render the progress control on tutorial pages
  let depth = window.location.pathname.split('/').filter(Boolean).length
  if (json.authorized && depth === 2) {

    let page = window.location.pathname
    let complete = !!json.progress[page]
    let on = 'Page complete. Way to go!'
    let off = '☜ Mark this page as complete'

    document.querySelector('main').innerHTML += `
      <form id=progress action=/api/progress method=post>
        <input type=hidden name=page value=${page}>
        <input type=checkbox name=complete id=check ${complete? ' checked' : ''}>
        <label for=check>${complete?  on : off}</label>
      </form>
    `

    let form = document.getElementById('progress')
    let check = form[1]
    let label = form.children[2]

    check.onchange = async function change(e) {
      let complete = this.checked
      label.innerHTML = complete? on : off
      let path = (new URL(form.action)).pathname
      await fetch(path, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({page, complete})
      })
    }
  }
}

document.addEventListener('DOMContentLoaded', main) 
