# Github API

## Authentication

There are three ways to authenticate through GitHub API v3. Requests that require authentication will return 404 Not Found, instead of 403 Forbidden, in some places. This is to prevent the accidental leakage of private repositories to unauthorized users.

* Basic Authentication
  * `$ curl -u "username" https://api.github.com`
* OAuth2 Token (sent in a header)
  * `$ curl -H "Authorization: token OAUTH-TOKEN" https://api.github.com`
* OAuth2 Token (sent as a parameter)
  * `$ curl https://api.github.com/?access_token=OAUTH-TOKEN`

Authenticating with invalid credentials will return 401 Unauthorized:

```
$ curl -i https://api.github.com -u foo:bar

HTTP/1.1 401 Unauthorized

{
  "message": "Bad credentials",
  "documentation_url": "https://developer.github.com/v3"
}
```

## Requests

