import React from 'react';
import icon from '../icon.svg'
import { Button,Avatar ,makeStyles,Tooltip,SwipeableDrawer,List,ListItemText,ListItem,Divider,TextareaAutosize} from "@material-ui/core";
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

  //console.log(props)
  const [openProfile, setOpenProfile] = React.useState(false);
  const [openPost, setOpenPost] = React.useState(false);
  const [state, setState] = React.useState({
    right: false,
    image:props.userData.profilePic,
    prevImage:props.userData.profilePic,
    text:""
  });
  const [file,setFile]=React.useState(null)

  
  const handleClickOpenProfile = () => {
    setOpenProfile(true);
  };
  const handleClickOpenPost = () => {
    setOpenPost(true);
  };

  const handleCloseProfile = (val) => {
    
    setOpenProfile(false);
    if(val){
      setTimeout(()=>setState({...state,image:state.prevImage}),500)
    }
  };
  const handleClosePost = () => {
    setOpenPost(false);
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


  const textchange=(e)=>{
    setState({...state,text:e.target.value})
  }
  const saveText=()=>{
    const db=props.firebase.firestore();
    /*db.collection('answeredques').doc(`${props.firebase.auth().currentUser.displayName}`).collection('questions').add({question:state.text}).then(
      (doc)=>{
        db.collection('answer').doc(doc.id).set({question:state.text,postedby:`${props.firebase.auth().currentUser.displayName}`})
      })*/
    if(state.text!==''){
      db.collection('answeredques').doc(`${props.uname}`).set({count:props.userStats.count+1},{merge:true}).then(
        ()=>{
          db.collection('answeredques').doc(`${props.uname}`).get().then(
            (query)=>{
              props.profileDataLoad(query.data());

              db.collection('answeredques').doc(`${props.uname}`).collection('questions').doc(`${props.uname}ques${props.userStats.count}`).set({question:state.text})

              db.collection('questions').add({question:state.text,postedBy:`${props.uname}`,id:`${props.uname}ques${props.userStats.count}`})           
            }
          )
        }
      )
      handleClosePost();
    }
  }


  const tempStoreImg=(e)=>{
    const user=props.firebase.auth().currentUser;
    //console.log(user);
    const str=props.firebase.storage();
    //const db=props.firebase.firestore();
    console.log('A')
    setFile(e.target.files[0])
    str.ref().child(`temp${user.displayName}`).put(e.target.files[0]).then(
      (snapshot)=>{
        snapshot.ref.getDownloadURL().then(
        (url)=>{
          setState({ ...state,image: url});
      })}
    );   
  }
  const storeImg=()=>
  {
    console.log(file)
    const user=props.firebase.auth().currentUser;
    console.log(state.image);
    const str=props.firebase.storage();
    const db=props.firebase.firestore();
    console.log(str.ref().child(`temp${user.displayName}`))

    str.ref().child(`${user.displayName}`).put(file).then((snapshot)=>snapshot.ref.getDownloadURL().then((url)=>{
      db.collection("answeredques").doc(user.displayName).set({profilePic:url},{merge:true})
      setState({ ...state,image: url,prevImage:url })
      handleCloseProfile(false);
   ;}));
  }
  const listClick = event =>{
    console.log(event.target.id)
    if(event.target.id==='Logout')
    props.signOut()
    else if(event.target.id==='Change Profile Picture')
    handleClickOpenProfile();
    else if(event.target.id==='Add Post')
    handleClickOpenPost();
  }
  
  const sideList = side => (
    <div
      className={classes.list}
    >
      <List>
        
          <ListItem style={{height:'30px'}} onClick={listClick}>
            <p><b>Signed-In As </b></p>
          </ListItem>
          <ListItem style={{height:'30px'}} onClick={listClick}>
            <p>{props.firebase.auth().currentUser.displayName}</p>
          </ListItem>
      </List>  
      <List>
        {['Change Profile Picture', 'Messages', 'Add Post', 'Logout'].map((text, index) => (
          <ListItem button key={text} id={`${text}`} style={{height:'40px',fontSize:'15px',fontWeight:'400'}} onClick={listClick}>
            {text}
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[ 'Settings', 'About'].map((text, index) => (
          <ListItem button key={text} style={{height:'40px',fontSize:'15px',fontWeight:'400'}} id={`${text}`} onClick={listClick}>
            {text}
          </ListItem>
        ))}
      </List>
    </div>
  );
  return(
    <div className='Searchbar-header'>
      <p style={{color:'black',fontSize:'120%',marginLeft:'2%',fontWeight:'350'}}>Squery</p>
      <input type='text' className='Searchbar-search' placeholder='What&apos;s your question? ' />
      <Button variant='contained' style={{backgroundColor:'rgba(219, 230, 235, 0.966)',height:'31px',left:'1%'}} ><img style={{height:'20px'}} src={icon} /></Button>
      <div style={{width:'40%',display:'inline-flex',alignItems:'center'}}>
        <Tooltip title="click to change or set profile picture" placement="bottom">
          <Avatar alt={`${props.uname.charAt(0)}`} style={{cursor:'pointer',margin:'auto 5px auto auto',backgroundColor:'white'}} type="file" className={classes.bigAvatar} onClick={toggleDrawer('right', true)} src={`${state.image}`} />
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
      <Dialog onClose={()=>handleCloseProfile(true)} aria-labelledby="customized-dialog-title" open={openProfile}>
        <DialogTitle id="customized-dialog-title" onClose={()=>handleCloseProfile(true)}>
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
      <Dialog onClose={handleClosePost} aria-labelledby="customized-dialog-title" open={openPost}>
        <DialogTitle id="customized-dialog-title" onClose={handleClosePost}>
          Ask Question 
        </DialogTitle>
        <DialogContent dividers>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'150px',width:'600px'}}>
            <TextareaAutosize rows={10} rowsMax={10} placeholder="Write your question here..." style={{width:'500px',outline:'none',borderRadius:'2px'}}/>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={saveText} color="primary">
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}