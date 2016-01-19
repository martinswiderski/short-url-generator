process.env['SHORT_URL_MOCK']      = 'A';
process.env['SHORT_URL_MIN']       = 'B';
process.env['SAME_CHAR_MAX']       = 'C';
process.env['SHORT_URL_PARSE_SRC'] = 'D';

var configuration = require(__dirname + "/../../src/configuration");

describe("Reads from env vars", function () {
    it("regardless how they are sey", function () {
        expect(configuration.get("mock")).toBe('A');
        expect(configuration.get("min")).toBe('B');
        expect(configuration.get("sameCharMax")).toBe('C');
        expect(configuration.get("parseUrl")).toBe('D');
    });
});

configuration.set('me', '1');

describe("Can be set within application", function () {
    it("for reuse", function () {
        expect(configuration.get("me")).toBe('1');
    });
});
