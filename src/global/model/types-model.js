import { createEventTypeDataset } from '../mock/types.js';

export default class TypesModel {
  #types = createEventTypeDataset();

  get types() {
    return this.#types;
  }
}
