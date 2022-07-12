import { dayBackgroundImageString, nightBackgroundImageString } from '../constants/constants';

const HeroLayout = ({ children, isDaytime }) => (
  <div
    className="hero hero-background h-screen min-h-[110vh] w-100vw min-w-fit"
    style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center bottom',
      backgroundImage: `${isDaytime ? dayBackgroundImageString : nightBackgroundImageString}`,
    }}
  >
    <div className="hero-overlay" />
    <div
      className="hero-content w-full text-center text-neutral-content
      max-w-md flex flex-col items-center rounded-md p-0 m-0"
    >
      {children}
    </div>
  </div>
);

export default HeroLayout;
