import React from "react";
import style from "./Header.module.scss";
import { Nav } from "../Nav/Nav";

export const Header = () => (
  <div className={style.header}>
    <Nav />
  </div>
);
