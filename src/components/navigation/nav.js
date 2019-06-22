import React from "react";

function Nav() {
  return (
    <div className="row navbar">
      <div className="col-4 pl-5">
        <h2>Giphy</h2>
      </div>
      <div className="col-8 d-flex justify-content-center align-items-center">
        <input className="w-75 mr-2" placeholder="Search Giphy" name="search" />
        <button type="submit">Search</button>
      </div>
    </div>
  );
}

export default Nav;
