import WeatherInfo from './WeatherInfo';

const TempDisplay = ({
  weather,
  temperature,
  sunrise,
  sunset,
  isDaytime,
  timezone,
  location,
  weatherDetails,
}) => (
  <div
    className={`temperature-result-container justify-center py-6 px-4 m-0 items-center border-2 transition-all duration-[4000ms] w-full ease-in border-red-600 ${
      weather ? 'h-full' : 'h-0'
    }`}
  >
    <WeatherInfo
      weather={weather}
      temperature={temperature}
      sunrise={sunrise}
      sunset={sunset}
      isDaytime={isDaytime}
      timezone={timezone}
      location={location}
      weatherDetails={weatherDetails}
    />
  </div>
);

export default TempDisplay;
