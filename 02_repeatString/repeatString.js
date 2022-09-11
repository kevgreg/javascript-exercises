const repeatString = function (text, amountofRepeats) {
    let output = "";
    let i = 0;

    if(amountofRepeats < 0){
        return "ERROR"
    }

    while (i <= amountofRepeats - 1) {
        output += text;
        i++;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
