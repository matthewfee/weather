/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import 'moment-timezone';
import { useState, useEffect } from 'react';
import { DARK_THEME, LIGHT_THEME, WEATHER_API_BASE_URL } from '../constants/constants';
import SearchForm from '../components/SearchForm';
import TempDisplay from '../components/TempDisplay';
import HeroLayout from '../components/HeroLayout';
import { getCurrentTimeInLocation, getEventTimeInLocation } from '../utilities/utilities';

export const Home = () => {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [theme, setTheme] = useState(LIGHT_THEME);
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [timezone, setTimezone] = useState(null);
  const [isDaytime, setIsDaytime] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const convertKelvinToCelsius = (kelvinTemp) => kelvinTemp - 273.15;

  const searchLocation = async () => {
    // don't allow for API spamming
    if (loading) {
      return;
    }

    setLoading(true);

    const requestURL = `${WEATHER_API_BASE_URL}?q=${location}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`;
    try {
      const response = await axios.get(requestURL);
      const { data } = response;
      setWeather(data.weather[0]);

      const celsiusTemp = Math.round(convertKelvinToCelsius(data.main.temp));
      setTemperature(celsiusTemp);

      setSunrise(data.sys.sunrise);
      setSunset(data.sys.sunset);
      setTimezone(data.timezone);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleKeypress = (e) => {
    if (e.key === 'Enter') {
      searchLocation();
    }
  };

  useEffect(() => {
    const calculateTimeDifferences = () => {
      // calculates UTC offset for location

      const currentTimeInLocation = getCurrentTimeInLocation(timezone);
      const sunriseTimeInLocation = getEventTimeInLocation(sunrise, timezone);
      const sunsetTimeInLocation = getEventTimeInLocation(sunset, timezone);

      const isDaytimeInLocation = () =>
        currentTimeInLocation.isBetween(sunriseTimeInLocation, sunsetTimeInLocation);

      // updates display for day and night in location

      if (isDaytimeInLocation()) {
        setTheme(LIGHT_THEME);
        setIsDaytime(true);
      } else {
        setTheme(DARK_THEME);
        setIsDaytime(false);
      }
    };
    calculateTimeDifferences();
  }, [sunset, sunrise, timezone]);

  return (
    <wrapper data-theme={theme}>
      <HeroLayout isDaytime={isDaytime}>
        {weather && <h1>{isDaytime ? 'day' : 'night'}</h1>}
        {!weather && <h1 className="text-white">search the weather...</h1>}
        <SearchForm
          location={location}
          handleLocation={handleLocation}
          handleKeypress={handleKeypress}
          searchLocation={searchLocation}
          loading={loading}
        />
        <TempDisplay
          weather={weather}
          temperature={temperature}
          sunrise={sunrise}
          sunset={sunset}
          isDaytime={isDaytime}
        />
      </HeroLayout>
    </wrapper>
  );
};

export default Home;
