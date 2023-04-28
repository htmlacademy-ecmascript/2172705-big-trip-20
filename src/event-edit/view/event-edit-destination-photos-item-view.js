import { createElement } from '../../render.js';

function createEventEditDestinationPhotosItemTemplate() {
  return (
    '<img class="event__photo" src="img/photos/1.jpg" alt="Event photo">'
  );
}

export default class EventEditDestinationPhotosItemView {
  getTemplate() {
    return createEventEditDestinationPhotosItemTemplate();
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
