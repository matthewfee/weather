import moment, { Moment } from 'moment';
import { DATE_FORMAT } from '../constants/constants';
import { getCurrentTimeInLocation, getEventTimeInLocation } from '../utilities/utilities';

const SunsetIndicator = ({ sunrise, sunset, isDaytime, timezone }) => {
  const currentTimeInLocation = getCurrentTimeInLocation(timezone);
  const sunriseTimeInLocation = getEventTimeInLocation(sunrise, timezone);
  const sunsetTimeInLocation = getEventTimeInLocation(sunset, timezone);

  // add day before calcualting date if time is past

  const currentString = currentTimeInLocation.clone().format(DATE_FORMAT);

  if (sunriseTimeInLocation.isSameOrBefore(currentString)) {
    sunriseTimeInLocation.add('1', 'days');
  }

  if (sunriseTimeInLocation.isSameOrBefore(currentString)) {
    sunsetTimeInLocation.add('1', 'days');
  }

  // generate strings from data to calculate time remaining

  const sunriseString = sunriseTimeInLocation.clone().format(DATE_FORMAT);
  const sunsetString = sunsetTimeInLocation.clone().format(DATE_FORMAT);

  const timeUntilSunset: string = moment(currentString).to(sunsetString);
  const timeUntilSunrise: string = moment(currentString).to(sunriseString);

  return (
    <div className="sun-time text-sm mt-4 font-bold text-white">
      {!isDaytime && <div className="sunrise"> sunrise in {timeUntilSunrise}</div>}
      {isDaytime && <div className="sunset">sunset in {timeUntilSunset}</div>}
    </div>
  );
};

export default SunsetIndicator;
