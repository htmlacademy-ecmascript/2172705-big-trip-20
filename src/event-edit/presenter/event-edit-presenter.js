import { render, RenderPosition } from '../../render.js';

import EventEditContainerView from '../view/event-edit-container-view.js';
import EventEditView from '../view/event-edit-view.js';
import EventEditDetailsView from '../view/event-edit-details-view.js';
import EventEditOffersView from '../view/event-edit-offers-view.js';
import EventEditOffersListView from '../view/event-edit-offers-list-view.js';
import EventEditOffersSelectorView from '../view/event-edit-offers-item-view.js';
import EventEditDestinationView from '../view/event-edit-destination-view.js';
import EventEditDestinationPhotosContainerView from '../view/event-edit-destination-photos-container-view';
import EventEditDestinationPhotosListView from '../view/event-edit-destination-photos-list-view.js';
import EventEditDestinationPhotosItemView from '../view/event-edit-destination-photos-item-view.js';

export default class EventEditPresenter {
  eventEditContainerView = new EventEditContainerView();
  eventEditView = new EventEditView();
  eventEditDetailsView = new EventEditDetailsView();
  eventEditOffersView = new EventEditOffersView();
  eventEditOffersListView = new EventEditOffersListView();
  eventEditDestinationView = new EventEditDestinationView();
  eventEditDestinationPhotosContainerView = new EventEditDestinationPhotosContainerView();
  eventEditDestinationPhotosListView = new EventEditDestinationPhotosListView();

  init() {
    this.tripEventsList = document.querySelector('.trip-events__list');

    render(this.eventEditContainerView, this.tripEventsList, RenderPosition.AFTERBEGIN);
    render(this.eventEditView, this.eventEditContainerView.getElement());
    render(this.eventEditDetailsView, this.eventEditView.getElement());
    render(this.eventEditOffersView, this.eventEditDetailsView.getElement());
    render(this.eventEditOffersListView, this.eventEditOffersView.getElement());
    render(this.eventEditDestinationView, this.eventEditDetailsView.getElement());
    render(this.eventEditDestinationPhotosContainerView, this.eventEditDestinationView.getElement());
    render(this.eventEditDestinationPhotosListView, this.eventEditDestinationView.getElement());

    for (let i = 0; i < 8; i++) {
      render(new EventEditOffersSelectorView(), this.eventEditOffersListView.getElement());
    }

    for (let i = 0; i < 4; i++) {
      render(new EventEditDestinationPhotosItemView(), this.eventEditDestinationPhotosListView.getElement());
    }
  }
}
