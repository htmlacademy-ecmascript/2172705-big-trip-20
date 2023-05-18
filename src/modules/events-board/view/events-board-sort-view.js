import AbstractView from '../../../framework/view/abstract-view.js';
import { capitalizeWord } from '../../../utils/common.js';
import { SortType } from '../../../const.js';

const createEventsSortItemTemplate = (name, isDisabled, isChecked) => (/*html*/`
    <div class="trip-sort__item  trip-sort__item--${name}">
      <input
        id="sort-${name}"
        class="trip-sort__input visually-hidden"
        type="radio"
        name="trip-sort"
        value="sort-${name}"
        data-sort-type="${name}"
        ${isDisabled ? 'disabled' : ''}
        ${isChecked ? 'checked' : ''}
      >
      <label class="trip-sort__btn" for="sort-${name}">${capitalizeWord(name)}</label>
    </div>`);

const createEventsSortTemplate = () => (/*html*/`
    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      ${Object.values(SortType).map((type, index) => createEventsSortItemTemplate(type.name, type.disabled, index === 0)).join('')}
    </form>`
);

export default class EventsBoardSortView extends AbstractView {
  #onSortTypeChange = null;

  constructor({ onSortTypeChange }) {
    super();
    this.#onSortTypeChange = onSortTypeChange;
    this.element.addEventListener('change', this.#sortTypeChangeHandler);
  }

  get template() {
    return createEventsSortTemplate();
  }

  #sortTypeChangeHandler = (evt) => this.#onSortTypeChange(evt.target.dataset.sortType.toUpperCase());
}
