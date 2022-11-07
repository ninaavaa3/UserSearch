import React from "react";
import classes from "./Home.module.css";




const About = () => {

    return (
        <>

            <h2 className={classes.home}>
                this is a free photo and video sharing app available on web!
            </h2>
            <address className={classes.emailadd}>
                launched by: <a href="mailto:ninaavaa3@gmail.com" className={classes.acontent}>NiloofarHajiloo</a>
            </address>
        </>
    )
}

export default About;

