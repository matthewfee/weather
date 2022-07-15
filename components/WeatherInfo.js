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
    className={`temperature temperature-result-container pt-4 m-0 relative text-xl container flex flex-wrap items-start md:justify-evenly justify-evenly px-0 md:px-8 text-white w-full transition-all duration-[1000ms] ease-in  ${
      weather ? 'opacity-100 h-full blur-none' : 'opacity-0 h-0 blur-xl'
    } `}
  >
    {weather && (
      <ul className="weather-details md:mt-4 flex flex-row justify-center items-center gap-0 md:h-20 h-16 md:p-2 rounded-md bg-slate-600/25 md:w-fit w-full mx-0 shadow-sm shadow-black/25">
        <DetailItem styles="border-blue-400/25 border-r">
          <span className="flex items-center gap-1">
            <Image src="/icons/max.svg" width="20px" height="20px" />
            Max
          </span>
          <span className="details-info text-base font-bold">
            {Math.round(convertKelvinToCelsius(weatherDetails?.temp_max))}°C
          </span>
        </DetailItem>
        <DetailItem styles="border-blue-400/25 border-r">
          <span className="flex items-center gap-1">
            <Image src="/icons/min.svg" width="20px" height="20px" />
            Min
          </span>
          <span className="details-info text-base font-bold">
            {Math.round(convertKelvinToCelsius(weatherDetails?.temp_min))}°C
          </span>
        </DetailItem>

        <DetailItem styles="border-blue-400/25 border-r">
          <span className="flex items-center gap-1">
            <Image src="/icons/feelslike.svg" width="20px" height="20px" />
            Feels like
          </span>
          <span className="details-info text-base font-bold">
            {Math.round(convertKelvinToCelsius(weatherDetails?.feels_like))}°C
          </span>
        </DetailItem>
        <DetailItem styles="border-blue-400/25 border-r">
          <span className="flex items-center gap-1">
            <Image className="filter-white " src="/icons/pressure.svg" width="20px" height="20px" />
            Pressure
          </span>
          <span className="details-info text-sm font-bold">{weatherDetails?.pressure} hPa</span>
        </DetailItem>

        <DetailItem>
          <span className="flex items-center">
            <Image src="/icons/humidity.svg" width="20px" height="20px" />
            Humidity <br />
          </span>
          <span className="details-info text-base font-bold">{weatherDetails?.humidity}%</span>{' '}
        </DetailItem>
      </ul>
    )}

    {temperature && (
      <div className="temperature flex justify-center items-center md:h-24 h-24  max-w-1/4 md:pr-4">
        <span className="md:text-8xl text-5xl p-0 font-semibold">{temperature}</span>
        <span className="text-6xl self-start mt-6">°</span>
      </div>
    )}
    {weather && (
      <div className="city-container md:max-w-[250px] max-w-[160px] md:h-24 h-24 flex flex-col justify-between items-center text-center relative mb-4 ">
        <h2 className="city-name md:text-3xl mt-auto text-2xl text-[#B8E2FF] md:pt-0 text-center tracking-wide">
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
      <div className="weather-icon flex flex-col justify-between pb-1 items-center relative w-1/4 md:h-24 h-24  mb-4">
        <div className="weather-icon mt-auto">
          <Icon iconID={weather?.icon} />
        </div>

        <div className="weather-description text-sm mt-2 text-center max-w-[100px] leading-none font-bold">
          {weather?.description}
        </div>
      </div>
    )}
  </div>
);

export default WeatherInfo;
