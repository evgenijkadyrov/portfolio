import React from "react";
import style from "./Nav.module.scss"
import {LinkContainer} from "../common";

export const Nav = () => {
    return (
        <div className={style.nav}>

            <LinkContainer id='main' title='Main'/>
            <LinkContainer id='skills' title='Skills'/>
            <LinkContainer id='projects' title='Projects'/>
            <LinkContainer id='contact' title='Contacts'/>

        </div>
    );
};
