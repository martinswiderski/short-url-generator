process.env['SHORT_URL_MOCK']      = 'A';
process.env['SHORT_URL_MIN']       = 'B';
process.env['SHORT_URL_MAX']       = 'C';
process.env['SHORT_URL_PARSE_SRC'] = 'D';

var configuration = require(__dirname + "/../../src/configuration");

describe("Reads from env vars", function () {
    it("regardless how they are sey", function () {
        expect(configuration.hostname).toBe('A');
        expect(configuration.protocol).toBe('B');
        expect(configuration.path).toBe('C');
        expect(configuration.token).toBe('D');
    });
});
