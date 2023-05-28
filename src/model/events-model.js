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
      throw new Error(`Can't update unexisting ${updatedEvent}`);
    }

    this.#events = this.#events.map((event, index) => {
      if (index === updatedEventIndex) {
        return updatedEvent;
      }

      return event;
    });

    this._notify(updateType, updatedEvent);
  }

  addEvent(updateType, addedEvent) {
    this.#events = [
      addedEvent,
      ...this.#events
    ];

    this._notify(updateType, addedEvent);
  }

  deleteEvent(updateType, deletedEvent) {
    const updatedEventIndex = this.#events.findIndex((event) => event.id === deletedEvent.id);

    if (updatedEventIndex === -1) {
      throw new Error(`Can't delete unexisting ${deletedEvent}`);
    }

    this.#events = this.#events.filter((event) => event.id !== deletedEvent.id);

    this._notify(updateType);
  }
}
