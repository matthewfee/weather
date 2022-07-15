import Image from 'next/image';
import Button from './Button';
// import Loader from './LoadingSpinner';

const SearchForm = ({
  location,
  handleLocation,
  handleKeypress,
  searchLocation,
  loading,
  isDaytime,
}) => (
  <div className="form-control flex-col w-full justify-center items-center relative hover:opacity-100 rounded-none transition-all duration-[2000ms] ease-in">
    <div className="input-group w-full input-group-lg flex justify-center items-center  m-0">
      <input
        type="text"
        placeholder="Search your city..."
        className={`input input-bordered w-full h-3rem p-4 text-center text-2xl rounded-none transition-color duration-[1000ms] ease-in-out ${
          isDaytime
            ? 'text-black bg-white/25 focus:bg-white'
            : `text-white bg-zinc-800/50 focus:bg-zinc-800`
        } `}
        //

        value={location}
        onChange={handleLocation}
        onKeyPress={handleKeypress}
        required
      />

      <Button
        styles="btn btn-md w-full text-white bg-black w-[100px] opacity-90"
        callback={searchLocation}
      >
        <Image src="/icons/search.svg" height="30px" width="30px" />
      </Button>
    </div>
    {/* {loading && (
      <div className="loader-container absolute top-2">
        <Loader />
      </div>
    )} */}
  </div>
);

export default SearchForm;
