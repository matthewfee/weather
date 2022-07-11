import Icon from './Icon';
import WeatherInfo from './WeatherInfo';

const TempDisplay = ({ weather, temperature, sunrise, sunset, isDaytime }) => (
  <div className="temperature-result-container flex container justify-center w-full p-6 h-60 ">
    <div className="weather-icon relative w-72 flex justify-center items-center">
      <Icon iconID={weather?.icon} />
    </div>

    {weather && (
      <WeatherInfo
        weather={weather}
        temperature={temperature}
        sunrise={sunrise}
        sunset={sunset}
        isDaytime={isDaytime}
      />
    )}
  </div>
);

export default TempDisplay;
