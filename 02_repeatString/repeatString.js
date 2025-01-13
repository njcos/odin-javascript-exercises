const repeatString = function(string, num) {
    let hey = "";
    for (let i = 0; i < num; i++) {
        hey += string 
    }
    return hey;
};

repeatString("hey", 3)
repeatString('hello', 10)
repeatString('hi', 1)

// Do not edit below this line
module.exports = repeatString;
