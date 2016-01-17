process.env['SHORT_URL_MOCK']      = 'A';
process.env['SHORT_URL_MIN']       = 'B';
process.env['SHORT_URL_MAX']       = 'C';
process.env['SAME_CHAR_MAX']       = 'D';
process.env['SHORT_URL_PARSE_SRC'] = 'E';

var configuration = require(__dirname + "/../../src/configuration");

describe("Reads from env vars", function () {
    it("regardless how they are sey", function () {
        expect(configuration.get("mock")).toBe('A');
        expect(configuration.get("min")).toBe('B');
        expect(configuration.get("max")).toBe('C');
        expect(configuration.get("sameCharMax")).toBe('D');
        expect(configuration.get("parseUrl")).toBe('E');
    });
});
