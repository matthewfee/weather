import { useState, useEffect } from 'react';
import { nightBackgroundImageString, dayBackgroundImageString } from '../constants/constants';
import sunny from '../public/backgrounds/sunny.jpg';
import cloudy from '../public/backgrounds/cloudy.jpg';
import rainy from '../public/backgrounds/rainy.jpg';
import night from '../public/backgrounds/night.jpg';
import nightCloudy from '../public/backgrounds/nightCloudy.jpg';
import scatteredClouds from '../public/backgrounds/scatteredclouds.jpg';
import fewClouds from '../public/backgrounds/fewclouds.jpg';
import breakingClouds from '../public/backgrounds/breakingclouds.jpg';
import clearSky from '../public/backgrounds/clear.jpg';

const HeroLayout = ({ children, isDaytime, weather }) => {
  const [background, setBackground] = useState(`url(${rainy.src})`);

  const getBackground = () => {
    let imageBackground = `url(${sunny.src})`;

    // match to nighttime weather backgorunds

    if (!isDaytime) {
      imageBackground = `url(${night.src})`;

      if (weather?.description?.includes('cloud')) {
        imageBackground = `url(${nightCloudy.src})`;
      }
    }

    // match to daytime weather backgrounds

    if (isDaytime) {
      if (weather?.description?.includes('clear sky')) {
        imageBackground = `url(${clearSky.src})`;
      }

      if (weather?.description?.includes('cloud')) {
        imageBackground = `url(${cloudy.src})`;
      }

      if (weather?.description?.includes('scattered clouds')) {
        imageBackground = `url(${scatteredClouds.src})`;
      }

      if (weather?.description?.includes('few clouds')) {
        imageBackground = `url(${fewClouds.src})`;
      }

      if (weather?.description?.includes('broken clouds')) {
        imageBackground = `url(${breakingClouds.src})`;
      }

      if (weather?.description?.includes('rain')) {
        imageBackground = `url(${rainy.src})`;
      }
    }

    setBackground(imageBackground);
  };

  useEffect(() => {
    getBackground();
  }, [weather, isDaytime]);

  return (
    <div
      className="hero hero-background min-h-[110vh] w-screen min-w-fit  "
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundImage: `${background}`,
      }}
    >
      {/* // #F5C051 #F26B1D */}
      <div
        className={`hero-overlay ${
          isDaytime ? `opacity-10` : `opacity-70`
        }  transition-all ease-linear duration-[2000ms] `}
        style={{
          backgroundColor: `${isDaytime ? '#1AE9FF' : '#104040'}`,
          backgroundImage: `${nightBackgroundImageString}`,
        }}
      />
      <div
        className={`text-center text-neutral-content  ease-in-out relative  items-center
      flex flex-col justify-between p-0 w-full max-w-[550px] m-0 rounded-xl shadow-2xl shadow-black/70 ${
        isDaytime ? 'bg-[#09243B]/60' : 'bg-blue-900/60'
      } ${weather ? 'h-fit border-black/50' : 'h-0 border-none'} `}
      >
        {children}
      </div>
    </div>
  );
};

export default HeroLayout;
