const CityContainer = ({ location, isDaytime }) => (
  <h2
    className={`city-name md:text-2xl text-xl md:pt-0 text-center tracking-wide ${
      isDaytime ? 'text-[#b8d7fc]' : 'text-white'
    }  font-semibold `}
  >
    {location}
  </h2>
);

export default CityContainer;
