import { render, replace } from '../../../framework/render.js';

import EventItemView from '../view/event-item-view.js';
import EventEditItemView from '../view/event-edit-item-view.js';

export default class EventPresenter {
  #data = {};
  #eventsListContainer = null;

  constructor({ eventsListContainer }) {
    this.#eventsListContainer = eventsListContainer;
  }

  init({ data: { destinations, types, event } }) {
    this.#data = { destinations, types, event };

    const onDocumentEscapeKeydown = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceEditFormToEventItem();
        document.removeEventListener('keydown', onDocumentEscapeKeydown);
      }
    };

    const eventItem = new EventItemView({
      data: this.#data,
      onRollupButtonClick: () => {
        replaceEventItemToEditForm();
        document.addEventListener('keydown', onDocumentEscapeKeydown);
      }
    });

    const eventEditItem = new EventEditItemView({
      data: this.#data,
      onRollupButtonClick: () => {
        replaceEditFormToEventItem();
        document.removeEventListener('keydown', onDocumentEscapeKeydown);
      },
      onEditFormSubmit: (evt) => {
        evt.preventDefault();
        replaceEditFormToEventItem();
        document.removeEventListener('keydown', onDocumentEscapeKeydown);
      },
    });

    render(eventItem, this.#eventsListContainer.element);

    function replaceEventItemToEditForm() {
      replace(eventEditItem, eventItem);
    }

    function replaceEditFormToEventItem() {
      replace(eventItem, eventEditItem);
    }
  }
}
