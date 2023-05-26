import AbstractView from '../../../framework/view/abstract-view.js';

import { NoEventsByFilter } from '../../../const.js';

const createEventsMessageTemplate = (message, currentFilter) => `<p class="trip-events__msg">${message || NoEventsByFilter[currentFilter]}</p>`;

export default class EventsBoardMessageView extends AbstractView {
  #message = null;
  #currentFilter = null;

  constructor({ message = '', currentFilter = null } = {}) {
    super();
    this.#message = message;
    this.#currentFilter = currentFilter;
  }

  get template() {
    return createEventsMessageTemplate(this.#message, this.#currentFilter);
  }
}
