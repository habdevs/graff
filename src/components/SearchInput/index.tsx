import React from 'react';

interface SearchInputProps {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchInput: React.FC<SearchInputProps> = ({ setSearchValue }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="flex flex-col w-full">
      <label className="text-white" htmlFor="searchInput">
        Search name{' '}
      </label>
      <input
        type="text"
        id="searchInput"
        className="text-white text-2xl bold bg-grayl my-2 rounded w-full"
        onChange={handleChange}
      />
    </div>
  );
};
