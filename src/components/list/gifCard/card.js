import React from "react";

function GifCard({ title, url }) {
  return (
    <div className="col-12">
      <div className="row p-5">
        <div className="col-6">
          <img src={url} alt={title} />
        </div>
        <div className="col-6">
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
}

export default GifCard;
