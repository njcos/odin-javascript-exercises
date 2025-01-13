let number = Math.floor(Math.random() * 1000);

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
repeatString('repeats the string a random amount of times', number)
// Do not edit below this line
module.exports = repeatString;
