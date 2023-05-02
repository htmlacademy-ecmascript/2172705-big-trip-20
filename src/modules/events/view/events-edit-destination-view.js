import { createElement } from '../../../global/render.js';

const createEventPhotosTemplate = (picturesList) => `
  <div class="event__photos-container">
    <div class="event__photos-tape">
      ${picturesList.length ? `${picturesList.map((picture) => `<img class="event__photo" src="${picture.src}" alt="Event photo">`).join('')}` : ''}
    </div>
  </div>`;

const getDestinationInfo = ({destinations, events}, number) => {
  const {destination: destinationId} = events[number];
  const destinationItem = destinations.find((item) => item.id === destinationId);

  return {
    name: destinationItem.name,
    description: destinationItem.description,
    pictures: destinationItem.pictures,
  };
};

const createEventsEditDestinationTemplate = (data, number) => {
  const destinationInfo = getDestinationInfo(data, number);

  return (/*html*/`
    <section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">${destinationInfo.description}</p>
      ${createEventPhotosTemplate(destinationInfo.pictures)}
    </section>`);
};

export default class EventsEditDestinationView {
  constructor({data, number}) {
    this.data = data;
    this.number = number;
  }

  getTemplate() {
    return createEventsEditDestinationTemplate(this.data, this.number);
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
