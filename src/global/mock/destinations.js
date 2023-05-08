import { getRandomInteger, getRandomArrayElement } from '../utils/common.js';
import {
  MIN_DEST_DESCR_RANDOM_VALUE,
  MAX_DEST_DESCR_RANDOM_VALUE,
  MIN_SRC_PICTURE_RANDOM_VALUE,
  MAX_SRC_PICTURE_RANDOM_VALUE,
  MIN_PICTURE_COUNT,
  MAX_PICTURE_COUNT,
  DESTINATION_DESCRIPTIONS,
  DESTINATION_NAMES
} from './const.js';

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
  description: createDestinationDescription(DESTINATION_DESCRIPTIONS),
  name: DESTINATION_NAMES[id],
  pictures: createPictureDataset()
});

const createDestinationDataset = () => Array.from({ length: DESTINATION_NAMES.length }, (_, index) => createDestinationData(index));

export { createDestinationDataset };
