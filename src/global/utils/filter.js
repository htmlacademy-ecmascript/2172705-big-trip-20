import { FilterType } from '../const.js';
import { isDateFuture, isDatePast, isDatePresent } from './date.js';

const Filter = {
  [FilterType.EVERYTHING]: (events) => events,
  [FilterType.FUTURE]: (events) => events.filter((event) => isDateFuture(event.dateFrom)),
  [FilterType.PAST]: (events) => events.filter((event) => isDatePast(event.dateTo)),
  [FilterType.PRESENT]: (events) => events.filter((event) => isDatePresent(event.dateFrom, event.dateTo))
};

const generateFilters = (events) => Object.entries(Filter).map(([type, filteredEvents]) => ({
  type,
  count: filteredEvents(events).length
}));

export { generateFilters };
