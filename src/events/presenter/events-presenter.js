import { render } from '../../render.js';

import EventsSortView from '../view/events-sort-view.js';
import EventsListView from '../view/events-list-view.js';
import EventsItemView from '../view/events-item-view.js';
import EventsEditItemView from '../view/events-edit-item-view.js';
import EventsEditOffersView from '../view/events-edit-offers-view.js';
import EventsEditDestinationView from '../view/events-edit-destination-view.js';

const NO_EDIT_EVENTS_COUNT = 3;

const tripEvents = document.querySelector('.trip-events');

export default class EventsPresenter {
  eventsListView = new EventsListView();

  init() {
    render(new EventsSortView(), tripEvents);
    render(this.eventsListView, tripEvents);
    render(new EventsEditItemView(), this.eventsListView.getElement());

    const eventDetails = document.querySelector('.event__details');
    render(new EventsEditOffersView(), eventDetails);
    render(new EventsEditDestinationView(), eventDetails);

    for (let i = 0; i < NO_EDIT_EVENTS_COUNT; i++) {
      render(new EventsItemView(), this.eventsListView.getElement());
    }
  }
}
