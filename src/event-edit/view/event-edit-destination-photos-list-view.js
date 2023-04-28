import { createElement } from '../../render.js';

function createEventEditDestinationPhotosListTemplate() {
  return (
    '<div class="event__photos-tape"></div>'
  );
}

export default class EventEditDestinationPhotosListView {
  getTemplate() {
    return createEventEditDestinationPhotosListTemplate();
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
