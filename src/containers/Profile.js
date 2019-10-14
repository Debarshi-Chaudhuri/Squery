import React from 'react';
//import { NavLink } from "react-router-dom";
import icon from '../icon.svg'
import { Button,Avatar ,makeStyles,Tooltip,SwipeableDrawer,List,ListItemText,ListItem,Divider} from "@material-ui/core";
import {ArrowDropDown} from '@material-ui/icons'
import Popup from "reactjs-popup";

  
export const Profile=(props)=>{
  console.log(props)
  const useStyles = makeStyles({
    avatar: {
      margin: 10,
    },
    bigAvatar: {
      width: 40,
      height: 40,
    },
    list: {
      width: 250,
    },
  });
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const classes = useStyles();
  const storeImg=(e)=>
  {
    const user=props.firebase.auth().currentUser;
    //console.log(user);
    const str=props.firebase.storage();
    const db=props.firebase.firestore();
    str.ref().child('images').put(e.target.files[0]).then((snapshot)=>snapshot.ref.getDownloadURL().then((url)=>{db.collection("answeredques").doc(user.displayName).set({urlImgProfile:url},{merge:true})}))
  }
  const listClick = event =>{
    console.log(event.target.id)
    if(event.target.id==='Logout')
    props.signOut()
  }
  const sideList = side => (
    <div
      className={classes.list}
    >
      <List>
        {['Profile', 'Messages', 'Add Post', 'Logout'].map((text, index) => (
          <ListItem button key={text} id={`${text}`} style={{height:'50px'}} onClick={listClick}>
            {text}
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[ 'Settings', 'About'].map((text, index) => (
          <ListItem button key={text} style={{height:'50px'}} id={`${text}`} onClick={listClick}>
            {text}
          </ListItem>
        ))}
      </List>
    </div>
  );
  return(
    <div className='Searchbar-header'>
      <p style={{color:'white',fontSize:'120%',marginLeft:'2%'}}>Squery</p>
      <input type='text' className='Searchbar-search' placeholder='What&apos;s your question? ' />
      <Button variant='contained' style={{backgroundColor:'rgba(219, 230, 235, 0.966)',height:'33px',left:'1%'}} ><img src={icon} /></Button>
      <div style={{width:'40%',display:'inline-flex',alignItems:'center'}}>
        <Tooltip title="click to change or set profile picture" placement="bottom">
          <Avatar alt="Profile-pic" style={{cursor:'pointer',margin:'auto 5px auto auto'}} type="file" className={classes.bigAvatar} onClick={toggleDrawer('right', true)} />
        </Tooltip>  
      </div>
      <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
      >
        {sideList('right')}
      </SwipeableDrawer>
    </div>
  )
}