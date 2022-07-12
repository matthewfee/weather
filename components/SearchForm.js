import Button from './Button';
import Loader from './LoadingSpinner';

const SearchForm = ({ location, handleLocation, handleKeypress, searchLocation, loading }) => (
  <div className="form-control w-full max-w-s flex-col items-center relative">
    <div className="input-group input-group-lg w-full flex justify-center p-0 m-0 ">
      <input
        type="text"
        placeholder="City"
        className="input input-bordered input-lg input-primary text-2xl text-base-content max-w-[60vw]"
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
