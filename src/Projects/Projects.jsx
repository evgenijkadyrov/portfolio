import React from 'react';
import styleP from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Project from "./Project/Project";

const Projects = () => {
    return (
        <div className={styleP.projects_wrapper}>
            <div className={`${styleContainer.container} ${styleP.projects_container}`}>

                <h2 className={styleP.title}>My Projects</h2>
                <div className={styleP.projects}>
                    <Project title={'SocialNetwork'}
                             description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab alias aperiam atque aut autem commodi cum cumque eius fugiat hic, libero, nesciunt numquam pariatur quas suscipit temporibus vero voluptatem."}/>
                    <Project title={'ToDoList'}
                             description={"Lorem ipsu fugiat hic, libero, nesciunt numquam pariatur quas suscipit temporibus vero voluptatem."}/>
                </div>
            </div>
        </div>

    );
};

export default Projects;