import { render} from '../../render.js';

import TripEventsItemView from '../view/trip-events-item-view.js';
import TripEventsListView from '../view/trip-events-list-view.js';
import TripEventsSortView from '../view/trip-events-sort-view.js';

const tripEventsContainer = document.querySelector('.trip-events');

export default class TripEventsPresenter {
  tripEventsListView = new TripEventsListView();

  init() {
    render(new TripEventsSortView(), tripEventsContainer);
    render(this.tripEventsListView, tripEventsContainer);

    for (let i = 0; i < 3; i++) {
      render(new TripEventsItemView(), this.tripEventsListView.getElement());
    }
  }
}
