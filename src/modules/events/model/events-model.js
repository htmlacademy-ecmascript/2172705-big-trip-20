import { createDestinationDataset, createEventTypeDataset, createEventDataset } from '../../mock/mock';

const EVENT_COUNT = 3;

export default class EventsModel {
  destinations = createDestinationDataset();
  offers = createEventTypeDataset();
  events = createEventDataset(EVENT_COUNT, this.offers);

  getDestinations() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;
  }

  getEvents() {
    return this.events;
  }
}
