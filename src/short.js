var short,
    config = require('./configuration');

short = function url() {

    this.pool = 'TUVGH1I8AC3J2VKLM460BN6O5PQ7RS9XYWZ';

    this.randomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },

    this.randomBool = function () {
        var num = this.randomNumber(0,35667);
        return (num % 2 == 0);
    },

    this.randomCharacter = function (pool) {
        if (!pool) {
            pool = this.pool;
            var ranges = {
                1: { from: 0, to: 9 },
                2: { from: 10, to: 17 },
                3: { from: 18, to: 25 },
                4: { from: 26, to: 31 },
                5: { from: 31, to: 34 }
            },
            range = ranges[this.randomNumber(1, 5)],
            num = this.randomNumber(range.from, range.to);
        } else {
            num = this.randomNumber(0, parseInt(pool.length)-1);
        }

        if ((typeof min) !== 'number') {
            return (this.randomBool() === false) ? pool[num] : pool[num].toLowerCase();
        }

        return pool[num];
    },

    this.generate = function (min) {
        if ((typeof min) !== 'number') {
            return 'ERROR';
        }

        var out = [], str, min = parseInt(min);

        for(var i = 0; i <min; i++) {
            str = this.randomCharacter();
            if (isNaN(str)) {
                str = (this.randomBool() === true) ? str.toLocaleLowerCase() : str;
            }
            out.push(str);
        }

        return out.join('');
    };

};

module.exports = new short();