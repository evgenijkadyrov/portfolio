import React from "react";
import style from "./Project.module.scss";

export const Project = (props) => (
  <div className={style.project}>
    <div className={style.foto} style={props.style}>
      <button className={style.btn} >
        <a href={props.url} target={"_blank"}>View</a>
      </button>
    </div>

    <div className={style.projectInfo}>
      <h3 className={style.projectTitle}>{props.title}</h3>
      <span className={style.projectDescription}>{props.description}</span>
    </div>
  </div>
);
