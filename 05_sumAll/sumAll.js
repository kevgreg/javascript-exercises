const sumAll = function (num1, num2) {
    let sum = 0;
    let smallerNumber;
    let largerNumber;

    if (num1 < 0 || num2 < 0 || typeof num1 != "number" || typeof num2 !="number") {
        return "ERROR";
    }
    else if (num1 < num2) {
        smallerNumber = num1;
        largerNumber = num2;
    }
    else {
        smallerNumber = num2;
        largerNumber = num1;
    }

    for (let i = smallerNumber; i <= largerNumber; i++) {
        sum = sum + i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
