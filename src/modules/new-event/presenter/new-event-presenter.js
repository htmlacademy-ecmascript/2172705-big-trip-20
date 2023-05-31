import { nanoid } from 'nanoid';

import NewEventButtonView from '../view/new-event-button-view.js';
import EventFormItemView from '../../event/view/event-form-item-view';
import { RenderPosition, render, remove } from '../../../framework/render';
import { FilterType, UpdateType, UserAction } from '../../../const';

const tripMain = document.querySelector('.trip-main');

export default class NewEventPresenter {
  #destinationsModel = null;
  #offerTypesModel = null;
  #filtersModel = null;

  #boardPresenter = null;

  #newEventButtonComponent = null;
  #newEventFormComponent = null;

  constructor({ destinationsModel, offerTypesModel, filtersModel, boardPresenter }) {
    this.#destinationsModel = destinationsModel;
    this.#offerTypesModel = offerTypesModel;
    this.#filtersModel = filtersModel;
    this.#boardPresenter = boardPresenter;
  }

  init() {
    this.#renderNewEventButton();
    this.deactivateNewEventButton();
  }

  #createNewEvent() {
    this.#newEventFormComponent = new EventFormItemView({
      data: { destinations: this.#destinationsModel.destinations, offerTypes: this.#offerTypesModel.offerTypes, event: this.#createNewEventBlank() },
      isNewEvent: true,
      onFormSubmit: this.#onNewEventFormSubmit,
      onButtonClick: this.#onCancelButtonClick
    });

    render(this.#newEventFormComponent, this.#boardPresenter.eventsBoardListComponent.element, RenderPosition.AFTERBEGIN);
    document.addEventListener('keydown', this.#onEscKeydownClick);
  }

  closeNewEventForm = () => {
    if (this.#newEventFormComponent === null) {
      return;
    }

    this.activateNewEventButton();
    document.removeEventListener('keydown', this.#onEscKeydownClick);

    remove(this.#newEventFormComponent);
    this.#newEventFormComponent = null;
  };

  activateNewEventButton = () => {
    this.#newEventButtonComponent.element.disabled = false;
  };

  deactivateNewEventButton = () => {
    this.#newEventButtonComponent.element.disabled = true;
  };

  #renderNewEventButton() {
    this.#newEventButtonComponent = new NewEventButtonView({
      onNewEventButtonClick: this.#onNewEventButtonClick
    });
    render(this.#newEventButtonComponent, tripMain);
  }

  #createNewEventBlank() {
    return {
      basePrice: 1,
      dateFrom: new Date(),
      dateTo: new Date(),
      destination: this.#destinationsModel.destinations[0].id,
      isFavorite: false,
      offers: [],
      type: this.#offerTypesModel.offerTypes[0].type
    };
  }

  #onNewEventButtonClick = () => {
    this.#boardPresenter.setDefaultSortType();
    this.#filtersModel.setCurrentFilter(UpdateType.MAJOR, FilterType.EVERYTHING);
    this.#createNewEvent();
    this.deactivateNewEventButton();
  };

  #onNewEventFormSubmit = (newEvent) => {
    this.#boardPresenter.onEventUserAction(
      UserAction.ADD_EVENT,
      UpdateType.MINOR,
      { ...newEvent, id: nanoid() }
    );
    this.closeNewEventForm();
  };

  #onCancelButtonClick = () => this.closeNewEventForm();

  #onEscKeydownClick = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.closeNewEventForm();
    }
  };
}
