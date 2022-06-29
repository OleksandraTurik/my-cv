import React from "react";
import Data from "../../db.json";
import { ImBooks } from "react-icons/im";
import { AiOutlineLaptop } from "react-icons/ai";
import { GiSandsOfTime } from "react-icons/gi";

import "./style.css";

export const About = () => {
  return (
    <>
      {Data.about.map(
        ({
          id,
          myinfo,
          Hobbie1,
          Hobbie2,
          Hobbie3,
          Hobbie4,
          titleWork,
          subtitle,
          description,
          subtitle2,
          description2,
        }) => (
          <div className="about">
            <div className="photo">
              <img
                className="img-circle"
                src="./assets/me1.jpg"
                alt="my face"
              />
            </div>

            <p className="about-me-info">{myinfo}</p>

            <div className="about-me-block">
              <span>
                <i className="icons">
                  <ImBooks />
                </i>
                Hobbies
              </span>
              <ul>
                <li key={id}> {Hobbie1}</li>
                <li key={id}> {Hobbie2}</li>
                <li key={id}> {Hobbie3}</li>
                <li key={id}> {Hobbie4}</li>
              </ul>
            </div>

            <hr />

            <div className="about-me-block">
              <span className="title-work" key={id}>
                <i className="icons">
                  <AiOutlineLaptop />
                </i>
                {titleWork}
              </span>
              <p className="subtitle-work" key={id}>
                {" "}
                <span className="icon-times">
                  <GiSandsOfTime />
                </span>
                {subtitle}
              </p>
              <p className="description-work" key={id}>
                {description}
              </p>
              <p className="subtitle-work" key={id}>
                <span className="icon-times">
                  <GiSandsOfTime />
                </span>
                {subtitle2}
              </p>
              <p className="description-work" key={id}>
                {description2}
              </p>
            </div>
          </div>
        )
      )}
    </>
  );
};
