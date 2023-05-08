import { render } from '../../../framework/render.js';

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
    this.destinations = this.eventsModel.getDestinations().slice();
    this.types = this.eventsModel.getTypes().slice();
    this.events = this.eventsModel.getEvents().slice();
    //! Временно
    // eslint-disable-next-line no-console
    console.log(this.destinations, this.types, this.events);

    render(new EventsSortView(), tripEvents);
    render(this.eventsListView, tripEvents);
    render(new EventsEditItemView({destinations: this.destinations, types: this.types, event: this.events[0]}), this.eventsListView.getElement());

    for (let i = 1; i < this.events.length; i++) {
      render(new EventsItemView({destinations: this.destinations, types: this.types, event: this.events[i]}), this.eventsListView.getElement());
    }
  }
}
