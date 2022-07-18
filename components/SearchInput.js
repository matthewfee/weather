const SearchInput = ({ weather, value, onChange, onKeyPress }) => (
  <input
    type="text"
    htmlFor="location-input"
    placeholder="Search your city..."
    className={`location-input h-[3rem] rounded-md p-4 text-center text-2xl text-white duration-[2000ms] border border-black/5 focus:outline-none bg-[#09243B]/70 input-primary md:w-full placeholder:text-white/90  ${
      weather ? 'border-2 border-black' : 'bg-[#09243B]/70'
    }  `}
    value={value}
    onChange={onChange}
    onKeyPress={onKeyPress}
    required
  />
);

export default SearchInput;
