import { render, RenderPosition } from '../../../framework/render.js';

import TripMainInfoView from '../view/trip-main-info-view.js';
import TripMainFiltersView from '../view/trip-main-filters-view.js';

const tripMainContainer = document.querySelector('.trip-main');
const tripFiltersContainer = document.querySelector('.trip-controls__filters');

export default class TripMainPresenter {
  init() {
    render(new TripMainInfoView(), tripMainContainer, RenderPosition.AFTERBEGIN);
    render(new TripMainFiltersView(), tripFiltersContainer);
  }
}
