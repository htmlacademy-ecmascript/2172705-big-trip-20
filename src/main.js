import TripMainPresenter from './trip-main/presenter/trip-main-presenter.js';
import EventsPresenter from './events/presenter/events-presenter.js';

const tripMainPresenter = new TripMainPresenter();
const eventsPresenter = new EventsPresenter();

tripMainPresenter.init();
eventsPresenter.init();
