import AbstractView from '../../../framework/view/abstract-view.js';
import { DatetimeFormat, convertDatetime, isSameMonth } from '../../../global/utils/date.js';

//! Определение наименования маршрута
//! ------------------------------------------------------

const getDestinationItem = (destinations, eventItem) => destinations.find((item) => item.id === eventItem.destination);

const getTitle = ({ destinations, events }) => {
  const destinationNamesList = events
    .map((event) => getDestinationItem(destinations, event))
    .map((item) => item.name);

  if (destinationNamesList.length <= 3) {
    return destinationNamesList.join('&nbsp;&mdash;&nbsp;');
  }

  return `${destinationNamesList[0]}&nbsp;&mdash;&nbsp;...&nbsp;&mdash;&nbsp;${destinationNamesList.at(-1)}`;
};


//! Определение дат начала и конца путешествия
//! ------------------------------------------------------

const sortByDateFrom = (first, second) => {
  if (first.dateFrom > second.dateFrom) {
    return 1;
  }
  if (first.dateFrom < second.dateFrom) {
    return -1;
  }
};

const sortByDateTo = (first, second) => {
  if (first.dateTo > second.dateTo) {
    return -1;
  }
  if (first.dateTo < second.dateTo) {
    return 1;
  }
};

const getTripDates = ({ events }) => {
  if (!events.length) {
    return '';
  }

  const ascSortedEventsByDateFrom = events.slice().sort(sortByDateFrom);
  const descSortedEventsByDateTo = events.slice().sort(sortByDateTo);

  const formattedDateFrom = convertDatetime(ascSortedEventsByDateFrom[0].dateFrom, DatetimeFormat.EVENT_DATE);
  let formattedDateTo = convertDatetime(descSortedEventsByDateTo[0].dateTo, DatetimeFormat.EVENT_DATE);

  if (isSameMonth(formattedDateFrom, formattedDateTo)) {
    formattedDateTo = convertDatetime(descSortedEventsByDateTo[0].dateTo, DatetimeFormat.SHORT_EVENT_DATE);
  }

  return `${formattedDateFrom}&nbsp;&mdash;&nbsp;${formattedDateTo}`;
};

//! Подсчет итоговой стоимости
//! ------------------------------------------------------

const getOffers = (types, eventItem) => {
  const typeItem = types.find((item) => item.type === eventItem.type);
  const offers = typeItem.offers.filter((item) => eventItem.offers.includes(item.id));

  return offers;
};

const calculateTotalCost = ({ types, events }) => {
  if (!events.length) {
    return 0;
  }

  const basePriceList = events.map((event) => event.basePrice);
  const offersList = events.map((event) => getOffers(types, event));
  const formattedOffersList = [];

  for (const offers of offersList) {
    formattedOffersList.push(...offers);
  }

  const basePriceListTotalCost = basePriceList.reduce((accum, item) => accum + item, 0);
  const offersListTotalCost = formattedOffersList.reduce((accum, item) => accum + item.price, 0);

  return basePriceListTotalCost + offersListTotalCost;
};

const createTripMainInfoTemplate = ({ destinations, types, events }) => (/*html*/`
  <section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
      <h1 class="trip-info__title">${getTitle({ destinations, types, events })}</h1>
      <p class="trip-info__dates">${getTripDates({ events })}</p>
    </div>

    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${calculateTotalCost({ types, events })}</span>
    </p>
  </section>`);

export default class TripMainInfoView extends AbstractView {
  #data = {};

  constructor({ destinations, types, events }) {
    super();
    this.#data = { destinations, types, events };
  }

  get template() {
    return createTripMainInfoTemplate(this.#data);
  }
}

