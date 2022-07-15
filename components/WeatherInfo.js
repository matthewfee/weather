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
    className={`temperature temperature-result-container pt-20 m-0 relative text-xl container flex flex-wrap items-center justify-evenly md:px-10 text-white w-full transition-all duration-[1000ms] ease-in  ${
      weather ? 'opacity-100 h-full blur-none' : 'opacity-0 h-0 blur-xl'
    } `}
  >
    {temperature && (
      <div className="temperature text-8xl flex justify-center items-center h-36 max-w-1/4 pt-2">
        <span className="">{temperature}</span>°
      </div>
    )}
    {weather && (
      <div className="city-container h-36 flex flex-col justify-center items-center text-center relative">
        <h2 className="city-name mx-4 text-4xl text-center">{location}</h2>
        <SunsetIndicator
          sunrise={sunrise}
          sunset={sunset}
          isDaytime={isDaytime}
          timezone={timezone}
        />
      </div>
    )}
    {weather && (
      <div className="weather-icon flex flex-col justify-center pb-1 items-center relative w-1/4 h-36">
        <Icon iconID={weather?.icon} />
        <div className="weather-description text-sm mt-2 text-center max-w-[100px] absolute top-[103px] leading-none">
          {weather?.description}
        </div>
      </div>
    )}

    {weather && (
      <ul className="weather-details flex flex-row justify-center items-center gap-0 h-20 my-12 p-5 rounded-md bg-slate-600/25 w-full mx-10 shadow-md">
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
  </div>
);

export default WeatherInfo;
