# [Node.js](https://nodejs.org/en/) ShortURL

Turns URLs into deconstructed objects with MD5, SH1 and Short URL representation.

### Version
0.0.1 beta

[![Build Status](https://travis-ci.org/martinswiderski/short-url.svg?branch=master)](https://travis-ci.org/martinswiderski/short-url)

### Use

After including into your project.json just use:

```
var shorturl = require('short-url-generator'),
    url      = 'https://username:passwd@www.bzz.co.uk:9000/new/session/search?client=ubuntu&channel=fs&q=twilio+sms&ie=utf-8&oe=utf-8&gfe_rd=cr&ei=X2ChVuKzHe_H8geE5aOQDw#hashTagAtTheEnd';
    out      = shorturl(url);
    
console.log(out);

{
	"url": "https://username:passwd@www.bzz.co.uk:9000/new/session/search?client=ubuntu&channel=fs&q=twilio+sms&ie=utf-8&oe=utf-8&gfe_rd=cr&ei=X2ChVuKzHe_H8geE5aOQDw#hashTagAtTheEnd",
	"strlen": 169,
	"short": "4g4K2",
	"md5": "3d066fad0ffd1284b0978097c63f804c",
	"sha1": "21be6177d97b1abf123c60b662f2dc5815f13ce9",
	"timestamp": "2016-01-29T06:14:00.891Z",
	"unix": 1454048040,
	"is_url": true,
	"url_details": {
		"hash": "#hashTagAtTheEnd",
		"query": "?client=ubuntu&channel=fs&q=twilio+sms&ie=utf-8&oe=utf-8&gfe_rd=cr&ei=X2ChVuKzHe_H8geE5aOQDw",
		"protocol": "https:",
		"pathname": "/new/session/search",
		"auth": "username:passwd",
		"host": "www.bzz.co.uk:9000",
		"port": "9000",
		"hostname": "www.bzz.co.uk",
		"password": "passwd",
		"username": "username"
	},
	"originator": {
		"ip": "not-implemented-yet"
	}
}

```

Good luck!