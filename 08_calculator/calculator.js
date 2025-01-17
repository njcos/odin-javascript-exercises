const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
  return a-b
	
};

const sum = function(array) {

   const original = 0
   const total = array.reduce((a, b) => a + b, original)
   return total

};


const multiply = function(array) {
  const original = 1
  const total = array.reduce((a,b) => a*b, original)
  return total
};


const power = function(a, b) {
  return Math.pow(a,b)
	
};

const factorial = function(num) {
  if(num === 0 || num === 1) {
    return 1
  }

  for(let i = num - 1; i >= 1; i--){
    num = num * i
  }
  console.log(num)
  return num

	
};

factorial(5)

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
