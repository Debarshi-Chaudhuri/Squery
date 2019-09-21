import React from 'react';
//import { NavLink } from "react-router-dom";
import { Button,Avatar ,makeStyles, Grid} from "@material-ui/core";
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
export const Mes_Notif=()=>{
    const classes = useStyles();
    return(
        <div style={{backgroundColor: 'rgba(0, 134, 196, 0.966)',position:"fixed",height:"100%"}}>
          <Grid container direction="column" justify="flex-start" alignItems="flex-end">
          
              <Avatar alt="msg" style={{cursor:'pointer'}} src={require("../Images/msg1.png")} className={classes.bigAvatar}/>
              <Avatar alt="msg" style={{cursor:'pointer'}} src={require("../Images/notif3.png")} className={classes.bigAvatar}/>
          
          </Grid>
        </div>
    )
}