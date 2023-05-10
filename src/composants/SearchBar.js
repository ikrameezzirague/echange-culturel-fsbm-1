import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(term);
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Recherchez un article"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="submit" className="search-button">
          Rechercher
        </button>
      </div>
      <a href={`/recherche?term=${term}`} className="search-icon">
        <i className="fa fa-search"></i>
      </a>
    </form>
  );
};

export default SearchBar;