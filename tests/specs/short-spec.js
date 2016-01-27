
var short = require('./../../src/short');


/**
 * Random number
 */
var randomNum = short.randomNumber(30, 55);
describe("Short class generates", function () {
    it("random value within range", function () {
        expect(randomNum < 56 && randomNum > 29).toBe(true);
    });
});

/**
 * Random bool
 */
var randomBool = short.randomBool();
describe("Short class generates", function () {
    it("random BOOL value", function () {
        expect(randomBool === true || randomBool === false).toBe(true);
    });
});

/**
 * Random alphanumeric
 */
var randomAlphanum = short.randomCharacter();
describe("Short class generates", function () {
    it("random alphanumeric", function () {
        expect(isNaN(randomAlphanum) || parseInt(randomAlphanum)+'' === randomAlphanum).toBe(true);
    });
});

console.log(short.generate(3));

