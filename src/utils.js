function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getRandomElementFromArray(array) {
  const index = generateRandomNumberBetween(0, array.length - 1);
  return array[index];
}

function generateRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}