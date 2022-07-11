import Button from './Button';
import Loader from './LoadingSpinner';

const SearchForm = ({ location, handleLocation, handleKeypress, searchLocation, loading }) => (
  <div className="form-control w-full max-w-s">
    <div className="input-group input-group-lg flex justify-center">
      <input
        type="text"
        placeholder="Location…"
        className="input input-bordered input-lg input-primary text-2xl text-base-content"
        value={location}
        onChange={handleLocation}
        onKeyPress={handleKeypress}
      />

      {!loading && (
        <Button styles="btn btn-primary btn-lg" callback={searchLocation}>
          Search
        </Button>
      )}
      {loading && (
        <Button styles="btn btn-lg">
          <Loader />
        </Button>
      )}
    </div>
  </div>
);

export default SearchForm;
