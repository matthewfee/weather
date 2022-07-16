import SunsetIndicator from './SunsetIndicator';
import DetailsSection from './DetailsSection';
import TemperatureContainer from './TemperatureContainer';
import CityContainer from './CityContainer';
import IconContainer from './IconContainer';
import WeatherSectionContainer from './WeatherSectionContainer';

const WeatherInfo = ({
  temperature,
  location,
  sunrise,
  sunset,
  isDaytime,
  timezone,
  weather,
  weatherDetails,
}) => (
  <WeatherSectionContainer weather={weather}>
    {weather && <DetailsSection weatherDetails={weatherDetails} />}

    <div className="weather-container-main md:px-4 flex flex-row flex-wrap justify-evenly items-center h-fill my-8 py-4 bg-slate-600/25 w-full mx-0 shadow-sm shadow-black/25 rounded ">
      {temperature && <TemperatureContainer temperature={temperature} />}
      {weather && (
        <div className="md:max-w-[250px] max-w-[160px] flex flex-col justify-between items-center text-center relative">
          <CityContainer location={location} isDaytime={isDaytime} />
          <SunsetIndicator
            sunrise={sunrise}
            sunset={sunset}
            isDaytime={isDaytime}
            timezone={timezone}
          />
        </div>
      )}
      {weather && <IconContainer weather={weather} />}
    </div>
  </WeatherSectionContainer>
);

export default WeatherInfo;
