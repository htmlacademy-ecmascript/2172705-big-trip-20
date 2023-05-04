import dayjs from 'dayjs';
import { getRandomArrayElement, getRandomInteger } from '../../global/utils.js';

const MIN_DEST_DESCR_RANDOM_VALUE = 1;
const MAX_DEST_DESCR_RANDOM_VALUE = 5;
const MIN_PICTURE_COUNT = 0;
const MAX_PICTURE_COUNT = 5;
const MIN_SRC_PICTURE_RANDOM_VALUE = 1;
const MAX_SRC_PICTURE_RANDOM_VALUE = 9;
const MIN_OFFER_COUNT = 0;
const MAX_OFFER_COUNT = 8;
const MIN_OFFER_PRICE_VALUE = 200;
const MAX_OFFER_PRICE_VALUE = 2000;
const MIN_EVENT_BASE_PRICE = 1000;
const MAX_EVENT_BASE_PRICE = 5000;

const destinationDescriptions = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.'
];

const destinationNames = [
  'Moscow',
  'Paris',
  'London',
  'Pskov',
  'Omsk'
];

const eventTypes = [
  'taxi',
  'bus',
  'train',
  'ship',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant'
];

//! Пункт назначения
//! ------------------------------------------------------

const createDestinationDescription = (descriptions) => {
  const descriptionArray = Array.from({ length: getRandomInteger(MIN_DEST_DESCR_RANDOM_VALUE, MAX_DEST_DESCR_RANDOM_VALUE) }, () => getRandomArrayElement(descriptions));

  return [...new Set(descriptionArray)].join(' ');
};

const createPictureData = (id) => (
  {
    src: `https://loremflickr.com/248/152?random=${getRandomInteger(MIN_SRC_PICTURE_RANDOM_VALUE, MAX_SRC_PICTURE_RANDOM_VALUE)}`,
    description: `Some picture description #${id + 1}`
  }
);

const createPictureDataset = () => Array.from({ length: getRandomInteger(MIN_PICTURE_COUNT, MAX_PICTURE_COUNT) }, (_, index) => createPictureData(index));

const createDestinationData = (id) => ({
  id: id + 1,
  description: createDestinationDescription(destinationDescriptions),
  name: destinationNames[id],
  pictures: createPictureDataset()
});

const createDestinationDataset = () => Array.from({ length: destinationNames.length }, (_, index) => createDestinationData(index));

//! Опции
//! ------------------------------------------------------

const createOfferData = (id) => (
  {
    id: id + 1,
    title: `Some offer #${id + 1}`,
    price: getRandomInteger(MIN_OFFER_PRICE_VALUE, MAX_OFFER_PRICE_VALUE)
  }
);

const createOfferDataset = () => Array.from({ length: getRandomInteger(MIN_OFFER_COUNT, MAX_OFFER_COUNT) }, (_, index) => createOfferData(index));

const createEventTypeData = (id) => ({
  type: eventTypes[id],
  offers: createOfferDataset()
});

const createEventTypeDataset = () => Array.from({ length: eventTypes.length }, (_, index) => createEventTypeData(index));

//! Точки назначения
//! ------------------------------------------------------

const getOfferCount = (type, eventTypeDataset) => eventTypeDataset[eventTypes.findIndex((eventType) => eventType === type)].offers.length;

const createSelectedOffersDataset = (type, eventTypeDataset) => {
  const offerCount = getOfferCount(type, eventTypeDataset);
  const offerIdArray = Array.from({ length: getRandomInteger(0, offerCount) }, () => getRandomInteger(1, offerCount));

  return [...new Set(offerIdArray)];
};

const getRandomDate = (isDateFrom) => {
  if (isDateFrom) {
    return dayjs().subtract(getRandomInteger(1, 5), 'd').subtract(getRandomInteger(1, 23), 'h').subtract(getRandomInteger(1, 59), 'm').subtract(getRandomInteger(1, 59), 's');
  }

  return dayjs().add(getRandomInteger(1, 5), 'd').add(getRandomInteger(1, 23), 'h').add(getRandomInteger(1, 59), 'm').add(getRandomInteger(1, 59), 's');
};

const createEventData = (id, eventTypeDataset) => {
  const type = getRandomArrayElement(eventTypes);

  return {
    id: id + 1,
    basePrice: getRandomInteger(MIN_EVENT_BASE_PRICE, MAX_EVENT_BASE_PRICE),
    dateFrom: getRandomDate(true),
    dateTo: getRandomDate(false),
    destination: getRandomInteger(1, destinationNames.length),
    isFavorite: Boolean(getRandomInteger(0, 1)),
    offers: createSelectedOffersDataset(type, eventTypeDataset),
    type: type
  };
};

const createEventDataset = (eventCount, eventTypeDataset) => Array.from({ length: eventCount }, (_, index) => createEventData(index, eventTypeDataset));

export { createDestinationDataset, createEventTypeDataset, createEventDataset };
