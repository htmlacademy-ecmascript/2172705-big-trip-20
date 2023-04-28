import TripMainPresenter from './trip-main/presenter/trip-main-presenter.js';
import TripEventsPresenter from './trip-events/presenter/trip-events-presenter.js';
import EventEditPresenter from './event-edit/presenter/event-edit-presenter.js';

const tripMainPresenter = new TripMainPresenter();
const tripEventsPresenter = new TripEventsPresenter();
const eventEditPresenter = new EventEditPresenter();

tripMainPresenter.init();
tripEventsPresenter.init();
eventEditPresenter.init();
