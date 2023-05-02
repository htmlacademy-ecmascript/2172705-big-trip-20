import { createElement } from '../../../global/render.js';

const isChecked = (offerId, selectedOffers) => selectedOffers.includes(offerId) ? 'checked' : '';

const createOffersListTemplate = (offersList, selectedOffers) => `
    <div class="event__available-offers">
      ${offersList.map((offer) => `
        <div class="event__offer-selector">
          <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" ${isChecked(offer.id, selectedOffers)}>
          <label class="event__offer-label" for="event-offer-luggage-1">
            <span class="event__offer-title">${offer.title}</span>
            &plus;&euro;&nbsp;
            <span class="event__offer-price">${offer.price}</span>
          </label>
        </div>`).join('')}
    </div>`;

const getOffersInfo = ({offers, events}, number) => {
  const eventType = events[number].type;
  const selectedOffers = events[number].offers;
  const offerItem = offers.find((offer) => offer.type === eventType);

  return {
    selectedOffers,
    offerItem
  };
};

const createEventsEditOffersTemplate = (data, number) => {
  const {selectedOffers, offerItem} = getOffersInfo(data, number);

  return `
  ${offerItem.offers.length ? `
    <section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      ${createOffersListTemplate(offerItem.offers, selectedOffers)}
    </section>` : ''}`;
};

export default class EventsEditOffersView {
  constructor({data, number}) {
    this.data = data;
    this.number = number;
  }

  getTemplate() {
    return createEventsEditOffersTemplate(this.data, this.number);
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
