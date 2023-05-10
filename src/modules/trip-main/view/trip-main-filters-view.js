import AbstractView from '../../../framework/view/abstract-view.js';

const isFilterDisabled = (count) => !count ? 'disabled' : '';

const isFilterSelected = (isSelected) => isSelected ? 'checked' : '';

const createTripMainFilterItemTemplate = (filter, isSelected) => (/*html*/`
  <div class="trip-filters__filter">
    <input
    id="filter-${filter.type}"
    class="trip-filters__filter-input
    visually-hidden"
    type="radio"
    name="trip-filter"
    value="${filter.type}"
    ${isFilterSelected(isSelected)}
    ${isFilterDisabled(filter.count)}>

    <label
    class="trip-filters__filter-label"
    for="filter-${filter.type}">
    ${filter.type}
    </label>
  </div>`);

const createTripMainFiltersTemplate = (filters) => (/*html*/`
  <form class="trip-filters" action="#" method="get">
    ${filters.map((filter, index) => createTripMainFilterItemTemplate(filter, index === 0)).join('')}
  </form>`);

export default class TripMainFiltersView extends AbstractView {
  #filters = [];

  constructor({ filters }) {
    super();
    this.#filters = filters;
  }

  get template() {
    return createTripMainFiltersTemplate(this.#filters);
  }
}
