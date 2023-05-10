import DestinationsModel from './global/model/destinations-model.js';
import TypesModel from './global/model/types-model.js';
import EventsModel from './global/model/events-model.js';
import TripMainPresenter from './modules/trip-main/presenter/trip-main-presenter.js';
import EventsPresenter from './modules/events/presenter/events-presenter.js';

const destinationsModel = new DestinationsModel();
const typesModel = new TypesModel();
const eventsModel = new EventsModel({ typesModel });
const tripMainPresenter = new TripMainPresenter({ destinationsModel, typesModel, eventsModel });
const eventsPresenter = new EventsPresenter({ destinationsModel, typesModel, eventsModel });

tripMainPresenter.init();
eventsPresenter.init();
