import React, {Fragment} from "react";
import styleP from "./Projects.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import {Project} from "./Project/Project";
import {Title} from "../common";
import Fade from "react-reveal/Fade";
import {projectsData} from "./projects.data";

const projectStyles = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px',
};

export const Projects = () => (
    <div id="projects" className={styleP.projects_wrapper}>
        <div className={`${styleContainer.container} ${styleP.projects_container}`}>
            <Fade left>
                <Title title="My projects" />

                <div className={styleP.projects}>
                    {projectsData.map((project, index) => (
                        <Fragment key={index}>
                            <Project
                                style={{ ...projectStyles, backgroundImage: `url(${project.backgroundImage})` }}
                                title={project.title}
                                url={project.url}
                                description={project.description}
                            />
                        </Fragment>
                    ))}
                </div>
            </Fade>
        </div>
    </div>
);
