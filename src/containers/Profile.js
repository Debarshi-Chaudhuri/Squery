import React from 'react';
//import { NavLink } from "react-router-dom";
import icon from '../icon.svg'
import { Button,Avatar ,makeStyles,Tooltip,Menu,MenuItem} from "@material-ui/core";
import Popup from "reactjs-popup";
const useStyles = makeStyles({
    avatar: {
      margin: 10,
    },
    bigAvatar: {
      width: 40,
      height: 40,
    },
  });
  
export const Profile=(props)=>{
  console.log(props)
  const storeImg=(e)=>
  {
    const user=props.firebase.auth().currentUser;
    //console.log(user);
    const str=props.firebase.storage();
    const db=props.firebase.firestore();
    str.ref().child('images').put(e.target.files[0]).then((snapshot)=>snapshot.ref.getDownloadURL().then((url)=>{db.collection("answeredques").doc(user.displayName).set({urlImgProfile:url},{merge:true})}))
  }
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return(
    <div className='Searchbar-header'>
      <p style={{color:'white',fontSize:'120%',marginLeft:'2%'}}>Squery</p>
      <input type='text' className='Searchbar-search' placeholder='What&apos;s your question? ' />
      <Button variant='contained' style={{backgroundColor:'rgba(219, 230, 235, 0.966)',height:'33px',left:'1%'}} ><img src={icon} /></Button>
      <div style={{width:'50%'}}>
        <Tooltip title="click to change or set profile picture" placement="bottom">
          <Avatar alt="Profile-pic" style={{cursor:'pointer',margin:'auto 10% auto auto'}} type="file" className={classes.bigAvatar} onClick={handleClick} aria-controls='simple-menu' />
        </Tooltip>  
        <Menu
            getContentAnchorEl={null}
            id="simple-menu"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
            <MenuItem style={{height:'-30px'}}>Profile</MenuItem>
            <MenuItem >My account</MenuItem>
            <MenuItem onClick={props.signOut} >Logout</MenuItem>
          </Menu>
      </div>
    </div>
  )
}
/*
<div className='Profile-header'>
          <Tooltip title="click to change or set profile picture" placement="bottom">
            <Avatar alt="Profile-pic" style={{cursor:'pointer'}} type="file" className={classes.bigAvatar} onChange={()=>storeImg} />
          </Tooltip>
          <p></p>
          <p style={{color:'white',fontSize:'120%'}}>Rating</p> 
          <div>
            <Popup 
            contentStyle={{width:'150%',border:"none",backgroundColor:'rgba(219, 230, 235, 0.966)',zIndex:'4',display:'flex',flexDirection:'column',borderRadius:'10px'}} 
            
            trigger={<Button variant='contained' style={{backgroundColor:'rgba(219, 230, 235, 0.966)',height:'100%'}} >Add Tags</Button>} 
            
            closeOnDocumentClick position="right center">
              
              <div>
                <p style={{marginLeft:'2%'}}>
                    Tags: You will get notfied if someone ask questions related to these topics. 
                </p>
                <p style={{marginLeft:'2%'}}>
                    Top tags :
                </p>
                <br></br>
                <p><input type="text" placeholder="Enter your tags" style={{width: '96%',height:'25px',borderRadius:'5px',borderWidth:'1px',marginLeft:'2%'}}/></p>
              </div>
            </Popup>    
          </div>
      </div>
  */