import { render } from '../../../global/render.js';

import EventsSortView from '../view/events-sort-view.js';
import EventsListView from '../view/events-list-view.js';
import EventsItemView from '../view/events-item-view.js';
import EventsEditItemView from '../view/events-edit-item-view.js';

const tripEvents = document.querySelector('.trip-events');

export default class EventsPresenter {
  eventsListView = new EventsListView();

  constructor({ eventsModel }) {
    this.eventsModel = eventsModel;
  }

  init() {
    this.data = {
      destinations: this.eventsModel.getDestinations().slice(),
      offers: this.eventsModel.getOffers().slice(),
      events: this.eventsModel.getEvents().slice()
    };
    //! Временно
    // eslint-disable-next-line no-console
    console.log(this.data);

    render(new EventsSortView(), tripEvents);
    render(this.eventsListView, tripEvents);
    render(new EventsEditItemView({data: this.data, number: 0}), this.eventsListView.getElement());

    for (let i = 1; i < this.data.events.length; i++) {
      render(new EventsItemView({data: this.data, number: i}), this.eventsListView.getElement());
    }
  }
}
