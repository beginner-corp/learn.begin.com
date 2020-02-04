@app
learn-begin

@aws
region us-west-1

@cdn

@static
folder _site

@http
get  /admin
get  /api/progress
get  /login
get  /logout
post /api/progress

@macros
session-db

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
