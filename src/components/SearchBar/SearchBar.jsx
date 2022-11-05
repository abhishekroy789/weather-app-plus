import React from "react";
import "./style.css";
import {FiSearch} from "react-icons/fi"

const SearchBar = () => {
  return (
      <form className="search-container">
        <input type="text" placeholder="Search..." name="search"/>
        <button type="submit"><FiSearch/></button>
      </form>
  );
};

export default SearchBar;
