const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const capitalizeWord = (word) => word[0].toUpperCase() + word.slice(1);

const updateItem = (items, update) => items.map((item) => item.id === update.id ? update : item);

export { getRandomArrayElement, getRandomInteger, capitalizeWord, updateItem };
