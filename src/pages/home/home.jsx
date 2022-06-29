import React from "react";
import { FaCode } from "react-icons/fa";

import "./style.css";

export const Home = () => {
  return (
    <div className="home">
      <h1 className="greeting">
        Welcome to my <br /> CV
      </h1>
      <div className="home-desc">
        <p>Oleksandra Turik</p>
        <div className="line">
          <span aria-hidden="true" class="outer-line"></span>
          <span className="icons-code">
            <FaCode />
          </span>
          <span class="outer-line"></span>
        </div>
        <h3>Web Developer</h3>
      </div>
    </div>
  );
};
