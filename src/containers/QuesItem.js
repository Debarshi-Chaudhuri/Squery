import React from 'react';
//import { NavLink } from "react-router-dom";
import {Card, CardActions,CardActionArea,CardContent,CardHeader,CardMedia ,Typography,IconButton,Collapse,makeStyles ,Button} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import "../qna.json";
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
    
  }));
export const QuesItem=(props)=>
{
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    return(<div>
    <br/>
        <Card style={{borderRadius:"10px",shadowColor: '#000000',backgroundColor:"#e6ffff"}}>
        <CardContent>
        <span>Posted by: {props.items.postby}</span>
        <div>
        <Typography>Question: {props.items.ques}</Typography><br/>
        <Typography>{props.items.replyby} replied: {props.items.ans}</Typography></div>
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
          <input placeholder="Write your answer here" style={{borderRadius:"15px",height:"30px",width:"85%",fontSize:"14px"}}/>
          <Button variant='contained' style={{backgroundColor:'rgba(219, 230, 235, 0.966)',height:'31px',left:'1%'}} >Post</Button>
        </CardContent>
      </Collapse>
        </Card>
    </div>)
}