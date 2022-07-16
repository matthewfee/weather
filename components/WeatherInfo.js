import Image from 'next/image';
import SunsetIndicator from './SunsetIndicator';
import Icon from './Icon';
import { convertKelvinToCelsius } from '../utilities/utilities';
import DetailItem from './DetailItem';

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
  <div
    className={`m-0 relative flex-col items-center justify-between flex-nowrap px-2 md:px-4 text-white w-full h-fill transition-all duration-[1000ms] ease-in  ${
      weather ? 'opacity-100 blur-none' : 'opacity-0 h-0 blur-xl'
    } `}
  >
    {weather && (
      <div className="details-container flex justify-center items-center w-full px-0 mx-0">
        <ul className="weather-details mt-4 flex flex-row justify-center items-center gap-0 md:h-20 h-16 md:p-2 rounded-md bg-slate-600/25 w-full mx-0 shadow-sm shadow-black/25">
          <DetailItem styles="border-blue-400/25 border-r">
            <span className="flex items-center gap-1">
              <Image alt="max-temp" src="/icons/max.svg" width="20px" height="20px" />
              Max
            </span>
            <span className="details-info text-base font-bold">
              {Math.round(convertKelvinToCelsius(weatherDetails?.temp_max))}°C
            </span>
          </DetailItem>
          <DetailItem styles="border-blue-400/25 border-r">
            <span className="flex items-center gap-1">
              <Image alt="min-temp" src="/icons/min.svg" width="20px" height="20px" />
              Min
            </span>
            <span className="details-info text-base font-bold">
              {Math.round(convertKelvinToCelsius(weatherDetails?.temp_min))}°C
            </span>
          </DetailItem>

          <DetailItem styles="border-blue-400/25 border-r">
            <span className="flex items-center gap-1">
              <Image alt="feels-like" src="/icons/feelslike.svg" width="20px" height="20px" />
              Feel
            </span>
            <span className="details-info text-base font-bold">
              {Math.round(convertKelvinToCelsius(weatherDetails?.feels_like))}°C
            </span>
          </DetailItem>
          <DetailItem styles="border-blue-400/25 border-r">
            <span className="flex items-center gap-1">
              <Image
                alt="pressure"
                className="filter-white "
                src="/icons/pressure.svg"
                width="20px"
                height="20px"
              />
              Pressure
            </span>
            <span className="details-info text-base font-bold">{weatherDetails?.pressure}</span>
          </DetailItem>

          <DetailItem>
            <span className="flex items-center">
              <Image alt="humidity" src="/icons/humidity.svg" width="20px" height="20px" />
              Humidity <br />
            </span>
            <span className="details-info text-base font-bold">
              {weatherDetails?.humidity}%
            </span>{' '}
          </DetailItem>
        </ul>
      </div>
    )}

    <div className="weather-container-main md:px-4 flex flex-row flex-wrap justify-evenly items-center h-fill bg-slate-600/25 w-full mx-0 shadow-sm shadow-black/25 rounded my-2 py-4">
      {temperature && (
        <div className="temperature flex justify-center items-center   max-w-1/4 md:pr-4">
          <span className="md:text-8xl sm:text-7xl text-5xl p-0 font-semibold">{temperature}</span>
          <span className="text-6xl self-start mt-2">°</span>
        </div>
      )}
      {weather && (
        <div className="city-container md:max-w-[250px] max-w-[160px] flex flex-col justify-between items-center text-center relative">
          <h2
            className={`city-name md:text-2xl text-2xl md:pt-0 text-center tracking-wide ${
              isDaytime ? 'text-[#b8d7fc]' : 'text-white'
            }  font-semibold `}
          >
            {location}
          </h2>
          <SunsetIndicator
            sunrise={sunrise}
            sunset={sunset}
            isDaytime={isDaytime}
            timezone={timezone}
          />
        </div>
      )}

      {weather && (
        <div className="weather-icon flex flex-col justify-between pb-1 items-center relative w-1/4 mb-4">
          <div className="weather-icon mt-auto">
            <Icon iconID={weather?.icon} />
          </div>

          <div className="weather-description text-sm mt-2 text-center max-w-[100px] leading-none font-bold">
            {weather?.description}
          </div>
        </div>
      )}
    </div>
  </div>
);

export default WeatherInfo;
