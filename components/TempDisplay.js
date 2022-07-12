import Icon from './Icon';
import SunsetIndicator from './SunsetIndicator';
import WeatherInfo from './WeatherInfo';

const TempDisplay = ({ weather, temperature, sunrise, sunset, isDaytime, timezone }) => (
  <div className="temperature-result-container flex container justify-center p-1 m-0 h-60 relative">
    <div className="weather-icon w-[150px] mx-2 flex justify-center items-center relative">
      <Icon iconID={weather?.icon} />
    </div>

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
