import React from "react";
import Carusel from "../../components/Slider/Slider";

import "./style.css";

export const Portfolio = () => {
  return (
    <>
      <h1 className="title-portfolio">My portfolio</h1>
      <div className="slider-block">
        <Carusel />
      </div>
    </>
  );
};
