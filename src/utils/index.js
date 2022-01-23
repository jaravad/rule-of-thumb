export const capitalizeFirstLetter = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

export const getImage = require.context('../assets/img/characters', true);
