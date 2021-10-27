const URIs = {
  local: {
    begin:  'http://localhost:3333',
    docs:   'http://localhost:4444',
    learn:  'http://localhost:5555'
  },
  staging: {
    begin:  'https://staging.begin.com',
    docs:   'https://docs.staging.begin.com',
    learn:  'https://learn.staging.begin.com',
    blog:   'https://blog.staging.begin.com'
  },
  production: {
    begin:  'https://begin.com',
    docs:   'https://docs.begin.com',
    learn:  'https://learn.begin.com',
    blog:   'https://blog.begin.com'
  }
}

module.exports = {
  URIs
}
