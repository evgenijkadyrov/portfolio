import React from 'react';
import style from './Nav.module.scss'

const Nav = () => {
    return (
        <div className={style.nav}>
            <a href='Main'>Main</a>
            <a href='Skills'>Skills</a>
            <a href='Project'>Project</a>
            <a href='Contact'>Contact</a>
        </div>
    );
};

export default Nav;