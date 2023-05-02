import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import duration from 'dayjs/plugin/duration';

dayjs.extend(customParseFormat);
dayjs.extend(duration);

const Format = {
  EVENT_DATE: 'MMM D',
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
    return durationValue.format(Format.D_H_M_DURATION);
  } else if (!durationValue.get('day') && durationValue.get('hour')) {
    return durationValue.format(Format.H_M_DURATION);
  }

  return durationValue.format(Format.M_DURATION);
};

export { Format, convertDatetime, getDuration };
