const SearchInput = ({ weather, value, onChange, onKeyPress }) => (
  <input
    type="text"
    htmlFor="location-input"
    placeholder="Search your city..."
    className={`input location-input h-3rem p-4 border-transparent text-center text-2xl  transition-color text-white duration-[2000ms] input-primary z-10 bg-[#09243B]/5 900/60 ease-in-out md:w-full placeholder:text-white/90  ${
      weather ? 'w-full bg-[#09243B]/5' : 'bg-[#09243B]/80 md:w-full w-[250px]'
    }  `}
    value={value}
    onChange={onChange}
    onKeyPress={onKeyPress}
    required
  />
);

export default SearchInput;
