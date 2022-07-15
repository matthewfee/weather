import Image from 'next/image';
import Button from './Button';
import Loader from './LoadingSpinner';

const SearchForm = ({
  location,
  handleLocation,
  handleKeypress,
  searchLocation,
  loading,
  isDaytime,
  weather,
}) => (
  <div
    className={`form-control flex-col w-full justify-center items-center relative hover:opacity-100 rounded-none  transition-all duration-[1000ms] ease-in text-white ${
      weather ? 'mt-0' : 'mt-32'
    }`}
  >
    <div className="input-group w-full input-group-lg flex justify-center items-center  m-0">
      <input
        type="text"
        placeholder="Search your city..."
        className={`input h-3rem p-4 border-black/50 text-center text-2xl rounded-none transition-color text-white duration-[2000ms] input-primary z-10 bg-[#09243B]/5 900/60 ease-in-out md:w-full  ${
          weather ? 'w-full' : 'md:w-full'
        }  `}
        // ${
        //  isDaytime
        //    ? 'text-black placeholder:text-black  bg-white/50 focus:bg-white'
        //    : `text-white placeholder:text-white/50  bg-zinc-800/50 focus:bg-zinc-800`
        // }

        value={location}
        onChange={handleLocation}
        onKeyPress={handleKeypress}
        required
      />

      <Button
        styles="btn btn-md w-full text-white bg-black w-[100px] opacity-90"
        callback={searchLocation}
      >
        {!loading && <Image src="/icons/search.svg" height="30px" width="30px" />}
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
