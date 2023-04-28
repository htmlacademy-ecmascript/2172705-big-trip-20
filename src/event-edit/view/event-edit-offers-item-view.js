import { createElement } from '../../render.js';

function createEventEditOffersSelectorTemplate() {
  return (/*html*/`
    <div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train">
      <label class="event__offer-label" for="event-offer-train-1">
        <span class="event__offer-title">Travel by train</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">40</span>
      </label>
    </div>`
  );
}

export default class EventEditOffersSelectorView {
  getTemplate() {
    return createEventEditOffersSelectorTemplate();
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
