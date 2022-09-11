const removeFromArray = function (array, ...args) {
    for (let i = 0; i < array.length; i++) {
        for (arg of args) {
            if (array[i] == arg && typeof array[i] == typeof arg) {
                array.splice(i, 1);
                i--;
            }
        }
    }
    console.log(array)
    return array;
}
// Do not edit below this line
module.exports = removeFromArray;
