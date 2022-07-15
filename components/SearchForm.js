/* eslint-disable jsx-a11y/label-has-associated-control */
import Image from 'next/image';
import Button from './Button';
import Loader from './LoadingSpinner';

const SearchForm = ({
  location,
  handleLocation,
  handleKeypress,
  searchLocation,
  loading,
  weather,
}) => (
  <div
    className={`location-input form-control shadow-sm shadow-black/25 rounded-md flex-col justify-center items-center relative hover:opacity-100 mx-4 my-1 mb-2 bg-slate-500/25 transition-all duration-[1000ms] ease-in text-white  ${
      weather ? 'mt-0' : 'bottom-0 mt-auto'
    }`}
  >
    {/* <label className="label absolute top-[-35px] text-center" htmlFor="location-input">
      <span className="label-text text-white text-md ">City</span>
    </label> */}
    <div className="input-group w-full input-group-lg flex justify-center items-center m-0 ">
      <input
        type="text"
        htmlFor="location-input"
        placeholder="Search your city..."
        className={`input location-input h-3rem p-4 border-transparent text-center text-2xl  transition-color text-white duration-[2000ms] input-primary z-10 bg-[#09243B]/5 900/60 ease-in-out md:w-full placeholder:text-white/90  ${
          weather ? 'w-full bg-[#09243B]/5' : 'bg-[#09243B]/80 md:w-full w-[250px]'
        }  `}
        value={location}
        onChange={handleLocation}
        onKeyPress={handleKeypress}
        required
      />

      <Button
        styles="btn btn-md btn-primary flex flex-row search-button w-full text-white w-[100px] opacity-90"
        callback={searchLocation}
      >
        {!loading && `Search`}
      </Button>
    </div>
    {loading && (
      <div className="loader-container absolute top-50 right-30">
        <Loader />
      </div>
    )}
  </div>
);

export default SearchForm;
