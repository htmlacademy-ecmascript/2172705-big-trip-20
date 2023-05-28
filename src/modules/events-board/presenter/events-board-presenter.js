import { RenderPosition, remove, render } from '../../../framework/render.js';
import { sortByDurationDesc, sortByDateFromAsc } from '../../../utils/date.js';
import { filterEventsBy } from '../../../utils/filters.js';
import { sortByDesc } from '../../../utils/common.js';
import { SortType, UpdateType, UserAction } from '../../../const.js';

import EventsBoardSortView from '../view/events-board-sort-view.js';
import EventsBoardListView from '../view/events-board-list-view.js';
import EventsBoardMessageView from '../view/events-board-message-view.js';

import EventPresenter from '../../event/presenter/event-presenter.js';
import NewEventPresenter from '../../new-event/presenter/new-event-presenter.js';

const tripEvents = document.querySelector('.trip-events');

export default class EventsBoardPresenter {
  #destinationsModel = null;
  #typeOffersModel = null;
  #eventsModel = null;
  #filtersModel = null;

  #eventsBoardMessageComponent = null;
  #eventsBoardSortComponent = null;
  #eventsBoardListComponent = new EventsBoardListView();

  #eventPresenters = new Map();
  #newEventPresenter = null;

  #currentSortType = SortType.DAY;
  #defaultSortType = SortType.DAY;

  constructor({ destinationsModel, typeOffersModel, eventsModel, filtersModel }) {
    this.#destinationsModel = destinationsModel;
    this.#typeOffersModel = typeOffersModel;
    this.#eventsModel = eventsModel;
    this.#filtersModel = filtersModel;

    this.#eventsModel.addObserver(this.#onEventModelChange);
    this.#filtersModel.addObserver(this.#onEventModelChange);
  }

  get destinations() {
    return this.#destinationsModel.destinations;
  }

  get types() {
    return this.#typeOffersModel.types;
  }

  get events() {
    const currentFilter = this.#filtersModel.currentFilter;
    const filteredEvents = filterEventsBy[currentFilter](this.#eventsModel.events);

    switch (this.#currentSortType) {
      case (SortType.DAY):
        return filteredEvents.sort(sortByDateFromAsc);
      case (SortType.TIME):
        return filteredEvents.sort(sortByDurationDesc);
      case (SortType.PRICE):
        return filteredEvents.sort(sortByDesc('basePrice'));
      default:
        throw new Error(`No implementation of sorting by field found ${this.#currentSortType.name.toUpperCase()}`);
    }
  }

  setDefaultSortType() {
    this.#currentSortType = { ...this.#defaultSortType };
  }

  init() {
    this.#renderEventsBoard();
    this.#renderNewEventButton();
  }

  #renderEventsBoard() {
    this.#renderEventsBoardList();

    if (!this.events.length) {
      this.#renderEventsBoardMessage({ currentFilter: this.#filtersModel.currentFilter });
      return;
    }

    this.#renderEventsBoardSort();
  }

  #renderEventsBoardSort() {
    this.#eventsBoardSortComponent = new EventsBoardSortView({
      currentSortType: this.#currentSortType,
      onSortTypeChange: this.#onSortTypeChange
    });

    render(this.#eventsBoardSortComponent, this.#eventsBoardListComponent.element, RenderPosition.BEFOREBEGIN);
  }

  #renderEventsBoardList() {
    render(this.#eventsBoardListComponent, tripEvents);
    this.events.forEach((event) => this.#renderEventsBoardItem({ destinations: this.destinations, types: this.types, event }));
  }

  #renderEventsBoardItem({ destinations, types, event }) {
    const eventsBoardItemPresenter = new EventPresenter({
      eventsListContainer: this.#eventsBoardListComponent,
      onEventUserAction: this.#onEventUserAction,
      onEventModeChange: this.#onEventModeChange
    });

    eventsBoardItemPresenter.init({ destinations, types, event });
    this.#eventPresenters.set(event.id, eventsBoardItemPresenter);
  }

  #renderEventsBoardMessage({ message, currentFilter }) {
    this.#eventsBoardMessageComponent = new EventsBoardMessageView({ message, currentFilter });
    render(this.#eventsBoardMessageComponent, tripEvents);
  }

  #renderNewEventButton() {
    this.#newEventPresenter = new NewEventPresenter({
      destinationsModel: this.#destinationsModel,
      typeOffersModel: this.#typeOffersModel,
      filtersModel: this.#filtersModel,
      boardPresenter: this,
      eventsBoardListComponent: this.#eventsBoardListComponent,
      onEventUserAction: this.#onEventUserAction
    });

    this.#newEventPresenter.init();
  }

  #clearEventsBoard({ resetSortType = false } = {}) {
    this.#eventPresenters.forEach((presenter) => presenter.destroy());
    this.#eventPresenters.clear();

    remove(this.#eventsBoardSortComponent);
    remove(this.#eventsBoardListComponent);
    remove(this.#eventsBoardMessageComponent);

    if (resetSortType) {
      this.#currentSortType = this.#defaultSortType;
    }
  }

  #onEventUserAction = (actionType, updateType, updatedEvent) => {
    switch (actionType) {
      case UserAction.UPDATE_EVENT:
        this.#eventsModel.updateEvent(updateType, updatedEvent);
        break;
      case UserAction.ADD_EVENT:
        this.#eventsModel.addEvent(updateType, updatedEvent);
        break;
      case UserAction.DELETE_EVENT:
        this.#eventsModel.deleteEvent(updateType, updatedEvent);
        break;
      default:
        throw new Error(`No implementation of interaction with the model with the type of user action was found ${actionType}`);
    }
  };

  #onEventModelChange = (updateType, updatedEvent) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#eventPresenters.get(updatedEvent.id).init({ destinations: this.destinations, types: this.types, event: updatedEvent });
        break;
      case UpdateType.MINOR:
        this.#clearEventsBoard();
        this.#renderEventsBoard();
        break;
      case UpdateType.MAJOR:
        this.#clearEventsBoard({ resetSortType: true });
        this.#renderEventsBoard();
        break;
      default:
        throw new Error(`No implementation of model change processing with the change type was found ${updateType}`);
    }
  };

  #onEventModeChange = () => {
    this.#eventPresenters.forEach((presenter) => presenter.closeEventEditForm());
    this.#newEventPresenter.closeNewEventForm();
  };

  #onSortTypeChange = (sortTypeName) => {
    this.#currentSortType = SortType[sortTypeName];
    this.#clearEventsBoard();
    this.#renderEventsBoard();
  };
}
