import { createElement } from '../../render.js';

function createEventEditDetailsTemplate() {
  return (
    '<section class="event__details"></section>'
  );
}

export default class EventEditDetailsView {
  getTemplate() {
    return createEventEditDetailsTemplate();
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
