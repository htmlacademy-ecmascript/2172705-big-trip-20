import { createEventTypeDataset } from '../mock/types.js';

export default class TypeOffersModel {
  #types = createEventTypeDataset();

  get types() {
    return this.#types;
  }
}
