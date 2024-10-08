import React, { FC } from 'react';

interface SearchBarProps {
  query: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: () => void;
}

const SearchBar: FC<SearchBarProps> = ({ query, onSearchChange, onSearchSubmit }) => {
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={onSearchChange}
        placeholder="Search for a movie..."
        style={{ padding: '10px', width: '250px' }}
      />
      <button onClick={onSearchSubmit} style={{ marginLeft: '10px', padding: '10px 20px' }}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
