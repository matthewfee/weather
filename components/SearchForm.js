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
    className={`form-control flex-col w-full justify-center items-center relative hover:opacity-100 rounded-none  transition-all duration-[1000ms] ease-in text-white ${
      weather ? 'mt-0' : 'md:mt-16 mt-48'
    }`}
  >
    <div className="input-group w-full input-group-lg flex justify-center items-center  m-0">
      <input
        type="text"
        placeholder="Search your city..."
        className={`input h-3rem p-4 border-black/50 text-center text-2xl rounded-none transition-color text-white duration-[2000ms] input-primary z-10  bg-[#09243B]/5 900/60 ease-in-out md:w-full  ${
          weather ? 'w-full' : 'md:w-full w-[250px]'
        }  `}
        value={location}
        onChange={handleLocation}
        onKeyPress={handleKeypress}
        required
      />

      <Button
        styles="btn btn-md w-full text-white bg-blue-900/75  w-[100px] opacity-90"
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
