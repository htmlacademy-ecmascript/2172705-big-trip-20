const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getCapitalizeWord = (word) => word[0].toUpperCase() + word.slice(1);

export { getRandomArrayElement, getRandomInteger, getCapitalizeWord };
