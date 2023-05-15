import { render } from '../../../framework/render.js';

import { EMPTY_EVENTS_LIST_MESSAGE } from '../../../const.js';
import EventsSortView from '../view/events-board-sort-view.js';
import EventsListView from '../view/events-board-list-view.js';
import EventsMessageView from '../view/events-board-message-view.js';

import EventPresenter from '../../event/presenter/event-presenter.js';

const tripEvents = document.querySelector('.trip-events');

export default class EventsBoardPresenter {
  #destinationsModel = null;
  #typeOffersModel = null;
  #eventsModel = null;

  #destinations = [];
  #types = [];
  #events = [];

  #eventsListComponent = new EventsListView();

  constructor({ destinationsModel, typeOffersModel, eventsModel }) {
    this.#destinationsModel = destinationsModel;
    this.#typeOffersModel = typeOffersModel;
    this.#eventsModel = eventsModel;
  }

  init() {
    this.#destinations = this.#destinationsModel.destinations.slice();
    this.#types = this.#typeOffersModel.types.slice();
    this.#events = this.#eventsModel.events.slice();

    //! Временно
    // eslint-disable-next-line no-console
    console.log(this.#destinations, this.#types, this.#events);

    this.#renderEventsBoard({ destinations: this.#destinations, types: this.#types, events: this.#events });
  }

  #renderEventsBoard({ destinations, types, events }) {
    if (!events.length) {
      this.#renderEventsBoardMessage({ message: EMPTY_EVENTS_LIST_MESSAGE });
      return;
    }

    this.#renderEventsBoardSort();
    this.#renderEventsBoardList();

    events.forEach((_, i) => this.#renderEventsBoardItem({ destinations, types, event: events[i] }));
  }

  #renderEventsBoardMessage(message) {
    render(new EventsMessageView({ message }), tripEvents);
  }

  #renderEventsBoardSort() {
    render(new EventsSortView(), tripEvents);
  }

  #renderEventsBoardList() {
    render(this.#eventsListComponent, tripEvents);
  }

  #renderEventsBoardItem(data) {
    const eventsBoardItemPresenter = new EventPresenter({
      eventsListContainer: this.#eventsListComponent
    });

    eventsBoardItemPresenter.init({ data });
  }
}
