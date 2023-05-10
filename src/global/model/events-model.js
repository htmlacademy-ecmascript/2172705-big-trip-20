import { createEventDataset } from '../mock/events.js';
import { EVENT_COUNT } from '../mock/const.js';

export default class EventsModel {
  #events = [];

  constructor({ typesModel}) {
    this.#events = createEventDataset(EVENT_COUNT, typesModel.types);
  }

  get events() {
    return this.#events;
  }
}
