const EMPTY_EVENTS_LIST_MESSAGE = 'Click New Event to create your first point';

const MAX_DISPLAYED_DESTINATIONS = 3;

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past'
};

const EventMode = {
  DEFAULT: 'default',
  EDITING: 'editing'
};

const SortType = {
  DAY: {
    name: 'day',
    isDisabled: false
  },
  EVENT: {
    name: 'event',
    isDisabled: true
  },
  TIME: {
    name: 'time',
    isDisabled: false
  },
  PRICE: {
    name: 'price',
    isDisabled: false
  },
  OFFERS: {
    name: 'OFFERS',
    isDisabled: true
  }
};

export { EMPTY_EVENTS_LIST_MESSAGE, MAX_DISPLAYED_DESTINATIONS, FilterType, EventMode, SortType };
