import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      className="form-control"
      value={query}
      onChange={handleSearch}
      placeholder="Search for products..."
    />
  );
};

export default SearchBar;
