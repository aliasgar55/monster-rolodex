import React from "react";
import "./search-box.styles.css";

const SearchBox = ({ placeholder, value, handleChange }) => {
  return (
    <input
      className="search-box"
      type="search"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
