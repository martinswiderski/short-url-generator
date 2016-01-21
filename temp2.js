function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomCharacter () {
    var pool   = 'TUVGH1I8AC3J2VKLM460BN6O5PQ7RS9XYWZ',
        rand   = randomNumber(0, 34),
        even   = isEven(rand),
        number = !isNaN(pool[rand]);
        lcase  = (number !== true && isEven(randomNumber(0, 999)));

        console.log(lcase);
        console.log(even);
        console.log(number);

        letter = (!isNaN(pool[rand]) && isEven(rand))
                 ? pool[rand].toLowerCase() : pool[rand];
    return  letter;
}

function isEven(value) {
    return value % 2 === 0;
}

console.log(randomCharacter());
console.log(isEven(randomNumber(0, 5)));