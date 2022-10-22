import React from "react";
import classes from "./Home.module.css";

import {ReactComponent as Product} from "../Icons/github2.svg";


const About=()=>{

    return(
        <>
       
        <h2 className={classes.home}>
            this is About page; a github search!
        </h2>
        </>
    )
} 

export default About;

