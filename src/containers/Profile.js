import React from 'react';
//import { NavLink } from "react-router-dom";
import { Button,Avatar ,makeStyles} from "@material-ui/core";
import Popup from "reactjs-popup";
const useStyles = makeStyles({
    avatar: {
      margin: 10,
    },
    bigAvatar: {
      margin: 50,
      width: 150,
      height: 150,
    },
  });
export const Profile=()=>{
    const classes = useStyles();
    return(
        <div className='Profile-header'>
            <Button><Avatar alt="Profile-pic" className={classes.bigAvatar}/></Button>
            <p style={{color:'white',fontSize:'120%',marginLeft:"95px"}}>Rating</p> 
            <div>
        <Popup contentStyle={{width:"600px",border:"none",backgroundColor:'rgba(219, 230, 235, 0.966)'}} trigger={<Button variant='contained' style={{backgroundColor:'rgba(219, 230, 235, 0.966)',height:'33px',marginLeft:"75px"}} >Add Tags</Button>} closeOnDocumentClick position="right center">
        
            <div>
        <div>
            Tags:You will get notfied if someone ask questions related to these topics. 
        </div>
        <br/><br/>
      <form>
        <div className="radio">
          Top tags:

        </div><br/><br/>
      </form>
      <input type="text" placeholder="Enter your tags" className="Searchbar-search"/>
            </div>
        
        

        </Popup>    
        </div>
        </div>
    )
}