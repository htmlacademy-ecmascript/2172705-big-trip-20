import { RenderPosition, render, remove } from '../../../framework/render';
import { FilterType, UpdateType, UserAction } from '../../../const';

import NewEventButtonView from '../view/new-event-button-view.js';
import EventFormItemView from '../../event/view/event-form-item-view';

import { nanoid } from 'nanoid';

const tripMain = document.querySelector('.trip-main');

export default class NewEventPresenter {
  #destinationsModel = null;
  #typeOffersModel = null;
  #filtersModel = null;

  #boardPresenter = null;

  #newEventButtonComponent = null;
  #eventsBoardListComponent = null;
  #newEventFormComponent = null;

  #onEventUserAction = null;

  constructor({ destinationsModel, typeOffersModel, filtersModel, boardPresenter, eventsBoardListComponent, onEventUserAction }) {
    this.#destinationsModel = destinationsModel;
    this.#typeOffersModel = typeOffersModel;
    this.#filtersModel = filtersModel;
    this.#boardPresenter = boardPresenter;
    this.#eventsBoardListComponent = eventsBoardListComponent;
    this.#onEventUserAction = onEventUserAction;
  }

  init() {
    this.#renderNewEvent();
  }

  createEvent() {
    this.#newEventFormComponent = new EventFormItemView({
      data: { destinations: this.#destinationsModel.destinations, types: this.#typeOffersModel.types, event: this.#createNewEventBlank() },
      isNewEvent: true,
      onFormSubmit: this.#onNewEventFormSubmit,
      onButtonClick: this.#onCancelButtonClick
    });

    render(this.#newEventFormComponent, this.#eventsBoardListComponent.element, RenderPosition.AFTERBEGIN);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  destroy() {
    if (this.#newEventFormComponent === null) {
      return;
    }

    this.#newEventButtonComponent.element.disabled = false;
    document.removeEventListener('keydown', this.#escKeyDownHandler);

    remove(this.#newEventFormComponent);
    this.#newEventFormComponent = null;
  }

  #renderNewEvent() {
    this.#newEventButtonComponent = new NewEventButtonView({
      onNewEventButtonClick: this.#onNewEventButtonClick
    });
    render(this.#newEventButtonComponent, tripMain);
  }

  #createNewEventBlank() {
    return {
      basePrice: 0,
      dateFrom: new Date(),
      dateTo: new Date(),
      destination: this.#destinationsModel.destinations[0].id,
      isFavorite: false,
      offers: [],
      type: 'taxi'
    };
  }

  #onNewEventButtonClick = () => {
    this.#boardPresenter.setDefaultSortType();
    this.#filtersModel.setCurrentFilter(UpdateType.MAJOR, FilterType.EVERYTHING);
    this.createEvent();
    this.#newEventButtonComponent.element.disabled = true;
  };

  #onNewEventFormSubmit = (newEvent) => {
    this.#onEventUserAction(
      UserAction.ADD_EVENT,
      UpdateType.MINOR,
      { ...newEvent, id: nanoid() }
    );
    this.destroy();
  };

  #onCancelButtonClick = () => {
    this.destroy();
  };

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.destroy();
    }
  };
}
