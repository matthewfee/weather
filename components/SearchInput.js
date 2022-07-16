import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const SearchInput = ({ value, onChange, weather, onKeyPress }) => (
  // <div
  //   className={`input location-input h-3rem border-transparent text-center text-2xl w-[400px] transition-color text-white duration-[2000ms] input-primary z-10 bg-[#09243B]/5 900/60 ease-in-out md:w-full placeholder:text-white/90 ${
  //     weather ? 'w-full bg-[#09243B]/5' : 'bg-[#09243B]/80 md:w-full'
  //   }`}
  // >
  <>
    <GooglePlacesAutocomplete
      selectProps={{ value, onChange }}
      apiKey="AIzaSyCkgAJfB1kr49rKEPdGFpbs4j9feMhK5Vo"
    />

    {/* <input
      type="text"
      htmlFor="location-input"
      placeholder="Search your city..."
      className={`input location-input h-3rem p-4 border-transparent text-center text-2xl w-[100%]  transition-color text-white duration-[2000ms] input-primary z-10 bg-[#09243B]/5 900/60 ease-in-out md:w-full placeholder:text-white/90  ${
        weather ? 'w-full bg-[#09243B]/5' : 'bg-[#09243B]/80 md:w-full'
      }  `}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      required
    /> */}
  </>
);

export default SearchInput;
