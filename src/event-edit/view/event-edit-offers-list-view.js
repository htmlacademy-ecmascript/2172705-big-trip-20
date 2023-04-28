import { createElement } from '../../render.js';

function createEventEditOffersListTemplate() {
  return (
    '<div class="event__available-offers"></div>'
  );
}

export default class EventEditOffersListView {
  getTemplate() {
    return createEventEditOffersListTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
