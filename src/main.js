import { generateAuthToken, createErrorMessage } from './utils/api.js';
import { END_POINT } from './const.js';

const authToken = generateAuthToken();

import DestinationsApiService from './api/destinations-api-service.js';
import TypeOffersApiService from './api/type-offers-api-service.js';
import EventsApiService from './api/events-api-service.js';

import DestinationsModel from './model/destinations-model.js';
import TypeOffersModel from './model/type-offers-model.js';
import EventsModel from './model/events-model.js';
import FiltersModel from './model/filters-model.js';

import TripMainPresenter from './modules/trip-main/presenter/trip-main-presenter.js';
import FiltersPresenter from './modules/filters/presenter/filters-presenter.js';
import NewEventPresenter from './modules/new-event/presenter/new-event-presenter.js';
import EventsBoardPresenter from './modules/events-board/presenter/events-board-presenter.js';

const destinationsModel = new DestinationsModel({ destinationsApiService: new DestinationsApiService(END_POINT, authToken) });
const typeOffersModel = new TypeOffersModel({ typeOffersApiService: new TypeOffersApiService(END_POINT, authToken) });
const eventsModel = new EventsModel({ eventsApiService: new EventsApiService(END_POINT, authToken) });
const filtersModel = new FiltersModel();

const tripMainPresenter = new TripMainPresenter({ destinationsModel, typeOffersModel, eventsModel });
const filtersPresenter = new FiltersPresenter({ eventsModel, filtersModel });
const eventsBoardPresenter = new EventsBoardPresenter({ destinationsModel, typeOffersModel, eventsModel, filtersModel });
const newEventPresenter = new NewEventPresenter({
  destinationsModel: destinationsModel,
  typeOffersModel: typeOffersModel,
  filtersModel: filtersModel,
  boardPresenter: eventsBoardPresenter,
});

tripMainPresenter.init();
filtersPresenter.init();
newEventPresenter.init();
eventsBoardPresenter.init({ newEventPresenter });

Promise.all([destinationsModel.init(), typeOffersModel.init()])
  .then(() => eventsModel.init())
  .catch(((error) => {
    eventsBoardPresenter.clearEventsBoard();
    createErrorMessage(error.message);
  }))
  .finally(() => newEventPresenter.activateNewEventButton());

