/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import { useState, useEffect } from 'react';
import { WEATHER_API_BASE_URL } from '../constants/constants';
import SearchForm from '../components/SearchForm';
import WeatherInfo from '../components/WeatherInfo';
import HeroLayout from '../components/HeroLayout';
import { convertKelvinToCelsius, adjustLocationNameForTimezone } from '../utilities/utilities';
import SiteHeader from '../components/SiteHeader';
import React from 'react';

interface WeatherTypes {
  icon: string;
  description: string;
}

type coordinatesType = {
  lat: number;
  lon: number;
} | null;

type dailyTemps = {
  max: number;
  min: number;
} | null;

export const Home = () => {
  const [location, setLocation] = useState('');
  const [locationHeader, setLocationHeader] = useState('');
  const [weather, setWeather] = useState<WeatherTypes | null>(null);
  const [weatherDetails, setWeatherDetails] = useState(null);
  const [temperature, setTemperature] = useState<number | null>(null);
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [timezone, setTimezone] = useState(null);
  const [isDaytime, setIsDaytime] = useState(true);
  const [loading, setLoading] = useState(false);
  const [coordinates, setCoordinates] = useState<coordinatesType>(null);
  const [dailyTemps, setDailyTemps] = useState<dailyTemps>(null);

  const handleLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const searchLocation = async () => {
    // do not execute API call if already loading a result
    if (loading) {
      return;
    }

    setLoading(true);

    const locationString = adjustLocationNameForTimezone(location);

    const requestURL = `${WEATHER_API_BASE_URL}?q=${locationString}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`;
    try {
      const response = await axios.get(requestURL);
      const { data } = response;
      setWeather(data.weather[0]);
      setWeatherDetails(data.main);

      const celsiusTemp = Math.round(convertKelvinToCelsius(data.main.temp));
      setTemperature(celsiusTemp);

      console.log(data);

      // updates state with data and resets input form

      setSunrise(data.sys.sunrise);
      setSunset(data.sys.sunset);
      setTimezone(data.timezone);

      // set long coordinates

      setCoordinates({ lon: data.coord.lon, lat: data.coord.lat });
      setLoading(false);
      setLocationHeader(location.toLowerCase());
      setLocation('');
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  // API Request for daily high and low using lat and lon data

  useEffect(() => {
    const getDailyForecast = async () => {
      if (coordinates) {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/3.0/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=current,minutely,hourly&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
          );
          const data = await response.data.daily[0].temp;
          console.log('DAILY', data);
          setDailyTemps(data);
        } catch (error) {
          console.error(error);
        }
      }
    };
    getDailyForecast();
  }, [coordinates]);

  const handleKeypress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      searchLocation();
    }
  };

  useEffect(() => {
    // checks daytime status on new location searches

    const calculateTimeDifferences = () => {
      if (!weather) {
        return;
      }

      const isDaytimeInLocation = () => {
        const currentUnix = Math.round(new Date().getTime() / 1000);

        if (sunrise && sunset) {
          return sunrise < currentUnix && currentUnix < sunset;
        }
      };

      // updates state for day and night in location

      if (isDaytimeInLocation()) {
        setIsDaytime(true);
      } else {
        setIsDaytime(false);
      }
    };
    calculateTimeDifferences();
  }, [sunset, sunrise, timezone]);

  return (
    <div data-theme="winter" className="font-lato">
      <HeroLayout isDaytime={isDaytime} weather={weather}>
        {!weather && <SiteHeader />}
        {weather && (
          <WeatherInfo
            weather={weather}
            temperature={temperature}
            sunrise={sunrise}
            sunset={sunset}
            isDaytime={isDaytime}
            timezone={timezone}
            location={locationHeader}
            weatherDetails={weatherDetails}
            dailyTemps={dailyTemps}
          />
        )}

        <SearchForm
          location={location}
          handleLocation={handleLocation}
          handleKeypress={handleKeypress}
          searchLocation={searchLocation}
          loading={loading}
          weather={weather}
        />
      </HeroLayout>
    </div>
  );
};

export default Home;
