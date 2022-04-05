import React from 'react';
import style from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={style.mainContainer}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <div className={style.introduce}>
                    <span className={style.name}>Yauheni Kadyrau</span>
                    <h3 className={style.job}>Frontend Developer</h3>
                    <p className={style.stek}>React, redux</p>
                </div>
                <div className={style.foto}></div>
            </div>

        </div>
    );
};

export default Main;