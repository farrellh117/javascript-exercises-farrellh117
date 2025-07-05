const reverseString = function(str) {
    let text = "";

    for(let i = str.length - 1; i >= 0; i--) {
        text += str[i];
    }
    return text;
};

reverseString("hello");
reverseString("hello there");
reverseString("123! abc! Hello, Odinite.");
reverseString("");

// Do not edit below this line
module.exports = reverseString;
