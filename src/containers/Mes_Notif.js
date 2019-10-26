import React from 'react';
//import { NavLink } from "react-router-dom";
import { Button,Avatar ,makeStyles, Grid} from "@material-ui/core";
import firebase from "../firebase";
const useStyles = makeStyles({
    avatar: {
      margin: 10,
    },
    bigAvatar: {
      margin: 10,
      width: 50,
      height: 50,
      backgroundColor:'rgba(0, 134, 196, 0.966)'
    },
  });

  
export const Mes_Notif=(props)=>{
    const classes = useStyles();
    return(
        <div style={{backgroundColor: ' rgba(0, 134, 196, 0.966)',position:'fixed',height:"100%",right:'0%',minWidth:'5%',justifyItems:'center',alignContent:'center',display:'flex',flexDirection:'column',textAlign:'center'}}>
          <Avatar alt="msg" style={{cursor:'pointer'}} src={require("../Images/blue.svg")} className={classes.bigAvatar}/>
          <Avatar alt="msg" style={{cursor:'pointer'}} src={require("../Images/notif.jpg")} className={classes.bigAvatar}/>
          <Avatar alt="msg" style={{cursor:'pointer'}} src={require("../Images/settings2.png")} className={classes.bigAvatar}/> 
          <Avatar alt="msg" style={{cursor:'pointer'}} src={require("../Images/signout.png")} className={classes.bigAvatar}/> 
        </div>
    )
}