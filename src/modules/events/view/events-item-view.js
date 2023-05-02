import { createElement } from '../../../global/render.js';
import { getCapitalizeWord } from '../../../global/utils.js';
import { Format, convertDatetime, getDuration } from '../../../vendor/dayjs.js';

const getTotalPrice = (basePrice, {offers, events}, number) => {
  if (!events[number].offers.length) {
    return basePrice;
  }

  const eventType = events[number].type;
  const typeItem = offers.find((type) => type.type === eventType);
  const eventOffers = events[number].offers;
  let totalPrice = 0;
  for (const offerId of eventOffers) {
    const [offerItem] = typeItem.offers.filter((offer) => offer.id === offerId);
    totalPrice += offerItem.price;
  }

  return basePrice + totalPrice;
};

const isEventFavorite = (isFavorite) => isFavorite ? 'event__favorite-btn--active' : '';

const getOfferData = (offers, id, eventType) => {
  const typeItem = offers.find((type) => type.type === eventType);
  const [offerItem] = typeItem.offers.filter((offer) => offer.id === id);

  return offerItem;
};

const createSelectedOffersTemplate = ({offers, events}, number) => {
  const eventType = events[number].type;
  const eventsOffers = events[number].offers;

  return `
    ${eventsOffers.length ? `
    <ul class="event__selected-offers">
    ${eventsOffers.map((id) => `
      <li class="event__offer">
        <span class="event__offer-title">${getOfferData(offers, id, eventType).title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${getOfferData(offers, id, eventType).price}</span>
      </li>`).join('')}
    </ul>` : ''}`;
};


const createEventsItemTemplate = (data, number) => {
  const {type, destination: destinationId, dateFrom, dateTo, basePrice, isFavorite} = data.events[number];

  return /*html*/`
    <li class="trip-events__item">
      <div class="event">
        <time class="event__date" datetime="${dateFrom}">${convertDatetime(dateFrom, Format.EVENT_DATE)}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${getCapitalizeWord(type)} ${data.destinations[destinationId - 1].name}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${dateFrom}">${convertDatetime(dateFrom, Format.TIME)}</time>
            &mdash;
            <time class="event__end-time" datetime="${dateTo}">${convertDatetime(dateTo, Format.TIME)}</time>
          </p>
          <p class="event__duration">${getDuration(dateFrom, dateTo)}</p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${getTotalPrice(basePrice, data, number)}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        ${createSelectedOffersTemplate(data, number)}
        <button class="event__favorite-btn ${isEventFavorite(isFavorite)}" type="button">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`;
};

export default class EventsItemView {
  constructor({data, number}) {
    this.data = data;
    this.number = number;
  }

  getTemplate() {
    return createEventsItemTemplate(this.data, this.number);
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
