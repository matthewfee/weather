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
    className={`temperature temperature-result-container pt-4 m-0 relative text-xl container flex flex-wrap items-start md:justify-evenly justify-between px-4 md:px-8 text-white w-full transition-all duration-[1000ms] ease-in  ${
      weather ? 'opacity-100 h-full blur-none' : 'opacity-0 h-0 blur-xl'
    } `}
  >
    {weather && (
      <ul className="weather-details md:mt-4 flex flex-row justify-center items-center gap-0 md:h-20 h-16 md:p-2 rounded-md bg-slate-600/25 md:w-fit w-full mx-0 shadow-sm shadow-black/25">
        <DetailItem styles="border-white/25 border-r">
          Max <br />
          <span className="details-info text-base font-bold">
            {Math.round(convertKelvinToCelsius(weatherDetails?.temp_max))}°C
          </span>
        </DetailItem>
        <DetailItem styles="border-white/25 border-r">
          Min <br />
          <span className="details-info text-base font-bold">
            {Math.round(convertKelvinToCelsius(weatherDetails?.temp_min))}°C
          </span>
        </DetailItem>

        <DetailItem styles="border-white/25 border-r">
          Feels like <br />
          <span className="details-info text-base font-bold">
            {Math.round(convertKelvinToCelsius(weatherDetails?.feels_like))}°C
          </span>
        </DetailItem>
        <DetailItem styles="border-white/25 border-r">
          Pressure <br />{' '}
          <span className="details-info text-sm font-bold">{weatherDetails?.pressure} hPa</span>
        </DetailItem>

        <DetailItem>
          Humidity <br />
          <span className="details-info text-base font-bold">{weatherDetails?.humidity}%</span>{' '}
        </DetailItem>
      </ul>
    )}

    {temperature && (
      <div className="temperature flex justify-center items-center md:h-36 h-28 max-w-1/4 md:pr-4">
        <span className="md:text-8xl text-5xl p-0 font-semibold">{temperature}</span>
        <span className="text-6xl self-start mt-6">°</span>
      </div>
    )}
    {weather && (
      <div className="city-container md:max-w-[250px] max-w-[100px] md:h-36 h-28 flex flex-col justify-center items-center text-center relative">
        <h2 className="city-name md:text-3xl text-3xl md:pt-0 text-center tracking-wide">
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
      <div className="weather-icon flex flex-col justify-center pb-1 items-center relative w-1/4 md:h-36 h-28">
        <Icon iconID={weather?.icon} />
        <div className="weather-description text-sm mt-2 text-center max-w-[100px] leading-none">
          {weather?.description}
        </div>
      </div>
    )}
  </div>
);

export default WeatherInfo;
