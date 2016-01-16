
var md5sign   = require('md5'),
    sha1sign  = require('sha1'),
    unixTime  = require('unix-time'),
    urlParse  = require('url-parse'),
    urlString = 'https://www.google.co.uk/?gws_rd=ssl#safe=strict&q=node+vs+java+performance',
    isUrl     = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(urlString),
    invalidUrl = '{"href":"","protocol":"","username":"","password":"","auth":"","host":"","hostname":"","port":"","pathname":"","query":"","hash":""}';

console.log(JSON.stringify({
    href: '',
    protocol: '',
    username: '',
    password: '',
    auth:  '',
    host:  '',
    hostname:  '',
    port:  '',
    pathname:  '',
    query:  '',
    hash:  ''
}));

var date = new Date(),
    obj = {
        url: urlString,
        short: '',
        md5: md5sign(urlString),
        sha1: sha1sign(urlString),
        timestamp: date,
        unix: unixTime(date),
        is_url: isUrl,
        url_details: (isUrl) ? urlParse(urlString) : JSON.parse(invalidUrl),
        originator: {
            ip: 'not-implemented-yet'
        }
    };

console.log(obj);
