import DestinationsModel from './model/destinations-model.js';
import TypeOffersModel from './model/type-offers-model.js';
import EventsModel from './model/events-model.js';
import TripMainPresenter from './modules/trip-main/presenter/trip-main-presenter.js';
import EventsPresenter from './modules/events/presenter/events-presenter.js';

const destinationsModel = new DestinationsModel();
const typeOffersModel = new TypeOffersModel();
const eventsModel = new EventsModel({ typeOffersModel });
const tripMainPresenter = new TripMainPresenter({ destinationsModel, typeOffersModel, eventsModel });
const eventsPresenter = new EventsPresenter({ destinationsModel, typeOffersModel, eventsModel });

tripMainPresenter.init();
eventsPresenter.init();
