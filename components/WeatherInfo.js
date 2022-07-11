import moment from 'moment';

const WeatherInfo = ({ temperature, weather, sunrise, sunset, isDaytime }) => {
  const currentUTCTime = moment.utc();
  const currentUTCSunset = moment.utc(sunset, 'X');
  const currentUTCSunrise = moment.utc(sunrise, 'X');
  const timeUntilSunset = currentUTCTime.to(currentUTCSunset, 'hours');
  const timeUntilSunrise = currentUTCTime.to(currentUTCSunrise, 'hours');

  return (
    <div className="temperature text-xl container items-center justify-center flex flex-col">
      <div className="temperature text-4xl">{temperature}°C</div>
      <div className="weather-description text-2xl container">{weather?.description}</div>
      {!isDaytime && <div className="sunrise"> sunrise in {timeUntilSunrise}</div>}
      {isDaytime && <div className="sunset">sunset in {timeUntilSunset}</div>}
    </div>
  );
};

export default WeatherInfo;

//

// console.log(
//   'current Time',
//   currentTimeInLocation.clone().format('HH:mm a'),
//   'sunrise',
//   sunriseTimeInLocation.clone().format('HH:mm a'),
//   'sunset',
//   sunsetTimeInLocation.clone().format('HH:mm a'),
//   'hours',
//   'currentTime'

// const timeUntilEvent = currentTimeInLocation.diff(sunriseTimeInLocation, 'hours');

// time until sunset current time, sunset in utc time

//

// 'timeUntilSunrise',
// timeUntilEvent
