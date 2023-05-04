import { createDestinationDataset, createEventTypeDataset, createEventDataset } from '../../mock/mock.js';

const EVENT_COUNT = 4;

export default class EventsModel {
  destinations = createDestinationDataset();
  types = createEventTypeDataset();
  events = createEventDataset(EVENT_COUNT, this.types);

  getDestinations() {
    return this.destinations;
  }

  getTypes() {
    return this.types;
  }

  getEvents() {
    return this.events;
  }
}
