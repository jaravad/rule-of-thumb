export const capitalizeFirstLetter = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

export const roundToFixed = (input, digits = 1) => {
  var rounded = Math.pow(10, digits);
  return (Math.round(input * rounded) / rounded).toFixed(digits);
};

export const getImage = require.context('../assets/img/characters', true);
