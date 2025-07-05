const convertToCelsius = function(temperature) {
  temperature = (temperature - 32) * 5/9;
  let tempRound = Math.round(temperature * 10) / 10;

  return tempRound;
};

const convertToFahrenheit = function(temperature) {
  temperature = (9/5) * temperature + 32;
  let tempRound = Math.round(temperature * 10) / 10;

  return tempRound;
};

convertToCelsius(32);
convertToCelsius(100);
convertToCelsius(-100);
convertToFahrenheit(0);
convertToFahrenheit(73.2);
convertToFahrenheit(-10)

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
