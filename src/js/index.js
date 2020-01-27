async function main() {
  let result = await fetch('/api/progress')
  let json = await result.json()
  if (!json.authorized) {
    document.querySelector('nav').innerHTML += `<a href=${json.href}>login</a>`
  }
}

main()
