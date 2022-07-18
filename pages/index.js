/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import { useState, useEffect } from 'react';
import { WEATHER_API_BASE_URL } from '../constants/constants';
import SearchForm from '../components/SearchForm';
import WeatherInfo from '../components/WeatherInfo';
import HeroLayout from '../components/HeroLayout';
import { convertKelvinToCelsius, adjustLocationNameForTimezone } from '../utilities/utilities';
import SiteHeader from '../components/SiteHeader';

export const Home = () => {
  const [location, setLocation] = useState('');
  const [locationHeader, setLocationHeader] = useState('');
  const [weather, setWeather] = useState(null);
  const [weatherDetails, setWeatherDetails] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [timezone, setTimezone] = useState(null);
  const [isDaytime, setIsDaytime] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const searchLocation = async () => {
    // don't allow for API spamming
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
      console.log(data);
      const celsiusTemp = Math.round(convertKelvinToCelsius(data.main.temp));
      setTemperature(celsiusTemp);

      setSunrise(data.sys.sunrise);
      setSunset(data.sys.sunset);
      setTimezone(data.timezone);
      setLoading(false);
      setLocationHeader(location.toLowerCase());
      setLocation('');
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
      if (!weather) {
        return;
      }

      const isDaytimeInLocation = () => {
        const currentUnix = Math.round(new Date().getTime() / 1000);

        return sunrise < currentUnix && currentUnix < sunset;
      };

      // updates display for day and night in location

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
        {!weather && <SiteHeader weather={weather} />}
        <WeatherInfo
          weather={weather}
          temperature={temperature}
          sunrise={sunrise}
          sunset={sunset}
          isDaytime={isDaytime}
          timezone={timezone}
          location={locationHeader}
          weatherDetails={weatherDetails}
        />

        <SearchForm
          location={location}
          handleLocation={handleLocation}
          handleKeypress={handleKeypress}
          searchLocation={searchLocation}
          loading={loading}
          weather={weather}
          isDaytime={isDaytime}
        />
      </HeroLayout>
    </div>
  );
};

export default Home;
