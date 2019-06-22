import React from "react";
import "./card.css";

function GifCard({ title, url }) {
  return (
    <div className="col-12 mb-4 d-flex justify-content-center">
      <div className="row p-4 w-75 cardlist ">
        <div className="col-4">
          <img src={url} alt={title} />
        </div>
        <div className="col-8 d-flex justify-content-center">
          <h3 className="d-flex justify-content-center align-items-center">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default GifCard;
