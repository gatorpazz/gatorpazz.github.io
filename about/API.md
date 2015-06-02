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

You can make requests with the GET command

### Rate Limiting

Requests have limits on GitHub. For requests using Basic Authentication or OAuth, you can make up to 5,000 requests per hour. For unauthenticated requests, the rate limit allows you to make up to 60 requests per hour. Unauthenticated requests are associated with your IP address, and not the user making requests. 

Once you go over the rate limit you will receive an error response:

```
HTTP/1.1 403 Forbidden
Date: Tue, 20 Aug 2013 14:50:41 GMT
Status: 403 Forbidden
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1377013266

{
    "message": "API rate limit exceeded for xxx.xxx.xxx.xxx. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
    "documentation_url": "https://developer.github.com/v3/#rate-limiting"
}
```

If your OAuth application needs to make unauthenticated calls with a higher rate limit, you can pass your app’s client ID and secret as part of the query string:

```
$ curl -i 'https://api.github.com/users/whatever?client_id=xxxx&client_secret=yyyy'

HTTP/1.1 200 OK
Date: Mon, 01 Jul 2013 17:27:06 GMT
Status: 200 OK
X-RateLimit-Limit: 5000
X-RateLimit-Remaining: 4966
X-RateLimit-Reset: 1372700873
```

If you are using Basic Authentication or OAuth, and you are exceeding your rate limit, you can likely fix the issue by caching API responses and using conditional requests.

If you’re using conditional requests and still exceeding your rate limit, please contact us to request a higher rate limit for your OAuth application.

