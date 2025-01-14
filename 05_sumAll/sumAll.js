const sumAll = function(num1, num2) {
    let newNum = 0;
    let error = "ERROR"

    if ((num1 % 1 == 0) && (num2 % 1 == 0) && (num1 > 0) && (num2 > 0) && (typeof num1 === "number") && (typeof num2 === 'number')) {
        if (num1 < num2) {
                for(let i = num1; i <= num2; i++)
                    {
                        newNum+=i
                    
                    }
            } else {
                for(let i = num1; i >= num2; i--)
                    {
                        newNum+=i
                        
                    }
    
            }
        } else {
            return error;
        }

    
    console.log(newNum);
    return newNum;
};

sumAll(1,4)
sumAll(1, 4000)
sumAll(123,1)
sumAll(-3, 4)
sumAll("10", 1)
sumAll(10, [90, 1])

// Do not edit below this line
module.exports = sumAll;
