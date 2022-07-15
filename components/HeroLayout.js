import { useState, useEffect } from 'react';
import { nightBackgroundImageString } from '../constants/constants';
import sunny from '../public/backgrounds/sunny.jpg';
import cloudy from '../public/backgrounds/cloudy.jpg';
import rainy from '../public/backgrounds/rainy.jpg';

const HeroLayout = ({ children, isDaytime, weather }) => {
  const [background, setBackground] = useState(`url(${rainy.src})`);

  const getBackground = () => {
    let imageBackground = `url(${sunny.src})`;

    if (weather?.description?.includes('clouds')) {
      console.log('CLOUDY');
      imageBackground = `url${cloudy.src}`;
    }

    if (weather?.description?.includes('rain')) {
      imageBackground = `url${rainy.src}`;
    }

    console.log(imageBackground);

    setBackground(imageBackground);
  };

  useEffect(() => {
    getBackground();
  }, [weather]);

  return (
    <div
      className="hero hero-background min-h-[110vh] w-screen min-w-fit  "
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundImage: background,
      }}
    >
      <div
        className={`hero-overlay ${
          isDaytime ? `opacity-80` : `opacity-80`
        }  transition-all ease-in-out duration-[2000ms] `}
        style={{
          backgroundColor: `${isDaytime ? '#F26B1D' : '#104040'}`,
          backgroundImage: `${nightBackgroundImageString}`,
        }}
      />
      <div
        className={`hero-content text-center text-neutral-content transition-colors ease-in-out duration-[4000ms] h-0 border 

      flex flex-col p-0 w-full max-w-[600px] m-0 rounded-xl shadow-2xl shadow-black/70 ${
        isDaytime ? 'bg-[#09243B]/60' : 'bg-blue-900/60'
      } ${weather ? 'h-[400px] opacity-100 border-black/50' : 'h-0 border-none'} `}
      >
        {children}
      </div>
    </div>
  );
};

// box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.04);
// backdrop-filter: blur(50px); #0788D9

export default HeroLayout;
