import React from 'react';
import icon from '../icon.svg'
import { Button,Avatar ,makeStyles,Tooltip,SwipeableDrawer,List,ListItemText,ListItem,Divider} from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    display:'flex',
    justifyContent:'center'
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);
//PrisonMike.jpeg
//msg.png

export const Profile=(props)=>{
  console.log(props)
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    right: false,
    image:require('../Images/msg.png')
  });
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
  

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const classes = useStyles();
  const tempStoreImg=(e)=>{
    const user=props.firebase.auth().currentUser;
    //console.log(user);
    const str=props.firebase.storage();
    const db=props.firebase.firestore();
    str.ref().child('images').put(e.target.files[0]).then((snapshot)=>snapshot.ref.getDownloadURL().then((url)=>{setState({ ...state, image: url });}));   
  }
  const storeImg=()=>
  {
    const user=props.firebase.auth().currentUser;
    console.log(state.image);
    const str=props.firebase.storage();
    const db=props.firebase.firestore();
    str.ref().child('images').put(state.image).then((snapshot)=>snapshot.ref.getDownloadURL().then((url)=>{db.collection("answeredques").doc(user.displayName).set({profilePic:url},{merge:true})}));
  }
  const listClick = event =>{
    console.log(event.target.id)
    if(event.target.id==='Logout')
    props.signOut()
    else if(event.target.id==='Change Profile Picture')
    handleClickOpen();
  }
  const sideList = side => (
    <div
      className={classes.list}
    >
      <List>
        {['Profile','Change Profile Picture', 'Messages', 'Add Post', 'Logout'].map((text, index) => (
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
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Change Avatar
        </DialogTitle>
        <DialogContent dividers>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'350px',width:'400px'}}>
            <img src={state.image} style={{maxHeight:'70%',maxWidth:'70%'}} />
          </div>
        </DialogContent>
        <DialogActions>
          <input type='file' onChange={tempStoreImg}/>
          <Button onClick={storeImg} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}