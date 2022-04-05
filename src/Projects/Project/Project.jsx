import React from 'react';
import style from './Project.module.css'

const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.foto}>
                <button className={style.btn}>
                    <a href={''}>View</a>
                </button>
            </div>

            <h4 className={style.title}>{props.title}</h4>
            <span className={style.description}>{props.description}</span>
        </div>
    );
};

export default Project;