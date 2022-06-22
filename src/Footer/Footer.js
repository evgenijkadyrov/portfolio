import React from 'react';
import style from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'



const Footer = () => {
    return (
        <div className={style.footer_wrapper}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <div className={style.items}>

                    <div className={style.icon}> <FontAwesomeIcon icon={faLinkedin} size={'3x'}/></div>

                    <div className={style.icon}><FontAwesomeIcon icon={faGithubSquare} size={'3x'}/></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;