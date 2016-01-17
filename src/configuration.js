/**
 * Reads from EnvVars with fall-back value
 * @param string key   Key to read value of from environment vars
 * @param string deflt Fall-back value if environment var is not set
 * @returns mixed
 */
function readFromEnvVars(key, deflt) {
    'use strict';
    if (process.env[key]) {
        return process.env[key];
    } else {
        if (deflt !== null) {
            return deflt;
        }
        console.error('Required env var %s is required', key);
        throw ('missing required env var: ' + key);
    }
}

var configuration = function configuration() {

    this.storage = {
        mock: readFromEnvVars('SHORT_URL_MOCK', 'true'),
        min: readFromEnvVars('SHORT_URL_MIN', '3'),
        max: readFromEnvVars('SHORT_URL_MAX', '5'),
        sameCharMax: readFromEnvVars('SAME_CHAR_MAX', '2'),
        parseUrl: readFromEnvVars('SHORT_URL_PARSE_SRC', 'true'),
        messages: {}
    },

    this.get = function (key) {
        return (this.storage[key]) ? this.storage[key] : null;
    };
};

module.exports = new configuration();

