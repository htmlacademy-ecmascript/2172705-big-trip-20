import { createDestinationDataset } from '../mock/destinations.js';

export default class DestinationsModel {
  #destinations = createDestinationDataset();

  get destinations() {
    return this.#destinations;
  }
}
