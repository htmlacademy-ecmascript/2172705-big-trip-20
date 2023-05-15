import { render, RenderPosition } from '../../../framework/render.js';
import { generateFilters } from '../../../utils/filter.js';

import TripMainInfoView from '../view/trip-main-info-view.js';
import TripMainFiltersView from '../view/trip-main-filters-view.js';

const tripMainContainer = document.querySelector('.trip-main');
const tripFiltersContainer = document.querySelector('.trip-controls__filters');

export default class TripMainPresenter {
  #destinationsModel = null;
  #typeOffersModel = null;
  #eventsModel = null;

  #destinations = [];
  #types = [];
  #events = [];
  #generatedFilters = [];

  constructor({ destinationsModel, typeOffersModel, eventsModel }) {
    this.#destinationsModel = destinationsModel;
    this.#typeOffersModel = typeOffersModel;
    this.#eventsModel = eventsModel;
  }

  init() {
    this.#destinations = this.#destinationsModel.destinations.slice();
    this.#types = this.#typeOffersModel.types.slice();
    this.#events = this.#eventsModel.events.slice();
    this.#generatedFilters = generateFilters(this.#events);

    this.#renderTripMain();
  }

  #renderTripMain() {
    this.#renderTripMainInfo();
    this.#renderTripMainFilters();
  }

  #renderTripMainInfo() {
    render(new TripMainInfoView({ destinations: this.#destinations, types: this.#types, events: this.#events }), tripMainContainer, RenderPosition.AFTERBEGIN);
  }

  #renderTripMainFilters() {
    render(new TripMainFiltersView({ filters: this.#generatedFilters }), tripFiltersContainer);
  }
}
