let arc = require('@architect/functions')
let data = require('@begin/data')

async function progress(req) {

  if (!req.session.account)
    return {status: 403}

  if (!req.body.page)
    return {status: 401}

  let table = 'progress'
  let key = req.session.account.id

  let progress = await data.get({table, key})
  progress[req.body.page] = true
  await data.set({table, key, progress})

  return {status: 201}
}

exports.handler = arc.http.async(progress)
