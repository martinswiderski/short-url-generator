var url = require(__dirname + "/../../src/url");

var wrong = url.details(123);

describe("Picks uup only URL strings", function () {
    it("for processing", function () {
        expect(wrong.protocol).toBe('');
        expect(wrong.username).toBe('');
        expect(wrong.password).toBe('');
        expect(wrong.auth).toBe('');
        expect(wrong.host).toBe('');
        expect(wrong.hostname).toBe('');
        expect(wrong.port).toBe('');
        expect(wrong.pathname).toBe('');
        expect(wrong.query).toBe('');
        expect(wrong.hash).toBe('');
    });
});

var valid = url.details('http://stackoverflow.com:8080/questions/13335873/how-to-check-if-a-variable-is-defined-or-not?query=1#hashOne');
console.log(valid);
describe("Valid URLs are broken to pieces", function () {
    it("to smallest details", function () {
        expect(valid.hash).toBe('#hashOne');
        expect(valid.query).toBe('?query=1');
        expect(valid.protocol).toBe('http:');
        expect(valid.pathname).toBe('/questions/13335873/how-to-check-if-a-variable-is-defined-or-not');
        expect(valid.auth).toBe('');
        expect(valid.host).toBe('stackoverflow.com:8080');
        expect(valid.port).toBe('8080');
        expect(valid.hostname).toBe('stackoverflow.com');
        expect(valid.password).toBe('');
        expect(valid.username).toBe('');
    });
});

console.log(url.process('http://stackoverflow.com:8080/questions/13335873/how-to-check-if-a-variable-is-defined-or-not?query=1#hashOne'));








