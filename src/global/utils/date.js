import { getRandomInteger } from '../utils/common.js';

import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const DatetimeFormat = {
  EVENT_DATE: 'MMM D',
  EVENT_EDIT_DATE: 'DD/MM/YY HH:mm',
  TIME: 'HH:mm',
  D_H_M_DURATION: 'DD[D] HH[H] mm[M]',
  H_M_DURATION: 'HH[H] mm[M]',
  M_DURATION: 'mm[M]'
};

const convertDatetime = (datetime, format) => dayjs(datetime).format(format);

const getDuration = (start, end) => {
  const startDatetime = dayjs(start);
  const endDatetime = dayjs(end);
  const durationValue = dayjs.duration(endDatetime.diff(startDatetime));

  if (durationValue.get('day')) {
    return durationValue.format(DatetimeFormat.D_H_M_DURATION);
  }
  if (!durationValue.get('day') && durationValue.get('hour')) {
    return durationValue.format(DatetimeFormat.H_M_DURATION);
  }

  return durationValue.format(DatetimeFormat.M_DURATION);
};

const getRandomDate = (isDateFrom) => {
  if (isDateFrom) {
    return dayjs().subtract(getRandomInteger(1, 5), 'd').subtract(getRandomInteger(1, 23), 'h').subtract(getRandomInteger(1, 59), 'm').subtract(getRandomInteger(1, 59), 's');
  }

  return dayjs().add(getRandomInteger(1, 5), 'd').add(getRandomInteger(1, 23), 'h').add(getRandomInteger(1, 59), 'm').add(getRandomInteger(1, 59), 's');
};

export { DatetimeFormat, convertDatetime, getDuration, getRandomDate };
