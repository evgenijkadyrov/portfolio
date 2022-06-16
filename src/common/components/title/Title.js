import styleP from "./Title.module.css";

const Title = (props) => {
    return (

                <div className={styleP.title}>

                    <h2>{props.title}</h2>
                </div>

                   );
};

export default Title;