import React from "react";
import classes from "./component.module.css";
import { useHistory } from "react-router-dom";

const Component = (props) => {
    const history = useHistory();
    const gotopage = (e) => {
        e.preventDefault();
        // history.push('/mypage');
        history.push({
            pathname: '/mypage',
            state: { details: props }
        });
    }

    return (
        <div>
            <form onSubmit={gotopage}>
                <h2 className={classes.namestyle}>{props.text}</h2>
                <img src={props.avatar} width={50} height={50} />
                <button className={classes.btn} type="submit">see page!</button>
            </form>
        </div>
    )
};
export default Component;