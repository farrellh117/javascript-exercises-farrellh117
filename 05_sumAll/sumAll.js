const sumAll = function(num, iterate) {
    let start = Math.min(num, iterate);
    let end = Math.max(num, iterate);
    let sum = 0;

    if(num < 0  || iterate < 0) {
        return "ERROR";
    }

    if(!Number.isInteger(num) || !Number.isInteger(iterate)) {
        return "ERROR";
    }

    if(typeof num !== "number" || typeof iterate !== "number") {
        return "ERROR";
    }

    for(let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

sumAll(2, 4);
sumAll(1, 4000);
sumAll(123, 1);
sumAll(-10, 4);
sumAll(2.5, 4);
sumAll(10, "90");
sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;
