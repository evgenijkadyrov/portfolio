import React from 'react';
import styleP from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Project from './Project/Project';
import Title from '../common/components/title/Title';
import todoImage from '../assets/image/todolist.jpg'
import socialImage from '../assets/image/social.jpg'

const Projects = () => {

    const social={
        backgroundImage:`url(${socialImage})`,
    }
    const todolist={
        backgroundImage:`url(${todoImage})`,
    }
    return (
        <div className={styleP.projects_wrapper}>
            <div className={`${styleContainer.container} ${styleP.projects_container}`}>
               <Title title={'My projects'}/>

                <div className={styleP.projects}>
                    <Project style={social} title={'SocialNetwork'}
                             description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab alias aperiam atque aut autem commodi cum cumque eius fugiat hic, libero, nesciunt numquam pariatur quas suscipit temporibus vero voluptatem."}/>
                    <Project style={todolist} title={'ToDoList'}
                             description={"Lorem ipsu fugiat hic, libero, nesciunt numquam pariatur quas suscipit temporibus vero voluptatem."}/>
                </div>
            </div>
        </div>

    );
};

export default Projects;