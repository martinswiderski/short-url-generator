
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
 * Distribution control (making sure the "random") is not skewed and
 * lies between 38% - 65% each way
 */
var boolVal = null, distribBool = {'t': 0, 'f': 0}, boolDistribution = null;
for(var i = 0; i <100; i++) {
    boolVal = short.randomBool();
    if (boolVal === true) {
        distribBool.t++;
    } else {
        distribBool.f++;
    }
}
describe("Values distribution", function () {
    it("FALSE is within 38-65%", function () {
        boolDistribution = (distribBool.f < 65 || distribBool.f > 38 === distribBool.t); // false 38-65%
        expect(boolDistribution).toBe(true);
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

var randomFromPool = short.randomCharacter('12AB');
describe("Short if given a pool of chars generates", function () {
    it("random alphanumeric from within the range", function () {
        var expectedFromPool = {
            '1': true,
            '2': true,
            'A': true,
            'B': true,
        };
        expect(expectedFromPool[randomFromPool]).toBe(true);
    });
});

/**
 * Distribution control (making sure the "random") is not skewed and
 * numbers don't exceed 30%
 */
var alphaNumDistr = {a: 0, n: 0}, alphaDistribution;
for(var i = 0; i <100; i++) {
    var alphanumVal = short.randomCharacter();
    if (parseInt(alphanumVal)+'' === alphanumVal) {
        alphaNumDistr.n++;
    } else {
        alphaNumDistr.a++;
    }
}
describe("Values distribution", function () {
    it("Numbers within 25-45%", function () {
        alphaDistribution = (alphaNumDistr.n < 45 && alphaNumDistr.n > 25); // 25-45% of numerics
        expect(boolDistribution).toBe(true);
    });
});

/**
 * If length of the short string is provided non-integer
 * a string 'ERROR' is returned.
 */
describe("Length of short string provided incorectly result in error message", function () {
    it("Non INT", function () {
        expect(short.generate('ABC')).toBe('ERROR');
    });
});

/**
 * Correct (INT) value generates random string of given length
 */
describe("Length of short string provided incorectly result in error message", function () {
    it("Non INT", function () {
        var randStr1 = short.generate(4);
        var randStr2 = short.generate(4.5); // double is ignored
        expect(randStr1.length).toBe(4);
        expect(randStr2.length).toBe(4);
    });
});

