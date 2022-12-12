import styleP from "./Title.module.scss";

export const Title = (props) => (

    <div className={styleP.title}>
        <h2>{props.title}</h2>
    </div>
);


