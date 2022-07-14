import Button from './Button';
import Loader from './LoadingSpinner';

const SearchForm = ({
  location,
  handleLocation,
  handleKeypress,
  searchLocation,
  loading,
  weather,
  isDaytime,
}) => (
  <div className="form-control w-full max-w-s flex-col items-center relative">
    {!weather && <h1 className="text-white absolute top-[-50px]">search the weather...</h1>}
    <div className="input-group input-group-lg w-full flex justify-center p-0 m-0 ">
      <input
        type="text"
        placeholder="City"
        className={`input input-bordered input-lg input-primary text-2xl transition-color duration-[3000ms] ease-in-out max-w-[60vw] ${
          isDaytime ? 'text-black bg-white' : `text-white bg-zinc-800`
        }`}
        value={location}
        onChange={handleLocation}
        onKeyPress={handleKeypress}
        required
      />

      <Button styles="btn btn-primary btn-lg w-28" callback={searchLocation}>
        {!loading && 'Search'}
      </Button>
    </div>
    {loading && (
      <div className="loader-container absolute top-2">
        <Loader />
      </div>
    )}
  </div>
);

export default SearchForm;
