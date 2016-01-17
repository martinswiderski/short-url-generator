var url = function url() {

    /**
     * Max length of generated short string
     * @type {number}
     */
    this.max = 5;

    /**
     * Minimum length of generated short string
     * @type {number}
     */
    this.min = 3;

    /**
     * Number of the same numbers or letters in generated string
     * @type {number}
     */
    this.sameChar = 2;

    this.resetConfig = function (min, max, numSameChars) {

        var setValues = {
            min: min,
            max: max,
            sameChar: numSameChars
        };

        for (var k in setValues) {
            if (!isNaN(setValues[k])) {
                this[k] = parseInt(setValues[k]);
            }
        }
    };


};

module.exports = new url();
