import AbstractView from '../../../framework/view/abstract-view.js';
import { sortByAsc } from '../../../utils/common.js';
import { DatetimeFormat, convertDatetime, isSameMonth } from '../../../utils/date.js';
import { MAX_DISPLAYED_DESTINATIONS } from '../../../const.js';

//! Определение наименования маршрута
//! ------------------------------------------------------

const getDestinationItem = (destinations, eventItem) => destinations.find((item) => item.id === eventItem.destination);

const getTitle = ({ destinations, events }) => {
  const destinationNamesList = events.map((event) => getDestinationItem(destinations, event).name);

  if (destinationNamesList.length <= MAX_DISPLAYED_DESTINATIONS) {
    return destinationNamesList.join('&nbsp;&mdash;&nbsp;');
  }

  return `${destinationNamesList[0]}&nbsp;&mdash;&nbsp;...&nbsp;&mdash;&nbsp;${destinationNamesList.at(-1)}`;
};


//! Определение дат начала и конца путешествия
//! ------------------------------------------------------

const getTripDates = ({ events }) => {
  if (!events.length) {
    return '';
  }

  const firstEventSortedByDateTo = events.sort(sortByAsc('dateFrom')).at(0);
  const lastEventSortedByDateTo = events.sort(sortByAsc('dateTo')).at(-1);

  const formattedDateFrom = convertDatetime(firstEventSortedByDateTo.dateFrom, DatetimeFormat.EVENT_DATE);
  let formattedDateTo = convertDatetime(lastEventSortedByDateTo.dateTo, DatetimeFormat.EVENT_DATE);

  if (isSameMonth(formattedDateFrom, formattedDateTo)) {
    formattedDateTo = convertDatetime(lastEventSortedByDateTo.dateTo, DatetimeFormat.SHORT_EVENT_DATE);
  }

  return `${formattedDateFrom}&nbsp;&mdash;&nbsp;${formattedDateTo}`;
};

//! Подсчет итоговой стоимости
//! ------------------------------------------------------

const calculateTotalCost = ({ types, events }) => {
  if (!events.length) {
    return 0;
  }

  const totalCost = events.reduce((result, event) => {
    let offersCost = 0;
    const { offers } = types.find((type) => type.type === event.type);

    if (offers.length !== 0 && event.offers !== 0) {
      offersCost = offers.reduce((accum, offer) => {
        if (event.offers.includes(offer.id)) {
          return accum + offer.price;
        }

        return accum;
      }, 0);
    }

    return result + event.basePrice + offersCost;
  }, 0);

  return totalCost;
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

