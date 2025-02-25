const repeatString = function(text, repeat) {
    let result = "";
    for(i = 0; i < repeat; i++) {
        result += text;
    }
    return result;
};

repeatString("Hey", 3);

// Do not edit below this line
module.exports = repeatString;
