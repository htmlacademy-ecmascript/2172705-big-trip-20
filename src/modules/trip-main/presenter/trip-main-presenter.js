import { render, RenderPosition } from '../../../framework/render.js';

import TripMainInfoView from '../view/trip-main-info-view.js';

const tripMainContainer = document.querySelector('.trip-main');

export default class TripMainPresenter {
  #destinationsModel = null;
  #typeOffersModel = null;
  #eventsModel = null;

  #destinations = [];
  #types = [];
  #events = [];

  constructor({ destinationsModel, typeOffersModel, eventsModel }) {
    this.#destinationsModel = destinationsModel;
    this.#typeOffersModel = typeOffersModel;
    this.#eventsModel = eventsModel;
  }

  init() {
    this.#destinations = this.#destinationsModel.destinations.slice();
    this.#types = this.#typeOffersModel.types.slice();
    this.#events = this.#eventsModel.events.slice();

    this.#renderTripMain();
  }

  #renderTripMain() {
    this.#renderTripMainInfo();
  }

  #renderTripMainInfo() {
    render(new TripMainInfoView({ destinations: this.#destinations, types: this.#types, events: this.#events }), tripMainContainer, RenderPosition.AFTERBEGIN);
  }
}
