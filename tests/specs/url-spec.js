var url = require(__dirname + "/../../src/url");

describe("Can adopt and reset vars in flight", function () {
    it("using url.reset method", function () {

        url.resetConfig(100, 200, 5);

        expect(url.min).toBe(100);
        expect(url.max).toBe(200);
        expect(url.sameChar).toBe(5);
    });
});
