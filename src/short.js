var short,
    config = require('./configuration');

short = function url() {

    this.poll = 'TUVGH1I8AC3J2VKLM460BN6O5PQ7RS9XYWZ';

    this.randomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },

    this.randomBool = function () {
        var num = this.randomNumber(0,35667);
        return (num % 2 == 0);
    },

    this.randomCharacter = function (pool) {
        if (!pool) {
            pool = this.poll;
        }
        var ranges = {
            '1': { from: 0, to: 9 },
            '2': { from: 10, to: 17 },
            '3': { from: 18, to: 25 },
            '4': { from: 26, to: 31 },
            '5': { from: 31, to: 34 }
        };
        var range = ranges[this.randomNumber(1, 3)];
        var num = this.randomNumber(range.from, range.to);
        return (this.randomBool() === false) ? pool[num] : pool[num].toLowerCase();
    },

    this.generate = function (min) {

        var out = [], recent = '';

        for (var i = 0; i < parseInt(min); i++) {
            var anew   = this.randomBool() === true ? this.randomCharacter() : this.randomNumber();
            if (anew === recent) {
                var anew   = this.randomBool() === true ? this.randomCharacter() : this.randomNumber();
            }
            var recent = anew;
            if ((parseInt(anew)+'') === (anew+'')) {
                out.push(anew);
            } else {
                if (this.randomBool() === true) {
                    anew = (new String(anew)).toLocaleLowerCase();
                }
                out.push(anew);
            }
        }
        return out.join('');
    },

    this.shuffle = function (min) {
        var out = [];
        for (var i = 0; i < min; i++) {
            out.push(this.randomCharacter());
        }
        return out.join('').split("").reverse().join("");
    };
};

module.exports = new short();