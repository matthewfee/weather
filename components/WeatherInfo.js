const WeatherInfo = ({ temperature, weather }) => (
  <div className="temperature text-xl container items-center mx-2 justify-center flex flex-col text-white w-[150px]">
    <div className="temperature text-6xl">{temperature}°C</div>
    <div className="weather-description text-xl container">{weather?.description}</div>
  </div>
);

export default WeatherInfo;
