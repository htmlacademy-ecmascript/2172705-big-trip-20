import { createElement } from '../../render.js';

function createEventEditDestinationPhotosContainerTemplate() {
  return (
    '<div class="event__photos-container"></div>'
  );
}

export default class EventEditDestinationPhotosContainerView {
  getTemplate() {
    return createEventEditDestinationPhotosContainerTemplate();
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
