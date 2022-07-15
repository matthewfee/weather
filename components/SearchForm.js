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
    className={`form-control  rounded-md flex-col w-fill justify-center items-center relative hover:opacity-100 mx-4 my-1 mb-4 bg-slate-600/25 transition-all duration-[1000ms] ease-in text-white ${
      weather ? 'mt-0' : 'bottom-0 mt-auto'
    }`}
  >
    <div className="input-group  w-full input-group-lg flex justify-center items-center m-0 ">
      <input
        type="text"
        placeholder="Search your city..."
        className={`input location-input h-3rem p-4 border-transparent text-center text-2xl  transition-color text-white duration-[2000ms] input-primary z-10 bg-[#09243B]/5 900/60 ease-in-out md:w-full  ${
          weather ? 'w-full' : 'md:w-full w-[250px]'
        }  `}
        value={location}
        onChange={handleLocation}
        onKeyPress={handleKeypress}
        required
      />

      <Button
        styles="btn btn-md search-button w-full text-white border-transparent bg-sky-800/90  w-[100px] opacity-90"
        callback={searchLocation}
      >
        {!loading && <Image src="/icons/searchdark.svg" height="30px" width="30px" />}
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
