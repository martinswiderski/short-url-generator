
var queryString = require(__dirname + "/../../src/query-string"),
    goodString  = '?client=ubuntu&channel=fs&q=twilio+sms&ie=utf-8&oe=utf-8&gfe_rd=cr&ei=X2ChVuKzHe_H8geE5aOQDw',
    goodJSON    = {},
    emptyString = '',
    emptyJSON   = {},
    badString   = 'ANSHGDHDHJGJHDLOPKJSLKJLKJ121392321-21232132-32?2333333-203-20-p-&',
    badJSON     = {},
    poorString  = '?client=ubu&ntu&channel===fs&q=twilio+sms&ie=utf-8&oe=utf-8&gfe_rd=cr&ei=X2ChVuKzHe_H8geE5aOQDw',
    poorJSON    = {};


describe("Checks validity of the query string", function () {
    it("correct query string returns TRUE", function () {
        expect(queryString.isValidQuerystring(goodString)).toBe(true);
    });
    it("empty query string returns FALSE", function () {
        expect(queryString.isValidQuerystring(emptyString)).toBe(false);
    });
    it("bad query string returns FALSE", function () {
        expect(queryString.isValidQuerystring(badString)).toBe(false);
    });
    it("malformed query string returns FALSE", function () {
        expect(queryString.isValidQuerystring(poorString)).toBe(false);
    });
});

xdescribe("Reads query string", function () {
    it("correct query string produces valid JSON", function () {
        expect(true).toBe(true);
    });
    it("empty query string produces empty JSON", function () {
        expect(true).toBe(true);
    });
    it("bad query string produces empty JSON", function () {
        expect(true).toBe(true);
    });
    it("malformed query string produces empty JSON", function () {
        expect(true).toBe(true);
    });
});
