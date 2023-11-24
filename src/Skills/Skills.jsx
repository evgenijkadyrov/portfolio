import React from "react";
import style from "./Skills.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import Skill from "./Skill/Skill";
import { Title } from "../common";

import Fade from "react-reveal/Fade";
import {skillData} from "./skills.data";

export const Skills = () => (
    <div id="skills" className={style.skills_wrapper}>
      <div className={`${styleContainer.container} ${style.skills_container}`}>
        <Fade right>
          <Title title="My Tech Stack" />
          <div className={style.skills}>
            {skillData.map((skill, index) => (
                <Skill
                    key={index}
                    title={skill.title}
                    description={skill.description}
                    icon={skill.icon}
                />
            ))}
          </div>
        </Fade>
      </div>
    </div>
);

export default Skills;