let arc = require('@architect/functions')
let data = require('@begin/data')

async function progress(req) {
  try {

    if (!req.session.account)
      return {status: 403, json: {}}

    if (!req.body.page)
      return {status: 401, json: {}}

    let table = 'progress'
    let key = req.session.account.id

    let progress = await data.get({table, key})
    if (!progress) progress = {table, key}
    progress[req.body.page] = req.body.complete || false

    await data.set(progress)

    return {
      status: 201,
      json: {progress}
    }
  }
  catch(e) {
    return {
      status: 500,
      html: 'fail ' + e.message
    }
  }
}

exports.handler = arc.http.async(progress)
