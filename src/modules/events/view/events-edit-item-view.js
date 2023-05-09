import AbstractView from '../../../framework/view/abstract-view.js';
import { capitalizeWord } from '../../../global/utils/common.js';
import { DatetimeFormat, convertDatetime } from '../../../global/utils/date.js';

//! Шаблон разметки пункта назначения
//! ------------------------------------------------------

const createEventPhotosTemplate = (picturesList) => {
  if (!picturesList.length) {
    return '';
  }

  return (/*html*/`
    <div class="event__photos-container">
      <div class="event__photos-tape">
        ${picturesList.map((picture) => `<img class="event__photo" src="${picture.src}" alt="Event photo.">`).join('')}
      </div>
    </div>`);
};

const createEventsEditDestinationTemplate = (destinationItem) => (/*html*/`
    <section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">${destinationItem.description}</p>
      ${createEventPhotosTemplate(destinationItem.pictures)}
    </section>`);

//! Шаблон разметки офферов
//! ------------------------------------------------------

const isOfferSelected = (offerId, eventSelectedOffers) => eventSelectedOffers.includes(offerId) ? 'checked' : '';

const createOffersListTemplate = (offersList, eventSelectedOffers) => (/*html*/`
    <div class="event__available-offers">
      ${offersList.map((offer) => (/*html*/`
        <div class="event__offer-selector">
          <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.title}-${offer.id}" type="checkbox" name="event-offer-${offer.title}" ${isOfferSelected(offer.id, eventSelectedOffers)}>
          <label class="event__offer-label" for="event-offer-${offer.title}-${offer.id}">
            <span class="event__offer-title">${offer.title}</span>
            &plus;&euro;&nbsp;
            <span class="event__offer-price">${offer.price}</span>
          </label>
        </div>`)).join('')}
    </div>`);

const createEventsEditOffersTemplate = (typeItem, eventSelectedOffers) => {
  if (!typeItem.offers.length) {
    return '';
  }

  return (/*html*/`
    <section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      ${createOffersListTemplate(typeItem.offers, eventSelectedOffers)}
    </section>`);
};

//! Шаблон разметки выбора пункта назначения
//! ------------------------------------------------------

const createDestinationListTemplate = ({ destinations }) => (/*html*/`
  <datalist id="destination-list-1">
    ${destinations.map((destination) => `<option value="${destination.name}"></option>`).join('')}
  </datalist>`);

//! Шаблон разметки выбора типа события
//! ------------------------------------------------------

const isEventTypeSelected = (eventType, offerType) => eventType === offerType ? 'checked' : '';

const createEventTypeListTemplate = ({ types }, eventType) => (/*html*/`
    <div class="event__type-list">
      <fieldset class="event__type-group">
        <legend class="visually-hidden">Event type</legend>
        ${types.map((type) => (/*html*/`
          <div class="event__type-item">
            <input id="event-type-${type.type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type.type}" ${isEventTypeSelected(eventType, type.type)}>
            <label class="event__type-label  event__type-label--${type.type}" for="event-type-${type.type}-1">${capitalizeWord(type.type)}</label>
          </div>`)).join('')}
      </fieldset>
    </div>`);

//! Шаблон разметки изменения точки маршрута
//! ------------------------------------------------------

const createEventsEditItemTemplate = ({ destinations, types, event }) => {
  const { type: eventType, destination: destinationId, offers: eventSelectedOffers, basePrice, dateFrom, dateTo } = event;
  const destinationItem = destinations.find((item) => item.id === destinationId);
  const typeItem = types.find((type) => type.type === eventType);

  return (/*html*/`
    <li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${eventType}.png" alt="Event type icon.">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
            ${createEventTypeListTemplate({ types }, eventType)}
          </div>

          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-1">
              ${capitalizeWord(eventType)}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destinationItem.name}" list="destination-list-1">
            ${createDestinationListTemplate({ destinations })}
          </div>

          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-1">From</label>
            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${convertDatetime(dateFrom, DatetimeFormat.EVENT_EDIT_DATE)}">
            &mdash;
            <label class="visually-hidden" for="event-end-time-1">To</label>
            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${convertDatetime(dateTo, DatetimeFormat.EVENT_EDIT_DATE)}">
          </div>

          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
              <span class="visually-hidden">Price</span>
              &euro;
            </label>
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
          </div>

          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Cancel</button>
        </header>
        <section class="event__details">
          ${createEventsEditOffersTemplate(typeItem, eventSelectedOffers)}
          ${createEventsEditDestinationTemplate(destinationItem)}
        </section>
      </form>
    </li>`
  );
};

export default class EventsEditItemView extends AbstractView {
  #data = {};

  constructor({ data: { destinations, types, event }, onEditFormSubmit }) {
    super();
    this.#data = { destinations, types, event };
    this.element.querySelector('.event--edit').addEventListener('submit', onEditFormSubmit);
  }

  get template() {
    return createEventsEditItemTemplate(this.#data);
  }
}
