const repeatString = function(text, repeat) {
    if(repeat < 0) {
        return "ERROR";
    }

    let result = "";
    for(i = 0; i < repeat; i++) {
        result += text;
    }
    return result;
};

repeatString("hey", 3);
repeatString("hello", 10);
repeatString("hi", 1);
repeatString("bye", 0);
repeatString("goodbye", -1);
repeatString("hey", 0);
repeatString("", 10);

// Do not edit below this line
module.exports = repeatString;
