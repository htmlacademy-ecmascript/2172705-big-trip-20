const sortByAsc = (propertyName) => (first, second) => first[propertyName] - second[propertyName];

const sortByDesc = (propertyName) => (first, second) => second[propertyName] - first[propertyName];

const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const capitalizeWord = (word) => word[0].toUpperCase() + word.slice(1);

const updateItem = (items, update) => items.map((item) => item.id === update.id ? update : item);

export { sortByAsc, sortByDesc, getRandomArrayElement, getRandomInteger, capitalizeWord, updateItem };
