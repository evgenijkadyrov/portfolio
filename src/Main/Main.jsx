import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import myselfFoto from '../assets/image/IMG_20191010_104235.jpg'


const Emoji = props => (
    <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
    {props.symbol}
  </span>
)
const Main = () => {
    return (
        <div className={style.mainContainer}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <div className={style.introduce}>
                    <p>Hi
                        <Emoji label={'hi'} symbol={'👋'}/>,

                    </p>

                    <p>My name is</p>
                    <p className={style.gradient}>Yauheni Kadyrau</p>
                    <p>I'm Front-end developer</p>

                </div>
                <div className={style.foto}>
                    <img src={myselfFoto}/>
                </div>
            </div>

        </div>
    );
};

export default Main;