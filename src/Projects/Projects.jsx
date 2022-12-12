import React from "react";
import styleP from "./Projects.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import { Project } from "./Project/Project";
import { Title } from "../common";
import Fade from "react-reveal/Fade";
import { cardImage, socialImage, todoImage } from "../assets";

export const Projects = () => (
  <div id="projects" className={styleP.projects_wrapper}>
    <div className={`${styleContainer.container} ${styleP.projects_container}`}>
      <Fade left>
        <Title title="My projects" />

        <div className={styleP.projects}>
          <Project
            style={{
              backgroundImage: `url(${socialImage})`,
            }}
            title="SocialNetwork"
            url={""}
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab alias aperiam atque aut autem commodi cum cumque eius fugiat hic, libero, nesciunt numquam pariatur quas suscipit temporibus vero voluptatem."
          />
          <Project
            style={{
              backgroundImage: `url(${todoImage})`,
            }}
            title="ToDoList"
            url={""}
            description="Lorem ipsu fugiat hic, libero, nesciunt numquam pariatur quas suscipit temporibus vero voluptatem."
          />
          <Project
            style={{ backgroundImage: `url(${cardImage})` }}
            title="Cards"
            url={""}
            description="Lorem ipsu fugiat hic, libero, nesciunt numquam pariatur quas suscipit temporibus vero voluptatem."
          />
        </div>
      </Fade>
    </div>
  </div>
);
