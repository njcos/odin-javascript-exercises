const convertToCelsius = function(far) {
    let convert = ((far - 32)*5/9)
    let rounded = parseFloat(convert.toFixed(1))
    console.log(rounded)
    return rounded


};

const convertToFahrenheit = function(cel) {
  let convert = (cel * 9/5 + 32)
  let rounded = parseFloat(convert.toFixed(1))
      console.log(rounded);
      return rounded
      
};


convertToCelsius(32)
convertToFahrenheit(0)
convertToCelsius(100)
convertToFahrenheit(73.2)
convertToCelsius(-100)
convertToFahrenheit(-10)
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
