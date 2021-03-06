/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Button from './Button';
import Loader from './LoadingSpinner';
import SearchInput from './SearchInput';

interface SearchFormTypes {
  location: string;
  handleLocation: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeypress: (event: React.KeyboardEvent) => void;
  searchLocation: () => void;
  loading: boolean;
  weather: { icon: string; description: string } | null;
}

const SearchForm = ({
  location,
  handleLocation,
  handleKeypress,
  searchLocation,
  loading,
  weather,
}: SearchFormTypes) => (
  <div
    className={`location-input form-control flex-col justify-center gap-4 items-center relative text-white my-4  ${
      weather ? 'mt-4' : 'bottom-0 mt-auto'
    }`}
  >
    <SearchInput
      weather={weather}
      value={location}
      onChange={handleLocation}
      onKeyPress={handleKeypress}
    />

    <Button
      styles="bg-[#238CE8]/20 hover:bg-[#238CE8]/75 border-none btn-md flex flex-row w-full text-white w-[100px]"
      callback={searchLocation}
      disabled={location === ''}
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
