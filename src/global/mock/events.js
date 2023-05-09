import { getRandomInteger, getRandomArrayElement } from '../utils/common.js';
import { getRandomDate } from '../utils/date.js';
import { EVENT_TYPES, MIN_EVENT_BASE_PRICE, MAX_EVENT_BASE_PRICE, DESTINATION_NAMES } from './const.js';

const getOfferCount = (type, eventTypeDataset) => eventTypeDataset[EVENT_TYPES.findIndex((eventType) => eventType === type)].offers.length;

const createSelectedOffersDataset = (type, eventTypeDataset) => {
  const offerCount = getOfferCount(type, eventTypeDataset);
  const offerIdArray = Array.from({ length: getRandomInteger(0, offerCount) }, () => getRandomInteger(1, offerCount));

  return [...new Set(offerIdArray)];
};

const createEventData = (id, eventTypeDataset) => {
  const type = getRandomArrayElement(EVENT_TYPES);

  return {
    id: id + 1,
    basePrice: getRandomInteger(MIN_EVENT_BASE_PRICE, MAX_EVENT_BASE_PRICE),
    dateFrom: getRandomDate(true),
    dateTo: getRandomDate(false),
    destination: getRandomInteger(1, DESTINATION_NAMES.length),
    isFavorite: Boolean(getRandomInteger(0, 1)),
    offers: createSelectedOffersDataset(type, eventTypeDataset),
    type: type
  };
};

const createEventDataset = (eventCount, eventTypeDataset) => Array.from({ length: eventCount }, (_, index) => createEventData(index, eventTypeDataset));

export { createEventDataset };
