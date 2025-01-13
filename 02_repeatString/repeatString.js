const repeatString = function(string, num) {
    let hey = "";
    if (num >= 0) {

    for (let i = 0; i < num; i++) {
        hey += string 
    }
    } else {
        hey = "ERROR"
    } 
    return hey;

};

repeatString("hey", 3)
repeatString('hello', 10)
repeatString('hi', 1)
repeatString('bye', 0)
repeatString('goodbye', -1)
// Do not edit below this line
module.exports = repeatString;
