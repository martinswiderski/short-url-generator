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

module.exports = {
    mock: readFromEnvVars('SHORT_URL_MOCK', 'true'),
    min: readFromEnvVars('SHORT_URL_MIN', '3'),
    max: readFromEnvVars('SHORT_URL_MAX', '5'),
    parseUrl: readFromEnvVars('SHORT_URL_PARSE_SRC', 'true'),
    messages: {}
};

