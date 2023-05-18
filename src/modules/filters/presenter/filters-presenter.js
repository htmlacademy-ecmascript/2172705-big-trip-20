import { render } from '../../../framework/render.js';
import { generateFilters } from '../../../utils/filters.js';

import EventsBoardFiltersView from '../view/filters-view.js';

const tripFilters = document.querySelector('.trip-controls__filters');

export default class FiltersPresenter {
  #onFiltersChange = null;

  #generatedFilters = [];

  constructor({ onFiltersChange }) {
    this.#onFiltersChange = onFiltersChange;
  }

  init({ events }) {
    this.#generatedFilters = generateFilters(events.slice());

    this.#renderFilters();
  }

  #renderFilters() {
    render(new EventsBoardFiltersView({ filters: this.#generatedFilters, onFiltersChange: this.#onFiltersChange }), tripFilters);
  }
}
