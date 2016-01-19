var url = require(__dirname + "/../../src/url");

var wrong = url.process(123);

console.log(wrong.url_details);

/***
xdescribe("Picks uup only URL strings", function () {
    it("for processing", function () {
        expect(wrong.url_details.protocol).toBe('');
        expect(wrong.url_details.username).toBe('');
        expect(wrong.url_details.password).toBe('');
        expect(wrong.url_details.auth).toBe('');
        expect(wrong.url_details.host).toBe('');
        expect(wrong.url_details.hostname).toBe('');
        expect(wrong.url_details.port).toBe('');
        expect(wrong.url_details.pathname).toBe('');
        expect(wrong.url_details.query).toBe('');
        expect(wrong.url_details.hash).toBe('');
    });
});

var valid = url.details('http://stackoverflow.com:8080/questions/13335873/how-to-check-if-a-variable-is-defined-or-not?query=1#hashOne');
//console.log(valid);
***/








