const reverseString = function(string) {
    let array = [];
    let reverseArray = [];
    let newString = '';

    for (char of string) {
        array.push(char)
    }
    reverseArray = array.reverse();
    
    for (char of array) {
        newString +=char
    }
    return newString;
};
reverseString("hello")
reverseString("hello there")
reverseString('123! abc! Hello, Odinite.')
// Do not edit below this line
module.exports = reverseString;
