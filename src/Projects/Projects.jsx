import React from "react";
import styleP from "./Projects.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import { Project } from "./Project/Project";
import { Title } from "../common";
import Fade from "react-reveal/Fade";
import { cardImage, socialImage, todoImage,pizza, coffee2 } from "../assets";

export const Projects = () => (
  <div id="projects" className={styleP.projects_wrapper}>
    <div className={`${styleContainer.container} ${styleP.projects_container}`}>
      <Fade left>
        <Title title="My projects" />

        <div className={styleP.projects}>
            <Project
                style={{
                    backgroundImage: `url(${coffee2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height:'300px',
                }}
                title="Coffee-store"
                url={"https://e-commerce-coffee-shop.vercel.app/"}
                description="Stack: NextJS, Typescript, ReduxToolkit,  Hooks, Chakra, Tailwinds.
Coffee-store app with using NextJs"
            />
            <Project
                style={{
                    backgroundImage: `url(${pizza})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height:'300px',
                }}
                title="Pizza-store"
                url={"https://github.com/evgenijkadyrov/pizza"}
                description="Stack: React, Redux, JS, Redux-thunks, Hooks.
Pizza-store app with using react hooks, routing,  working with json-server.."
            />
          <Project
            style={{
              backgroundImage: `url(${socialImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height:'300px',
            }}
            title="SocialNetwork"
            url={"https://github.com/evgenijkadyrov/social-network-react-ts"}
            description="Stack: React, Redux, Typescript, Redux-thunks, Hooks.
Social network app with using react hooks, routing, lazy loading, working with REST api, login/logout flow,pagination, form and validation/file uploading using
unittests for code workability check."
          />
          <Project
            style={{
              backgroundImage: `url(${todoImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height:'300px',
            }}
            title="ToDoList"
            url={"https://github.com/evgenijkadyrov/todolist_v2.0"}
            description="Stack: React, Redux, Typescript, Redux-thunks, Hooks.
Сheck the correctness of the code with Unit Tests and take
Storybook for demonstration ofindividual modules of the
application."
          />
          <Project
            style={{ backgroundImage: `url(${cardImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height:'300px',}}
            title="Flash cards"
            url={"https://insane4l.github.io/flash-cards/#/login"}
            description="Stack: React, Redux, Typescript, Redux-thunks, Hooks.
Team work. Flash-cards app with using react hooks, routing, lazy loading, working with REST api, login/logout flow,pagination, form and validation."
          />
        </div>
      </Fade>
    </div>
  </div>
);
