import React from 'react';
import SunsetIndicator from './SunsetIndicator';
import DetailsSection from './DetailsSection';
import TemperatureContainer from './TemperatureContainer';
import CityContainer from './CityContainer';
import IconContainer from './IconContainer';
import WeatherSectionContainer from './WeatherSectionContainer';
import MainSectionContainer from './MainSectionContainer';

type WeatherInfoTypes = {
  temperature: number | null;
  location: string;
  sunrise: number | null;
  sunset: number | null;
  isDaytime: boolean;
  timezone: number | null;
  weather: {
    icon: string;
    description: string;
  };
  weatherDetails: {
    temp_max: number;
    temp_min: number;
    feels_like: number;
    pressure: number;
    humidity: number;
  } | null;
};

const WeatherInfo = ({
  temperature,
  location,
  sunrise,
  sunset,
  isDaytime,
  timezone,
  weather,
  weatherDetails,
}: WeatherInfoTypes) => (
  <WeatherSectionContainer weather={weather}>
    <DetailsSection weatherDetails={weatherDetails} />
    <MainSectionContainer>
      <TemperatureContainer temperature={temperature} />
      <div className="city-container md:max-w-[250px] max-w-[160px] flex flex-col justify-between items-center text-center relative">
        <CityContainer location={location} isDaytime={isDaytime} />
        <SunsetIndicator
          sunrise={sunrise}
          sunset={sunset}
          isDaytime={isDaytime}
          timezone={timezone}
        />
      </div>
      <IconContainer weather={weather} />
    </MainSectionContainer>
  </WeatherSectionContainer>
);

export default WeatherInfo;
