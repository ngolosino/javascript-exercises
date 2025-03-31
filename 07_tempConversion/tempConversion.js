const convertToCelsius = function(temp) {
    let formula = Math.round((temp - 32) * (5/9) * 10) / 10;
    return formula;
};

const convertToFahrenheit = function(temp) {
    let formula = Math.round((temp * (9/5) + 32) * 10) / 10;
    return formula;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
