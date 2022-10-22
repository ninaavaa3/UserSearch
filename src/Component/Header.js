import React from "react";
import classes from "./Header.module.css";
import  {ReactComponent as Envelope } from "../Icons/envelope-opened.svg";
import {ReactComponent as Menu} from "../Icons/menu.svg";
import {ReactComponent as Product} from "../Icons/github2.svg";
import {NavLink} from "react-router-dom";

 const Header=()=>{
    return(
        <header className={classes.header} >
            <span className={classes.flex}><NavLink to="/" className={classes.acontent}>Search<Product className={classes.envelope}/></NavLink></span>
            <div className={classes.ulcontent}>

                <span className={classes.flex}><NavLink to="/Home" className={classes.acontent}>Home <Envelope className={classes.envelope}/></NavLink></span>
                <span className={classes.flex}><NavLink to="/About" className={classes.acontent}> About<Menu className={classes.envelope}/></NavLink></span>
                
            </div>
        </header>
    )
 }
 export default Header;