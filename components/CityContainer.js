const CityContainer = ({ location, isDaytime }) => {
  const fixCityCapitalization = (cityName) => {
    if (cityName.includes(',')) {
      const arr = cityName.split(',');

      const capitalizedArr = arr.map((item, index) => {
        if (index !== 0) {
          return item.toUpperCase();
        }
        return item;
      });

      const capitalizedName = capitalizedArr.join(',');

      return capitalizedName;
    }

    return cityName;
  };

  return (
    <h2
      className={`city-name md:text-2xl text-xl md:pt-0 text-center capitalize tracking-wide ${
        isDaytime ? 'text-[#b8d7fc]' : 'text-white'
      }  font-semibold `}
    >
      {fixCityCapitalization(location)}
    </h2>
  );
};

export default CityContainer;
