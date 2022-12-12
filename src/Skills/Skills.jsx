import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./Skill/Skill";
import {Title} from "../common"
import {
    htmlIcon, reactIcon,cssIcon, scssIcon, githubIcon,
    gitIcon, jsIcon, tsIcon, muiIcon, reduxIcon} from '../assets'


export const Skills = () => (
    <div id='skills' className={style.skills_wrapper}>
        <div className={`${styleContainer.container} ${style.skills_container}`}>
            <Title title='My Tech Stack'/>
            <div className={style.skills}>
                <Skill title='React'
                       description="Lorem ipsum dolor sit amet, consectetur "
                       icon={reactIcon}/>
                <Skill title='JS'
                       description="icing elit. Accusamus adipisci, aliquam animi, "
                       icon={jsIcon}/>
                <Skill title='TS'
                       description="Lorem ipsum dolor sit amet, consectetur "
                       icon={tsIcon}/>
                <Skill title='Redux'
                       description="Lorem ipsum dolor sit amet, consectetur t"
                       icon={reduxIcon}/>
                <Skill title='HTML'
                       description="Lorem ipsum dolor sit amet, consectetur idunt"
                       icon={htmlIcon}/>
                <Skill title='CSS'
                       description="icing elit. Accusamus adipisci, aliquam animi, mporibus voluptatem? Atque debitis eaque quidem"
                       icon={cssIcon}/>
                <Skill title='SASS'
                       description="icing elit. Accusamus adipisci, aliquam animi, "
                       icon={scssIcon}/>
                <Skill title='MUI'
                       description="icing elit. Accusamus adipisci, aliquam animi, "
                       icon={muiIcon}/>
                <Skill title='Git'
                       description="icing elit. Accusamus adipisci, aliquam animi, "
                       icon={gitIcon}/>
                <Skill title='GitHub'
                       description="icing elit. Accusamus adipisci, aliquam animi, "
                       icon={githubIcon}/>
            </div>
        </div>

    </div>
);


