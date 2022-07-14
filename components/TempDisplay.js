import Icon from './Icon';
import SunsetIndicator from './SunsetIndicator';
import WeatherInfo from './WeatherInfo';

const TempDisplay = ({ weather, temperature, sunrise, sunset, isDaytime, timezone }) => (
  <div
    className={`temperature-result-container flex container justify-center p-1 m-0 ${
      weather ? `h-60 opacity-100` : `h-0 opacity-0`
    } relative transition-all duration-[2000ms] `}
  >
    {weather && (
      <div className="weather-icon w-[150px] mx-2 flex justify-center items-center relative">
        <Icon iconID={weather?.icon} />
      </div>
    )}

    {weather && (
      <WeatherInfo
        weather={weather}
        temperature={temperature}
        sunrise={sunrise}
        sunset={sunset}
        isDaytime={isDaytime}
        timezone={timezone}
      />
    )}

    {weather && (
      <SunsetIndicator
        sunrise={sunrise}
        sunset={sunset}
        isDaytime={isDaytime}
        timezone={timezone}
      />
    )}
  </div>
);

export default TempDisplay;
