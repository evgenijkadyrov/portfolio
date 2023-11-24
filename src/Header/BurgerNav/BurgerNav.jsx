import React, {useState} from "react";
import style from "./BurgerNav.module.scss";
import {LinkContainer} from "../../common";

export const BurgerNav = () => {
const [openBurger,setOpenBurger]=useState(false)
    const hadleButtonBurger=()=>{
        setOpenBurger(!openBurger)
    }
    return (
        <div className={style.burgerNav}>
            <div className={openBurger? `${style.burgerNavItems} ${style.show}`:style.burgerNavItems}>

                <LinkContainer id="main" title="Main"/>
                <LinkContainer id="skills" title="Skills"/>
                <LinkContainer id="projects" title="Projects"/>
                <LinkContainer id="contact" title="Contacts"/>
            </div>
            <div className={style.burgerButton} onClick={hadleButtonBurger}></div>
        </div>
    );
};
