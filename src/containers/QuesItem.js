import React from 'react';
//import { NavLink } from "react-router-dom";
import {Card, CardActions,CardActionArea,CardContent,CardHeader,CardMedia ,Typography,IconButton,Collapse,makeStyles ,Button,TextareaAutosize} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
//import "../qna.json";
const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    
  })
);

const styles={
  textarea:{
    borderRadius:'2px',
    width:"85%",
    fontSize:"14px",
    marginLeft:'2%',
    outline:'none'
  }
}
export const QuesItem=(props)=>
{
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    let name='';
    if(props.uname===undefined)
    name=props.items.postedBy
    else
    name=props.uname

    return(<div>
    <br/>
        <Card style={{borderRadius:"10px",shadowColor: '#000000',backgroundColor:"#e4f5ef"}}>
          <CardContent>
            <span style={{fontSize:'13px',fontWeight:'lighter'}}>Posted by: {name}</span>
            <Typography><b> {props.items.question}</b></Typography><br/>
            <Typography>{props.items.replyby} {props.items.ans}</Typography>
          </CardContent>
        <CardActions disableSpacing>
          <IconButton><FavoriteIcon/></IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <TextareaAutosize rows={10} rowsMax={10} placeholder="Write your answer here" style={styles.textarea}/><br></br>
          <Button   style={{backgroundColor:'white',marginLeft:'2%',textAlign:'center',height:'30px',width:'50px',display:'flex',justifyContent:'center',fontSize:'12px',backgroundColor:'rgba(0, 134, 196, 0.966)',color:'white'}} >Submit</Button>
        </CardContent>
      </Collapse>
        </Card>
    </div>)
}