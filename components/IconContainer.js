import Icon from './Icon';

const IconContainer = ({ weather }) => (
  <div className="weather-icon flex flex-col justify-between pb-1 items-center relative w-1/4 mb-4">
    <div className="weather-icon mt-auto">
      <Icon iconID={weather?.icon} />
    </div>

    <div className="weather-description text-sm mt-2 text-center max-w-[100px] leading-none font-bold">
      {weather?.description}
    </div>
  </div>
);

export default IconContainer;
