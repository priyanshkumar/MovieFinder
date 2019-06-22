import React from "react";

function Nav({ search, handleChange, handleClick }) {
  return (
    <div className="row navbar">
      <div className="col-4 pl-5">
        <h2>Giphy</h2>
      </div>
      <div className="col-8 d-flex justify-content-center align-items-center">
        <input
          className="w-75 mr-2"
          placeholder="Search Giphy"
          name="search"
          value={search}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleClick}>
          Search
        </button>
      </div>
    </div>
  );
}

export default Nav;
