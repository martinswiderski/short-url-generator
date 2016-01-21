var url = require(__dirname + "/../../src/url");


/***
 * First breaking down URLs to components
 * Case 1 non-URL
 */

var nonUrl = url.details(123);

describe("Picks up only URL strings", function () {
    it("for processing", function () {
        expect(nonUrl.protocol).toBe('');
        expect(nonUrl.username).toBe('');
        expect(nonUrl.password).toBe('');
        expect(nonUrl.auth).toBe('');
        expect(nonUrl.host).toBe('');
        expect(nonUrl.hostname).toBe('');
        expect(nonUrl.port).toBe('');
        expect(nonUrl.pathname).toBe('');
        expect(nonUrl.query).toBe('');
        expect(nonUrl.hash).toBe('');
    });
});

/**
 * Case 2 - URL proper
 */

var urlAddress = 'https://username:passwd@www.bzz.co.uk:9000/new/session/search?client=ubuntu&channel=fs&q=twilio+sms&ie=utf-8&oe=utf-8&gfe_rd=cr&ei=X2ChVuKzHe_H8geE5aOQDw#hashTagAtTheEnd';

var expected = {
    hash: '#hashTagAtTheEnd',
    query: '?client=ubuntu&channel=fs&q=twilio+sms&ie=utf-8&oe=utf-8&gfe_rd=cr&ei=X2ChVuKzHe_H8geE5aOQDw',
    protocol: 'https:',
    pathname: '/new/session/search',
    auth: 'username:passwd',
    host: 'www.bzz.co.uk:9000',
    port: '9000',
    hostname: 'www.bzz.co.uk',
    password: 'passwd',
    username: 'username'
}

var correctUrl = url.details(urlAddress);

describe("Valid URL strings", function () {
    it("are correctly resolved", function () {
        expect(correctUrl.protocol).toBe(expected.protocol);
        expect(correctUrl.username).toBe(expected.username);
        expect(correctUrl.password).toBe(expected.password);
        expect(correctUrl.auth).toBe(expected.auth);
        expect(correctUrl.host).toBe(expected.host);
        expect(correctUrl.hostname).toBe(expected.hostname);
        expect(correctUrl.port).toBe(expected.port);
        expect(correctUrl.pathname).toBe(expected.pathname);
        expect(correctUrl.query).toBe(expected.query);
        expect(correctUrl.hash).toBe(expected.hash);
    });
});






