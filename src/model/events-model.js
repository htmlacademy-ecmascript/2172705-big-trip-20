import Observable from '../framework/observable.js';
import { createErrorMessage } from '../utils/api.js';
import { UpdateType } from '../const.js';

export default class EventsModel extends Observable {
  #eventsApiService = null;
  #events = [];

  constructor({ eventsApiService }) {
    super();
    this.#eventsApiService = eventsApiService;
  }

  async init() {
    try {
      this.#events = await this.#eventsApiService.getEvents();
    } catch {
      throw new Error('Can\'t to load events data from server!');
    }

    this._notify(UpdateType.INIT);
  }

  get events() {
    return this.#events;
  }

  async updateEvent(updateType, eventForUpdate) {
    const updatedEventIndex = this.#events.findIndex((event) => event.id === eventForUpdate.id);

    if (updatedEventIndex === -1) {
      throw new Error(`Can't update unexisting ${eventForUpdate}`);
    }

    try {
      const updatedEvent = await this.#eventsApiService.updateEvent(eventForUpdate);

      this.#events = this.#events.map((event, index) => {
        if (index === updatedEventIndex) {
          return updatedEvent;
        }

        return event;
      });

      this._notify(updateType, updatedEvent);
    } catch {
      createErrorMessage('Can\'t to update events data!');
    }
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
