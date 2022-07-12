import { dayBackgroundImageString, nightBackgroundImageString } from '../constants/constants';

const HeroLayout = ({ children, isDaytime }) => (
  <div
    className="hero min-h-screen"
    style={{
      backgroundSize: 'cover',
      backgroundImage: `${isDaytime ? dayBackgroundImageString : nightBackgroundImageString}`,
    }}
  >
    <div className="hero-overlay" />
    <div
      className="hero-content w-full text-center text-neutral-content
      max-w-md flex flex-col items-center rounded-md"
    >
      {children}
    </div>
  </div>
);

export default HeroLayout;
