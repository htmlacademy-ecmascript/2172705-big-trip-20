import TripMainInfoView from '../view/trip-main-info-view.js';
import { RenderPosition, render, remove, replace } from '../../../framework/render.js';

const tripMainContainer = document.querySelector('.trip-main');

export default class TripMainPresenter {
  #destinationsModel = null;
  #typeOffersModel = null;
  #eventsModel = null;

  #tripMainInfoComponent = null;

  constructor({ destinationsModel, typeOffersModel, eventsModel }) {
    this.#destinationsModel = destinationsModel;
    this.#typeOffersModel = typeOffersModel;
    this.#eventsModel = eventsModel;

    this.#eventsModel.addObserver(this.#onModelChange);
  }

  init() {
    const prevTripMainInfoComponent = this.#tripMainInfoComponent;
    this.#tripMainInfoComponent = new TripMainInfoView({
      destinations: this.#destinationsModel.destinations,
      types: this.#typeOffersModel.types,
      events: this.#eventsModel.events
    });

    if (prevTripMainInfoComponent === null) {
      render(this.#tripMainInfoComponent, tripMainContainer, RenderPosition.AFTERBEGIN);
      return;
    }

    replace(this.#tripMainInfoComponent, prevTripMainInfoComponent);
    remove(prevTripMainInfoComponent);
  }

  #onModelChange = () => {
    this.init();
  };
}
