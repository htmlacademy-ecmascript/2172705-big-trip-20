import Observable from '../framework/observable.js';
import { createEventDataset } from '../mock/events.js';
import { EVENT_COUNT } from '../mock/const.js';

export default class EventsModel extends Observable {
  #events = [];

  constructor({ typeOffersModel }) {
    super();
    this.#events = createEventDataset(EVENT_COUNT, typeOffersModel.types);
  }

  get events() {
    return this.#events;
  }

  updateEvent(updateType, updatedEvent) {
    const updatedEventIndex = this.#events.findIndex((event) => event.id === updatedEvent.id);

    if (updatedEventIndex === -1) {
      throw new Error('Can\'t update unexisting task');
    }

    this.#events = [
      ...this.#events.slice(0, updatedEventIndex),
      updatedEvent,
      ...this.#events.slice(updatedEventIndex + 1)
    ];

    this._notify(updateType, updatedEvent);
  }

  addEvent(updateType, updatedEvent) {
    this.#events = [
      updatedEvent,
      ...this.#events
    ];

    this._notify(updateType, updatedEvent);
  }

  deleteEvent(updateType, updatedEvent) {
    const updatedEventIndex = this.#events.findIndex((event) => event.id === updatedEvent.id);

    if (updatedEventIndex === -1) {
      throw new Error('Can\'t delete unexisting task');
    }

    this.#events = [
      ...this.#events.slice(0, updatedEventIndex),
      ...this.#events.slice(updatedEventIndex + 1)
    ];

    this._notify(updateType);
  }
}
