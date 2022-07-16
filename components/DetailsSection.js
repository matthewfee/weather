import Image from 'next/image';
import DetailItem from './DetailItem';
import { convertKelvinToCelsius } from '../utilities/utilities';

const DetailsSection = ({ weatherDetails }) => (
  <div className="details-container flex justify-center items-center w-full px-0 mx-0 backdrop-blur-sm">
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
        <span className="details-info text-base font-bold">{weatherDetails?.humidity}%</span>{' '}
      </DetailItem>
    </ul>
  </div>
);

export default DetailsSection;
