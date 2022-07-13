import moment from 'moment';

export const getEventTimeInLocation = (event, timezone) =>
  moment.utc(event, 'X').add(timezone, 'seconds');

export const getCurrentTimeInLocation = (timezone) => {
  const UTCOffsetMinutes = timezone / 60;
  return moment().utcOffset(UTCOffsetMinutes);
};

export const convertKelvinToCelsius = (kelvinTemp) => kelvinTemp - 273.15;

export const adjustLocationNameForTimezone = (location) => {
  let locationString = location.trim();

  if (location.trim() === 'Cambridge') {
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    if (userTimezone.includes('America')) {
      locationString = 'Cambridge';
    } else {
      locationString = 'Cambridge, UK';
    }
  }

  // API does not recognize Cambridge, MA by default

  if (location === 'Cambridge, MA') {
    locationString = 'Cambridge';
  }

  return locationString;
};
