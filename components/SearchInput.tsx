import React, { ChangeEvent } from 'react';

interface SearchInputTypes {
  weather: { icon: string; description: string } | null;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (event: React.KeyboardEvent) => void;
}

const SearchInput = ({ weather, value, onChange, onKeyPress }: SearchInputTypes) => (
  <input
    type="text"
    placeholder="city"
    className={`location-input h-[3rem] max-w-[16rem] bg-[#238CE8] rounded-md backdrop-blur-2xl p-4 text-center text-2xl text-white duration-[2000ms] focus:outline-white/25 input-primary placeholder:text-white/50  ${
      weather ? `bg-opacity-20 border border-black/5` : `bg-opacity-50`
    }  `}
    value={value}
    onChange={onChange}
    onKeyPress={onKeyPress}
    required
  />
);

export default SearchInput;
