import React from "react";
import { BsCheck2Circle } from "react-icons/bs";

const Skill = ({ title, item1, item2, item3 }) => {
  return (
    <div className="skill">
      <p>
        <span>
          <BsCheck2Circle />
        </span>
        {title}
      </p>
      <ul>
        <li>{item1}</li>
        <li>{item2}</li>
        <li>{item3}</li>
      </ul>
    </div>
  );
};

export default Skill;
