import { getCurrentTimeInLocation, getEventTimeInLocation } from '../utilities/utilities';

const WeatherInfo = ({ temperature, weather, sunrise, sunset, isDaytime, timezone }) => {
  const currentTimeInLocation = getCurrentTimeInLocation(timezone);
  const sunriseTimeInLocation = getEventTimeInLocation(sunrise, timezone);
  const sunsetTimeInLocation = getEventTimeInLocation(sunset, timezone);
  const cSTring = currentTimeInLocation.clone().format('YYYY-MM-DD HH:mm');

  // add day before calcualting date if time is past

  if (sunriseTimeInLocation.isSameOrBefore(cSTring)) {
    sunriseTimeInLocation.add('1', 'days');
  }

  if (sunsetTimeInLocation.isSameOrBefore(cSTring)) {
    sunsetTimeInLocation.add('1', 'days');
  }

  const timeUntilSunset = currentTimeInLocation.to(sunsetTimeInLocation, 'hours');
  const timeUntilSunrise = currentTimeInLocation.to(sunriseTimeInLocation, 'hours');

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
