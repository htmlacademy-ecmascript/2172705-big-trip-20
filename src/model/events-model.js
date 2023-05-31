import Observable from '../framework/observable.js';
import { UpdateType } from '../const.js';

export default class EventsModel extends Observable {
  #serverApiService = null;
  #events = [];

  constructor({ serverApiService }) {
    super();
    this.#serverApiService = serverApiService;
  }

  async init() {
    try {
      this.#events = await this.#serverApiService.getEvents();
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
      const updatedEvent = await this.#serverApiService.updateEvent(eventForUpdate);
      this.#events = this.#events.map((event, index) => index === updatedEventIndex ? updatedEvent : event);
      this._notify(updateType, updatedEvent);
    } catch {
      throw new Error('Can\'t to update events data!');
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
