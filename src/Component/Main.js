import React, { useState } from "react";
import Component from "./Component";
import classes from "./Main.module.css";


const Main = (props) => {

  const [myInputname, setMyInputname] = useState("");


  const changehandler = (event) => {
    setMyInputname(event.currentTarget.value);
    console.log(event.currentTarget.value);

  }
  const delet = () => {
    props.deletandler(myInputname);
  }

  return (
    <>
      <div className={classes.container}>
      
        <input required type="text" placeholder="search user" className={classes.input} onChange={changehandler} value={myInputname}/>
        
        <br /><button onClick={delet} className={classes.buttomstyle} >Submit</button>
        <div className={classes.gridcontainer}>
          {props.note.map(obj => <Component text={obj.text} avatar={obj.avatar} />)}
        </div>
      </div>
    </>
  );

}
export default Main;