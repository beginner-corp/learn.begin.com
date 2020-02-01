@app
learn-begin

@aws
region us-west-1

@static
folder _site

@http
get  /admin
get  /api/progress
get  /login
get  /logout
post /api/progress
post /logout

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
