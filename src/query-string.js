var Entities = require('html-entities').AllHtmlEntities,
    entities = new Entities();

var queryString = function queryString() {

    /**
     * Checks if passed string is not a HTML Entity already (which it well may be)
     * @param string String to check
     * @return {bool}
     */
    this.isHtmlEntityAlready = function (string) {

    },

    /**
     * Checks if passed string is potentially valid Query string
     * @param string String to check
     * @return {bool}
     */
    this.isValidQuerystring = function (string) {

        var diffQuestionmark = ((parseInt(string.length) - parseInt((string.replace('?', '')).length)) === 1),
            diffEqualOnce    = ((parseInt(string.length) - parseInt((string.replace('==', '')).length)) === 0),
            diffEqual        = ((parseInt(string.length) - parseInt((string.replace('=', '')).length)) > 0);

        return (diffEqual === true && diffQuestionmark === true && diffEqualOnce === true);
    },

    /**
     * Turns string into non-HTML Entity
     * @param string String to be non-HTML Entity
     * @return {bool}
     */
    this.deHtmlEntity = function (string) {

    },

    /**
     * Takes URL if valid and breaks it down to pieces in JSON
     * @param string String to be turned to JSON
     * @returns {object}
     */
     this.decomposeToJson = function (string) {

     };
};

module.exports = new queryString();
