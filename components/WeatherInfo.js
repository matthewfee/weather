const WeatherInfo = ({ temperature, weather }) => (
  <div className="temperature text-xl container items-center justify-center flex flex-col text-white">
    <div className="temperature text-6xl">{temperature}°C</div>
    <div className="weather-description text-xl container">{weather?.description}</div>
  </div>
);

export default WeatherInfo;
