
var queryString          = require(__dirname + "/../../src/query-string"),
    goodString           = '?client=ubuntu&channel=fs&q=twilio+sms&ie=utf-8&oe=utf-8&gfe_rd=cr&ei=X2ChVuKzHe_H8geE5aOQDw',
    goodWQuoteString     = "?client=ubuntu's&channel=fs&ei=X2ChVuKzHe_H8geE5aOQDw",
    goodWDblQuoteString  = "?client=\"ubuntu\"&channel=fs&ei=X2ChVuKzHe_H8geE5aOQDw",
    emptyString          = '',
    badString            = 'ANSHGDHDHJGJHDLOPKJSLKJLKJ121392321-21232132-32?2333333-203-20-p-&',
    poorString           = '?client=ubu&ntu&channel===fs&q=twilio+sms&ie=utf-8&oe=utf-8&gfe_rd=cr&ei=X2ChVuKzHe_H8geE5aOQDw';


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

describe("Reads query string", function () {
    it("correct query string produces valid JSON", function () {
        expect(JSON.stringify(queryString.decomposeToJson(goodString))).toBe('{"client":"ubuntu","channel":"fs","q":"twilio sms","ie":"utf-8","oe":"utf-8","gfe_rd":"cr","ei":"X2ChVuKzHe_H8geE5aOQDw"}');
    });
    it("correct w. single quotes query string produces valid JSON", function () {
        expect(JSON.stringify(queryString.decomposeToJson(goodWQuoteString))).toBe('{"client":"ubuntu\'s","channel":"fs","ei":"X2ChVuKzHe_H8geE5aOQDw"}');
    });
    it("correct w. double quotes query string produces valid JSON", function () {
        expect(JSON.stringify(queryString.decomposeToJson(goodWDblQuoteString))).toBe('{"client":"\\\"ubuntu\\\"","channel":"fs","ei":"X2ChVuKzHe_H8geE5aOQDw"}');
    });
    it("empty query string produces empty JSON", function () {
        expect(JSON.stringify(queryString.decomposeToJson(emptyString))).toBe('{}');
    });
    it("bad query string produces empty JSON", function () {
        expect(JSON.stringify(queryString.decomposeToJson(badString))).toBe('{}');
    });
    it("malformed query string produces empty JSON", function () {
        expect(JSON.stringify(queryString.decomposeToJson(poorString))).toBe('{}');
    });
});

