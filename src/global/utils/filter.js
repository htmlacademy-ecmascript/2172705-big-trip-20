import { FilterType } from '../const.js';
import { isDateFuture, isDatePast, isDatePresent } from './date.js';

const initFilterTypes = (events) => {
  const filterTypes = {};

  for (const name of Object.values(FilterType)) {
    if (name === FilterType.EVERYTHING) {
      filterTypes[name] = events.length;
      continue;
    }

    filterTypes[name] = 0;
  }

  return filterTypes;
};

const getFilterType = (event) => {
  if (isDateFuture(event.dateFrom)) {
    return FilterType.FUTURE;
  }
  if (isDatePast(event.dateTo)) {
    return FilterType.PAST;
  }
  if (isDatePresent(event.dateFrom, event.dateTo)) {
    return FilterType.PRESENT;
  }
};

const generateFilters = (events) => events.reduce((result, event) => {
  result[getFilterType(event)]++;

  return result;
},
{
  ...initFilterTypes(events)
});

export { generateFilters };
