import moment from 'moment';
import { DATE_FORMAT } from '../constants/constants';
import { getCurrentTimeInLocation, getEventTimeInLocation } from '../utilities/utilities';

const WeatherInfo = ({ temperature, weather, sunrise, sunset, isDaytime, timezone }) => {
  const currentTimeInLocation = getCurrentTimeInLocation(timezone);
  const sunriseTimeInLocation = getEventTimeInLocation(sunrise, timezone);
  const sunsetTimeInLocation = getEventTimeInLocation(sunset, timezone);

  // add day before calcualting date if time is past

  if (sunriseTimeInLocation.isSameOrBefore(currentTimeInLocation)) {
    sunriseTimeInLocation.add('1', 'days');
  }

  if (sunriseTimeInLocation.isSameOrBefore(currentTimeInLocation)) {
    sunsetTimeInLocation.add('1', 'days');
  }

  // generate strings from data to calculate time remaining

  const cSTring = currentTimeInLocation.clone().format(DATE_FORMAT);
  const sunriseString = sunriseTimeInLocation.clone().format(DATE_FORMAT);
  const sunsetString = sunsetTimeInLocation.clone().format(DATE_FORMAT);

  const timeUntilSunset = moment(cSTring).to(sunsetString, 'hours');
  const timeUntilSunrise = moment(cSTring).to(sunriseString, 'hours');

  return (
    <div className="temperature text-xl container items-center justify-center flex flex-col text-white">
      <div className="temperature text-4xl">{temperature}°C</div>
      <div className="weather-description text-2xl container">{weather?.description}</div>
      {!isDaytime && <div className="sunrise"> sunrise in {timeUntilSunrise}</div>}
      {isDaytime && <div className="sunset">sunset in {timeUntilSunset}</div>}
    </div>
  );
};

export default WeatherInfo;
