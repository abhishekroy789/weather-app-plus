import React, { useState } from "react";
import "./style.css";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ setQuery }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city !== "") {
      setQuery({ q: city });
    }
  };

  return (
    <form className="search-container">
      <input
        type="text"
        placeholder="Search..."
        name="search"
        value={city}
        onChange={(e) => setCity(e.currentTarget.value)}
        onSubmit={handleSubmit}
      />
      <button type="submit" onClick={handleSubmit}>
        <FiSearch />
      </button>
    </form>
  );
};

export default SearchBar;
