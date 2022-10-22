import React from "react";
import { useLocation } from "react-router-dom";
import classes from "./Mypage.module.css"

const Mypage = () => {
    const location = useLocation();

    return (
        <>
        <img className={classes.img} src={location.state.details.avatar
         } width="150" height="150"/>
           <h2 className={classes.text}>{location.state.details.text}</h2>
         <div className={classes.grid}>
          
            <div class="ui labeled button" tabindex="0">
                <div class="ui red button">
                    <i class="heart icon"></i> following
                </div>
                <a class="ui basic red left pointing label">
                  125
                </a>
            </div>
            <div class="ui labeled button" tabindex="0">
                <div class="ui basic blue button">
                    <i class="fork icon"></i> followers
                </div>
                <a class="ui basic left pointing blue label">
                    305
                </a>
                </div>
            </div>
        </>
    )
};
export default Mypage;