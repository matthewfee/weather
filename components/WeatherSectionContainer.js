const WeatherSectionContainer = ({ children, weather }) => (
  <div
    className={`m-0 relative flex-col items-center justify-between flex-nowrap px-2 md:px-4 text-white w-full h-fill transition-all duration-[1000ms] ease-in  ${
      weather ? 'opacity-100 blur-none' : 'opacity-0 h-0 blur-xl'
    } `}
  >
    {children}
  </div>
);

export default WeatherSectionContainer;
