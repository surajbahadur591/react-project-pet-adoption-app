import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [active, setActive] = useState(0);
  const handleIndexClick = (e) => {
    setActive(+e.target.dataset.index);
    console.log(e.target.dataset.index);
  };
  return (
    <div className="carousel">
      <img src={images[active]} alt="" />
      <div className="carousel-smaller">
        {images.map((photo, i) => {
          return (
            <img
              src={photo}
              onClick={handleIndexClick}
              data-index={i}
              key={photo}
              className={i === active ? "active" : ""}
              alt=""
            ></img>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
