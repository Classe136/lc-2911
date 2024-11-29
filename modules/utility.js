function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEven(num) {
  return num % 2 === 0;
}

const owner = {
  name: "Clelia",
  surname: "Fradella",
};

module.exports = {
  getRandomInteger,
  isEven,
  owner,
};
