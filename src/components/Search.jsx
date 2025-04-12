import React from "react";

const SearchBar = ({ setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full p-2 border rounded-md shadow-sm"
    />
  );
};

export default SearchBar;
