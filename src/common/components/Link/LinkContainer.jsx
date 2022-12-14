import { Link } from "react-scroll";
import style from "./LinkContainer.module.scss";
import React from "react";

export const LinkContainer = (props) => {
  return (
    <Link

      to={props.id}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      delay={50}
    >
      {props.title}
    </Link>
  );
};
