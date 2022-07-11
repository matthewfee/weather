import Button from './Button';

const SearchForm = ({ location, handleLocation, handleKeypress, searchLocation }) => (
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

      <Button styles="btn-primary btn-lg" callback={searchLocation}>
        Search
      </Button>
    </div>
  </div>
);

export default SearchForm;
