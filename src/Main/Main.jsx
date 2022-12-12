import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import myselfFoto from '../assets/image/IMG_20191010_104235.jpg'
import Fade from 'react-reveal/Fade';
import {ParticlesContainer,Emoji,TypeWriter} from "../common";


export const Main = () =>  (
        <div id='main' className={style.mainContainer}>
            <ParticlesContainer/>
            <Fade top cascade>
                <div className={`${styleContainer.container} ${style.container}`}>
                    <div className={style.introduce}>
                        <p>Hi
                            <Emoji label={'hi'} symbol={'👋'}/>,
                        </p>
                        <p>My name is</p>
                        <p className={style.gradient}>Yauheni Kadyrau</p>
                        <div>
                            <TypeWriter text="I'm Front-end Developer"/>
                        </div>
                    </div>
                    <div className={style.foto}>
                        <img src={myselfFoto}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
