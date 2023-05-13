import AbstractView from '../../../framework/view/abstract-view.js';

const createFiltersItemTemplate = ([type, count], isSelected) => (/*html*/`
  <div class="trip-filters__filter">
    <input
      id="filter-${type}"
      class="trip-filters__filter-input
      visually-hidden"
      type="radio"
      name="trip-filter"
      value="${type}"
      ${isSelected ? 'checked' : ''}
      ${count === 0 ? 'disabled' : ''}
    >

    <label
      class="trip-filters__filter-label"
      for="filter-${type}">
      ${type}
    </label>
  </div>`);

const createFiltersTemplate = (filters) => (/*html*/`
  <form class="trip-filters" action="#" method="get">
    ${Object.entries(filters).map((filter, index) => createFiltersItemTemplate(filter, index === 0)).join('')}
  </form>`);

export default class TripMainFiltersView extends AbstractView {
  #filters = [];

  constructor({ filters }) {
    super();
    this.#filters = filters;
  }

  get template() {
    return createFiltersTemplate(this.#filters);
  }
}
