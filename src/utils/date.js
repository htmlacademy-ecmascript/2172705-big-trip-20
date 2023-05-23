import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import objectSupport from 'dayjs/plugin/objectSupport.js';

import { getRandomInteger } from '../utils/common.js';

dayjs.extend(duration);

//! Временный костыль для моков
dayjs.extend(objectSupport);

const DatetimeFormat = {
  EVENT_DATE: 'MMM D',
  SHORT_EVENT_DATE: 'D',
  EVENT_EDIT_DATE: 'DD/MM/YY HH:mm',
  TIME: 'HH:mm',
  D_H_M_DURATION: 'DD[D] HH[H] mm[M]',
  H_M_DURATION: 'HH[H] mm[M]',
  M_DURATION: 'mm[M]'
};

const stringToDayjsObj = (stringDate) => dayjs(stringDate);

const convertDatetime = (datetime, format) => dayjs(datetime).format(format);

const getDuration = (start, end) => dayjs.duration(dayjs(end).diff(dayjs(start)));

const formatDuration = (durationValue) => {
  if (durationValue.get('day')) {
    return durationValue.format(DatetimeFormat.D_H_M_DURATION);
  }
  if (!durationValue.get('day') && durationValue.get('hour')) {
    return durationValue.format(DatetimeFormat.H_M_DURATION);
  }

  return durationValue.format(DatetimeFormat.M_DURATION);
};

const sortByDurationDesc = (pointA, pointB) => {
  const pointADuration = getDuration(pointA.dateFrom, pointA.dateTo);
  const pointBDuration = getDuration(pointB.dateFrom, pointB.dateTo);

  return pointBDuration.asMilliseconds() - pointADuration.asMilliseconds();
};

const sortByDateFromAsc = (pointA, pointB) => dayjs(pointA.dateFrom).diff(dayjs(pointB.dateFrom));

const getRandomDate = (isDateFrom) => {
  if (isDateFrom) {
    return dayjs().subtract(getRandomInteger(1, 5), 'd').subtract(getRandomInteger(1, 23), 'h').subtract(getRandomInteger(1, 59), 'm').subtract(getRandomInteger(1, 59), 's');
  }

  return dayjs().add(getRandomInteger(1, 5), 'd').add(getRandomInteger(1, 23), 'h').add(getRandomInteger(1, 59), 'm').add(getRandomInteger(1, 59), 's');
};

const isDateFuture = (dateFrom) => dayjs().isBefore(dateFrom);

const isDatePast = (dateTo) => dayjs().isAfter(dateTo);

const isDatePresent = (dateFrom, dateTo) => dayjs().isAfter(dateFrom) && dayjs().isBefore(dateTo);

const isSameMonth = (dateFrom, dateTo) => dayjs(dateTo).isSame(dateFrom, 'M');

export {
  DatetimeFormat,
  stringToDayjsObj,
  convertDatetime,
  getDuration,
  formatDuration,
  sortByDurationDesc,
  sortByDateFromAsc,
  getRandomDate,
  isDateFuture,
  isDatePast,
  isDatePresent,
  isSameMonth
};
