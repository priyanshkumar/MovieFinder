import React from "react";
import GifCard from "./gifCard/card";

function List({ gifs }) {
  return (
    <div className="container my-5">
      {gifs.map(gif => {
        return (
          <GifCard
            title={gif.title}
            url={gif.images.downsized_medium.url}
            key={gif.id}
          />
        );
      })}
      <GifCard />
    </div>
  );
}

export default List;
