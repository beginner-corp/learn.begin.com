@app
trees-j4e

@static
folder _site

@http
get /login
get /api/progress
get /logout
post /api/progress
get /admin

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
