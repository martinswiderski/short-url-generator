var url,
    urlParse = require('url-parse');

url = function url() {

    /**
     * Blank URL template
     * @type {string}
     */
    this.template = '{"href":"","protocol":"","username":"","password":"","auth":"","host":"","hostname":"","port":"","pathname":"","query":"","hash":""}';

    /**
     * Takes URL if valid and breaks it down to pieces
     * @param string url
     * @returns {} processed URL if valid URL
     */
    this.process = function (string) {
        var processed = {};
        if (/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(string)) {
            processed = urlParse(string);
        } else {
            processed = JSON.parse(this.template);
        }
        delete processed['href'];
        return processed;
    };
};

module.exports = new url();
