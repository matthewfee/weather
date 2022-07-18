/* eslint-disable jsx-a11y/label-has-associated-control */
import Button from './Button';
import Loader from './LoadingSpinner';
import SearchInput from './SearchInput';
import { blueLightBackgroundColor } from '../constants/constants';

const SearchForm = ({
  location,
  handleLocation,
  handleKeypress,
  searchLocation,
  loading,
  weather,
}) => (
  <div
    className={`location-input form-control flex-col justify-center gap-2 items-center relative transition-all duration-[1000ms] ease-in text-white my-4  ${
      weather ? 'mt-0' : 'bottom-0 mt-auto'
    }`}
  >
    <SearchInput
      weather={weather}
      value={location}
      onChange={handleLocation}
      onKeyPress={handleKeypress}
    />

    <Button
      styles={`bg-[${blueLightBackgroundColor}]/20 border-black/25 btn-md flex flex-row w-full text-white w-[100px]`}
      callback={searchLocation}
    >
      {!loading && `Search`}
      {loading && (
        <div className="loader-container absolute top-50 right-30">
          <Loader />
        </div>
      )}
    </Button>
  </div>
);

export default SearchForm;
