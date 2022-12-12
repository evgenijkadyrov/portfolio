import Typewriter from "typewriter-effect";
import React from "react";

export const TypeWriter = (props) => {
    return (
        <Typewriter options={{
            strings: props.text,
            autoStart: true,
            loop: true,
            pauseFor: 3000,

        }}/>
    )
}