let arc = require('@architect/functions')
let {URIs} = require('@architect/shared/constants')

async function logout() {
  let stage = 'local'
  if (process.env.NODE_ENV === 'staging') stage = 'staging'
  if (process.env.NODE_ENV === 'production') stage = 'production'
  if (process.env.ARC_LOCAL) stage = 'local'

  let location = `${URIs[stage].begin}/logout`

  return {
    location
  }
}

exports.handler = arc.http.async(logout)
