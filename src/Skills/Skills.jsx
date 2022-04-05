import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./Skill/Skill";

const Skills = () => {
    return (
        <div className={style.skills_wrapper}>
            <div className={`${styleContainer.container} ${style.skills_container}`}>
                <h2 className={style.title}>My skills</h2>
                <div className={style.skills}>
                    <Skill title={'React'}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci, aliquam animi, at ducimus error fugiat incidunt itaque magni reiciendis similique sint temporibus voluptatem? Atque debitis eaque quidem sapiente vel."}/>
                    <Skill title={'HTML'}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci, aliquam animi, at ducimus error fugiat incidunt"}/>
                    <Skill title={'CSS'}
                           description={"icing elit. Accusamus adipisci, aliquam animi, at ducimus error fugiat incidunt itaque magni reiciendis similique sint temporibus voluptatem? Atque debitis eaque quidem"}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;