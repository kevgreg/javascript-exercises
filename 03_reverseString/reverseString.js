const reverseString = function (text) {
    let array = text.split("");
    let reversedText;
    let output ="";

    for (let i = array.length-1; i >= 0; i--) {
        output = output + array[i];
    }

    return output;
};

// Do not edit below this line
module.exports = reverseString;
