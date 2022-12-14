import React from "react";
import style from "./Header.module.scss";
import {Nav} from "../Nav/Nav";
import {BurgerNav} from "./BurgerNav/BurgerNav";

export const Header = () => (
    <div className={style.header}>
        <Nav/>
        <BurgerNav/>

    </div>
);
