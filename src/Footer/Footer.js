import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'
const Footer = () => {
    return (
        <div  className={style.footer_wrapper}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <div className={style.items}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;