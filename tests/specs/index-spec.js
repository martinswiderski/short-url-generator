var shortUrlGenerator = require(__dirname + '/../../index'),
    url               = 'https://username:passwd@www.bzz.co.uk:9000/new/session/search?client=ubuntu&channel=fs&q=twilio+sms&ie=utf-8&oe=utf-8&gfe_rd=cr&ei=X2ChVuKzHe_H8geE5aOQDw#hashTagAtTheEnd',
    out               = shortUrlGenerator(url),
    expected          = {
        url: 'https://username:passwd@www.bzz.co.uk:9000/new/session/search?client=ubuntu&channel=fs&q=twilio+sms&ie=utf-8&oe=utf-8&gfe_rd=cr&ei=X2ChVuKzHe_H8geE5aOQDw#hashTagAtTheEnd',
        strlen: 169,
        short: 'OABa6',
        md5: '3d066fad0ffd1284b0978097c63f804c',
        sha1: '21be6177d97b1abf123c60b662f2dc5815f13ce9',
        timestamp: 'Wed Feb 03 2016 23:32:50 GMT+0000 (GMT)',
        unix: 1454542370,
        is_url: true,
        url_details: {
            hash: '#hashTagAtTheEnd',
            query: '?client=ubuntu&channel=fs&q=twilio+sms&ie=utf-8&oe=utf-8&gfe_rd=cr&ei=X2ChVuKzHe_H8geE5aOQDw',
            protocol: 'https:',
            pathname: '/new/session/search',
            auth: 'username:passwd',
            host: 'www.bzz.co.uk:9000',
            port: '9000',
            hostname: 'www.bzz.co.uk',
            password: 'passwd',
            username: 'username',
            query_details: {
                client: 'ubuntu',
                channel: 'fs',
                q: 'twilio sms',
                ie: 'utf-8',
                oe: 'utf-8',
                gfe_rd: 'cr',
                ei: 'X2ChVuKzHe_H8geE5aOQDw'
            }
        },
        originator: {
            ip: 'not-implemented-yet'
        }
    };

describe("Implements", function () {
    it("simple interface to use", function () {
        expect(out.md5).toBe(expected.md5);
        expect(out.sha1).toBe(expected.sha1);
        expect(out.url_details.hash).toBe(expected.url_details.hash);
        expect(out.url_details.query_details['client']).toBe(expected.url_details.query_details['client']);
    });
});




