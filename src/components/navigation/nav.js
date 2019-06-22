import React from "react";
import "./nav.css";

function Nav({ search, handleChange, handleClick }) {
  return (
    <div className="row p-0 m-0 navbar">
      <div className="col-4 d-flex justify-content-center">
        <h2>Giphy</h2>
      </div>
      <div className="col-8 d-flex justify-content-center align-items-center">
        <input
          className="w-50 mr-2 form-control form-control-md"
          placeholder="Search Giphy"
          name="search"
          value={search}
          onChange={handleChange}
        />
        <button
          className="btn btn-md px-2 btn-outline-light d-flex align-items-center"
          type="button"
          onClick={handleClick}
        >
          <ion-icon name="search" />
        </button>
      </div>
    </div>
  );
}

export default Nav;
