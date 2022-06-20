import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./Skill/Skill";
import Title from "../common/components/title/Title";
import htmlIcon from '../assets/icons/vscode-icons_file-type-html.svg'
import reactIcon from '../assets/icons/logos_react.svg'
import cssIcon from '../assets/icons/vscode-icons_file-type-css.svg'
import scssIcon from '../assets/icons/logos_sass.svg'
import githubIcon from '../assets/icons/akar-icons_github-fill.svg'
import gitIcon from '../assets/icons/logos_git-icon.svg'
import jsIcon from '../assets/icons/vscode-icons_file-type-js-official.svg'
import tsIcon from '../assets/icons/typescript-logo.svg'
import muiIcon from '../assets/icons/material-ui-1.svg'
import reduxIcon from '../assets/icons/redux.svg'


const Skills = () => {
    return (
        <div className={style.skills_wrapper}>
            <div className={`${styleContainer.container} ${style.skills_container}`}>
                <Title title={'My Tech Stack'}/>
                <div className={style.skills}>
                    <Skill title={'React'}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci, aliquam animi, at ducimus error fugiat incidunt itaque magni reiciendis similique sint temporibus voluptatem? Atque debitis eaque quidem sapiente vel."} icon={reactIcon}/>
                    <Skill title={'JS'}
                           description={"icing elit. Accusamus adipisci, aliquam animi, at ducimus error fugiat incidunt itaque magni reiciendis similique sint temporibus voluptatem? Atque debitis eaque quidem"} icon={jsIcon}/>
                    <Skill title={'TS'}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci, aliquam animi, at ducimus error fugiat incidunt"} icon={tsIcon} />
                    <Skill title={'Redux'}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci, aliquam animi, at ducimus error fugiat incidunt"} icon={reduxIcon} />
                    <Skill title={'HTML'}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci, aliquam animi, at ducimus error fugiat incidunt"} icon={htmlIcon}/>
                    <Skill title={'CSS'}
                           description={"icing elit. Accusamus adipisci, aliquam animi, at ducimus error fugiat incidunt itaque magni reiciendis similique sint temporibus voluptatem? Atque debitis eaque quidem"} icon={cssIcon}/>
                    <Skill title={'SASS'}
                           description={"icing elit. Accusamus adipisci, aliquam animi, at ducimus error fugiat incidunt itaque magni reiciendis similique sint temporibus voluptatem? Atque debitis eaque quidem"} icon={scssIcon}/>
                    <Skill title={'MUI'}
                           description={"icing elit. Accusamus adipisci, aliquam animi, at ducimus error fugiat incidunt itaque magni reiciendis similique sint temporibus voluptatem? Atque debitis eaque quidem"} icon={muiIcon}/>
                    <Skill title={'Git'}
                           description={"icing elit. Accusamus adipisci, aliquam animi, at ducimus error fugiat incidunt itaque magni reiciendis similique sint temporibus voluptatem? Atque debitis eaque quidem"} icon={gitIcon}/>

                <Skill title={'GitHub'}
                       description={"icing elit. Accusamus adipisci, aliquam animi, at ducimus error fugiat incidunt itaque magni reiciendis similique sint temporibus voluptatem? Atque debitis eaque quidem"} icon={githubIcon}/>

                </div>
            </div>

        </div>
    );
};

export default Skills;