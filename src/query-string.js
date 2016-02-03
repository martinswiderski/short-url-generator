
var queryString,
    querystringProc = require('querystring');

queryString = function queryString() {

    /**
     * Checks if passed string is potentially valid Query string
     * @param string String to check
     * @return {bool}
     */
    this.isValidQuerystring = function (string) {

        var firstQuestion    = string[0] === '?',
            diffQuestionmark = ((parseInt(string.length) - parseInt((string.replace('?', '')).length)) === 1),
            diffEqualOnce    = ((parseInt(string.length) - parseInt((string.replace('==', '')).length)) === 0),
            diffEqual        = ((parseInt(string.length) - parseInt((string.replace('=', '')).length)) > 0);

        return (firstQuestion === true && diffEqual === true && diffQuestionmark === true && diffEqualOnce === true);
    },

    /**
     * Takes URL if valid and breaks it down to pieces in JSON
     * @param string String to be turned to JSON
     * @returns {object}
     */
     this.decomposeToJson = function (string) {
        if (this.isValidQuerystring(string) === true) {
            var obj = querystringProc.decode(string.replace('?', ''));
            return obj;
        }
        return {};
     };
};

module.exports = new queryString();
