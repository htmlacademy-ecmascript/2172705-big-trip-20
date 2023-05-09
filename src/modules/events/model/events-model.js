import { createDestinationDataset } from '../../../global/mock/destinations';
import { createEventTypeDataset } from '../../../global/mock/types';
import { createEventDataset } from '../../../global/mock/events';

const EVENT_COUNT = 4;

export default class EventsModel {
  #destinations = createDestinationDataset();
  #types = createEventTypeDataset();
  #events = createEventDataset(EVENT_COUNT, this.#types);

  get destinations() {
    return this.#destinations;
  }

  get types() {
    return this.#types;
  }

  get events() {
    return this.#events;
  }
}
