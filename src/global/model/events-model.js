import { createEventDataset } from '../mock/events.js';
import { EVENT_COUNT } from '../mock/const.js';

export default class EventsModel {
  #events = [];

  constructor({ typeOffersModel }) {
    this.#events = createEventDataset(EVENT_COUNT, typeOffersModel.types);
  }

  get events() {
    return this.#events;
  }
}
