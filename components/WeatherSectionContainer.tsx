interface WeatherSectionTypes {
  children: React.ReactNode;
  weather: {
    icon: string;
    description: string;
  };
}

const WeatherSectionContainer = ({ children, weather }: WeatherSectionTypes) => (
  <div
    className={`m-0 relative flex-col items-center justify-between flex-nowrap px-2 md:px-4 text-white w-full h-fill transition-all duration-[1000ms] ease-in  ${
      weather ? 'opacity-100' : 'opacity-0 h-0'
    } `}
  >
    {children}
  </div>
);

export default WeatherSectionContainer;
