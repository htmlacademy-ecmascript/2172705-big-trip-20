import { render, replace } from '../../../framework/render.js';

import EventsSortView from '../view/events-sort-view.js';
import EventsListView from '../view/events-list-view.js';
import EventsItemView from '../view/events-item-view.js';
import EventsEditItemView from '../view/events-edit-item-view.js';
import EventsMessage from '../view/events-message-view.js';

const EMPTY_EVENTS_LIST_MESSAGE = 'Click New Event to create your first point';

const tripEvents = document.querySelector('.trip-events');

export default class EventsPresenter {
  #eventsModel = null;
  #destinations = [];
  #types = [];
  #events = [];

  #eventsListView = new EventsListView();

  constructor({ eventsModel }) {
    this.#eventsModel = eventsModel;
  }

  init() {
    this.#destinations = this.#eventsModel.destinations.slice();
    this.#types = this.#eventsModel.types.slice();
    this.#events = this.#eventsModel.events.slice();

    //! Временно
    // eslint-disable-next-line no-console
    console.log(this.#destinations, this.#types, this.#events);

    this.#renderEventsList({destinations: this.#destinations, types: this.#types, events: this.#events});
  }

  #renderEventsList({destinations, types, events}) {
    if (!events.length) {
      render(new EventsMessage({message: EMPTY_EVENTS_LIST_MESSAGE}), tripEvents);
      return;
    }

    render(new EventsSortView(), tripEvents);
    render(this.#eventsListView, tripEvents);

    for (let i = 0; i < events.length; i++) {
      this.#renderEventsItem({destinations, types, event: events[i]});
    }
  }

  #renderEventsItem(data) {
    const onDocumentEscapeKeydown = (evt, replaceFunction) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFunction();
        document.removeEventListener('keydown', onDocumentEscapeKeydown);
      }
    };

    const eventsItem = new EventsItemView({data, onRollupButtonClick: () => {
      replaceEventsItemToEditForm();
      document.addEventListener('keydown', onDocumentEscapeKeydown);
    }});

    const eventsEditItem = new EventsEditItemView({data, onEditFormSubmit: (evt) => {
      evt.preventDefault();
      replaceEditFormToEventsItem();
      document.removeEventListener('keydown', onDocumentEscapeKeydown);
    }});

    render(eventsItem, this.#eventsListView.element);

    function replaceEventsItemToEditForm() {
      replace(eventsEditItem, eventsItem);
    }

    function replaceEditFormToEventsItem() {
      replace(eventsItem, eventsEditItem);
    }
  }
}
