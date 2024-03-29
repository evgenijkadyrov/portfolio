import React from "react";
import style from "./Skill.module.scss";

const Skill = (props) => {
  return (
    <div className={style.skill}>
      <div className={style.icon}>
        <img src={props.icon} />
      </div>
      <h4>{props.title}</h4>
      {/* <span className={style.description}>{props.description}</span>*/}
    </div>
  );
};

export default Skill;
