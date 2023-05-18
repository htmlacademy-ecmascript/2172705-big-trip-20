import { RenderPosition ,render, remove } from '../../../framework/render.js';
import { updateItem, sortByDesc } from '../../../utils/common.js';
import { sortByDurationDesc, sortByDateFromAsc } from '../../../utils/date.js';
import { EMPTY_EVENTS_LIST_MESSAGE, EventMode, SortType } from '../../../const.js';

import EventsBoardSortView from '../view/events-board-sort-view.js';
import EventsBoardListView from '../view/events-board-list-view.js';
import EventsBoardMessageView from '../view/events-board-message-view.js';

import FiltersPresenter from '../../filters/presenter/filters-presenter.js';
import EventPresenter from '../../event/presenter/event-presenter.js';

const tripEvents = document.querySelector('.trip-events');

export default class EventsBoardPresenter {
  #destinationsModel = null;
  #typeOffersModel = null;
  #eventsModel = null;

  #destinations = [];
  #types = [];
  #events = [];

  #eventsBoardSortComponent = null;
  #eventsBoardListComponent = new EventsBoardListView();
  #eventPresenters = new Map();

  #sortTypeByDefault = SortType.DAY;

  constructor({ destinationsModel, typeOffersModel, eventsModel }) {
    this.#destinationsModel = destinationsModel;
    this.#typeOffersModel = typeOffersModel;
    this.#eventsModel = eventsModel;
  }

  init() {
    this.#destinations = this.#destinationsModel.destinations.slice();
    this.#types = this.#typeOffersModel.types.slice();
    this.#events = this.#eventsModel.events.slice();

    this.#sortEvents(this.#sortTypeByDefault);

    //! Временно
    // eslint-disable-next-line no-console
    console.log(this.#destinations, this.#types, this.#events);

    this.#renderEventsBoard({ destinations: this.#destinations, types: this.#types, events: this.#events });
  }

  #renderEventsBoard() {
    if (!this.#events.length) {
      this.#renderEventsBoardMessage({ message: EMPTY_EVENTS_LIST_MESSAGE });
      return;
    }

    this.#renderFilters();
    this.#renderEventsBoardList();
    this.#renderEventsBoardSort();
  }

  #renderFilters() {
    const filtersPresenter = new FiltersPresenter({
      onFiltersChange: this.#onFiltersChange
    });

    filtersPresenter.init({ events: this.#events });
  }

  #onFiltersChange = () => {
    this.#onSortTypeChange(SortType.DAY.name.toUpperCase());
    this.#rerenderEventsBoardSort();
  };

  #renderEventsBoardSort() {
    this.#eventsBoardSortComponent = new EventsBoardSortView({
      onSortTypeChange : this.#onSortTypeChange
    });

    render(this.#eventsBoardSortComponent, this.#eventsBoardListComponent.element, RenderPosition.BEFOREBEGIN);
  }

  #rerenderEventsBoardSort() {
    remove(this.#eventsBoardSortComponent);
    this.#renderEventsBoardSort();
  }

  #renderEventsBoardList() {
    render(this.#eventsBoardListComponent, tripEvents);
    this.#events.forEach((event) => this.#renderEventsBoardItem({ destinations: this.#destinations, types: this.#types, event }));
  }

  #renderEventsBoardItem({ destinations, types, event }) {
    const eventsBoardItemPresenter = new EventPresenter({
      eventsListContainer: this.#eventsBoardListComponent,
      rerenderEvent: this.#rerenderEvent,
      changeEventMode: this.#changeEventMode
    });

    eventsBoardItemPresenter.init({ destinations, types, event });
    this.#eventPresenters.set(event.id, eventsBoardItemPresenter);
  }

  #renderEventsBoardMessage(message) {
    render(new EventsBoardMessageView({ message }), tripEvents);
  }

  #rerenderEvent = (updatedEvent) => {
    this.#events = updateItem(this.#events, updatedEvent);
    this.#eventPresenters.get(updatedEvent.id).init({ destinations: this.#destinations, types: this.#types, event: updatedEvent });
  };

  #changeEventMode = (mode, eventId) => {
    if (mode === EventMode.DEFAULT) {
      this.#eventPresenters.forEach((presenter) => presenter.resetView());
      this.#eventPresenters.get(eventId).updateMode(EventMode.EDITING);
    }
    if (mode === EventMode.EDITING) {
      this.#eventPresenters.get(eventId).updateMode(EventMode.DEFAULT);
    }
  };

  #sortEvents(type) {
    switch(type) {
      case(SortType.DAY):
        this.#events.sort(sortByDateFromAsc);
        break;
      case(SortType.TIME):
        this.#events.sort(sortByDurationDesc);
        break;
      case(SortType.PRICE):
        this.#events.sort(sortByDesc('basePrice'));
        break;
      default:
        throw new Error(`Не обнаружена реализация сортировки по полю ${type.name.toUpperCase()}`);
    }
  }

  #clearEventsBoard() {
    this.#eventPresenters.forEach((presenter) => presenter.destroy());
    this.#eventPresenters.clear();
  }

  #onSortTypeChange = (sortTypeName) => {
    this.#sortEvents(SortType[sortTypeName]);
    this.#clearEventsBoard();
    this.#renderEventsBoardList();
  };
}
