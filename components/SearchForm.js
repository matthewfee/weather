/* eslint-disable jsx-a11y/label-has-associated-control */
import Button from './Button';
import Loader from './LoadingSpinner';
import SearchInput from './SearchInput';

const SearchForm = ({
  location,
  handleLocation,
  handleKeypress,
  searchLocation,
  loading,
  weather,
}) => (
  <div
    className={`location-input form-control  flex-col justify-center w-full items-center relative transition-all duration-[1000ms] ease-in text-white  ${
      weather ? 'mt-0' : 'bottom-0 mt-auto'
    }`}
  >
    <div className="shadow-sm shadow-black/25 bg-slate-500/25 md:mx-4 w-[95%] mx-2 my-1 mb-2  rounded-md input-group input-group-lg flex justify-center items-center m-0 ">
      <SearchInput
        weather={weather}
        value={location}
        onChange={handleLocation}
        onKeyPress={handleKeypress}
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
