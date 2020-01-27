async function main() {
  let result = await fetch('/api/progress')
  let json = await result.json()
  let login = `<a href=${json.href}>login</a>`
  let logout = `<a href=/logout>logout</a>`
  document.querySelector('nav').innerHTML += json.authorized? logout : login
}

main()
