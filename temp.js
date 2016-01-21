
var config    = require('./src/configuration'),
    md5sign   = require('md5'),
    sha1sign  = require('sha1'),
    unixTime  = require('unix-time'),
    urlParse  = require('url-parse'),
    Random    = require('random-js'),
    urlString = 'http://business.worldpay.com/merchant-services?mh_keyword=%2Bcard%20%2Bpayments&campaignID=194165972&campaign={campaign}&medium={cpc}&source={google}&keyword=%2Bcard%20%2Bpayments&gclid=CjwKEAiA8ee0BRD1l7vV6JHe0zISJADxYItmkKtIFPlNPoYNOM_s4gILJe_5-jyplwONDbsAcuQTFhoC7pLw_wcB',
    isUrl     = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(urlString),
    invalidUrl = '{"href":"","protocol":"","username":"","password":"","auth":"","host":"","hostname":"","port":"","pathname":"","query":"","hash":""}';





function randomCharacter (id) {
    var pool = 'TUVGH1I8AC3J2VKLM460BN6O5PQ7RS9XYWZ';
}


function randomIntInc (low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

var str = '';

function generateShortString(shortest, longest, sameCharacterOccur) {
    var occ = {}, out = {};

    /***
    console.log('Input');
    console.log(shortest);
    console.log(longest);
    */
    console.log(str.charCodeAt('A'));
    console.log(randomIntInc(99, 799));
    console.log(Math.floor(Math.random() * (longest - shortest) + shortest));
    console.log(Random.integer(67, 200));
}


var shortAlias = generateShortString(config.min, config.max, config.sameCharMax);






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
        strlen: urlString.length,
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

delete obj.url_details['href'];

//console.log(obj);
