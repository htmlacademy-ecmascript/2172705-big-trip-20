import { getRandomInteger } from '../utils/common.js';
import { MIN_OFFER_PRICE_VALUE, MAX_OFFER_PRICE_VALUE, MIN_OFFER_COUNT, MAX_OFFER_COUNT, EVENT_TYPES } from './const.js';

const createOfferData = (id) => (
  {
    id: id + 1,
    title: `Some offer #${id + 1}`,
    price: getRandomInteger(MIN_OFFER_PRICE_VALUE, MAX_OFFER_PRICE_VALUE)
  }
);

const createOfferDataset = () => Array.from({ length: getRandomInteger(MIN_OFFER_COUNT, MAX_OFFER_COUNT) }, (_, index) => createOfferData(index));

const createEventTypeData = (id) => ({
  type: EVENT_TYPES[id],
  offers: createOfferDataset()
});

const createEventTypeDataset = () => Array.from({ length: EVENT_TYPES.length }, (_, index) => createEventTypeData(index));

export { createEventTypeDataset };
