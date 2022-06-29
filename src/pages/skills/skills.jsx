import React from "react";
import Skill from "../../components/Skill";
import SkillsData from "../../db.json";

import "./style.css";

export const Skills = () => {
  return (
    <div className="skills">
      <h1 className="title">Skills</h1>
      {SkillsData["Technical Skills"].map((item) => (
        <div>
          <Skill
            title={item.title}
            key={item.id}
            item1={item.item1}
            item2={item.item2}
            item3={item.item3}
          />
        </div>
      ))}
      {SkillsData["Language skills"].map((item) => (
        <div>
          <Skill
            title={item.title}
            key={item.id}
            item1={item.item1}
            item2={item.item2}
            item3={item.item3}
          />
        </div>
      ))}
      {SkillsData["Digital Skills"].map((item) => (
        <div>
          <Skill
            title={item.title}
            key={item.id}
            item1={item.item1}
            item2={item.item2}
            item3={item.item3}
          />
        </div>
      ))}
      {SkillsData["Soft Skills"].map((item) => (
        <div>
          <Skill
            title={item.title}
            key={item.id}
            item1={item.item1}
            item2={item.item2}
            item3={item.item3}
          />
        </div>
      ))}
    </div>
  );
};
