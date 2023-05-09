import EventsModel from './modules/events/model/events-model.js';
import TripMainPresenter from './modules/trip-main/presenter/trip-main-presenter.js';
import EventsPresenter from './modules/events/presenter/events-presenter.js';

const eventsModel = new EventsModel();
const tripMainPresenter = new TripMainPresenter();
const eventsPresenter = new EventsPresenter({eventsModel});

tripMainPresenter.init();
eventsPresenter.init();
