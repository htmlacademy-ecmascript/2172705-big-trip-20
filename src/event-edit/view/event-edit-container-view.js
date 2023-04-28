import { createElement } from '../../render.js';

function createEventEditContainerTemplate() {
  return (
    '<li class="trip-events__item"></li>'
  );
}

export default class EventEditContainerView {
  getTemplate() {
    return createEventEditContainerTemplate();
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
