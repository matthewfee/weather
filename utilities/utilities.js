import moment from 'moment';

export const getEventTimeInLocation = (event, timezone) =>
  moment.utc(event, 'X').add(timezone, 'seconds');

export const getCurrentTimeInLocation = (timezone) => {
  const UTCOffsetMinutes = timezone / 60;
  return moment().utcOffset(UTCOffsetMinutes);
};
