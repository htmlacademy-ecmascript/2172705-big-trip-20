import EventsModel from './blocks/events/model/events-model.js';
import TripMainPresenter from './blocks/trip-main/presenter/trip-main-presenter.js';
import EventsPresenter from './blocks/events/presenter/events-presenter.js';

const eventsModel = new EventsModel();
const tripMainPresenter = new TripMainPresenter();
const eventsPresenter = new EventsPresenter({eventsModel});

tripMainPresenter.init();
eventsPresenter.init();
