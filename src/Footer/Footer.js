import React from 'react';
import style from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'



const Footer = () => {
    return (
        <div className={style.footer_wrapper}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <div className={style.items}>
                    <div className={style.icon}>
                        <FontAwesomeIcon className={style.icon } icon={faLinkedin} size={'3x'}/>
                    </div>
                    <div className={`${style.icon} ${style.round}`}>
                        <FontAwesomeIcon icon={faGithub} size={'3x'}/>
                    </div>



                    <div className={style.icon}></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;