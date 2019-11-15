import React from 'react';
//import { NavLink } from "react-router-dom";
import {Card, CardActions,CardActionArea,CardContent,CardHeader,CardMedia ,Typography,IconButton,Collapse,makeStyles,Badge ,Button,TextareaAutosize} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
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
    //console.log(props)
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [text,setText]=React.useState('');
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    const [ans,setAns]=React.useState([]);
    React.useEffect(()=>{
      const db=props.firebase.firestore();
      db.collection('answers').doc(`${props.items.id}`).collection('data').get().then(
        (query)=>{
          let a=[]
          query.forEach(
            (doc)=>{
              a=[...a,doc]
            }
          )
          setAns(a)
          //console.log(ans)
        }
      )
    },[props.updateCount])
    const postAnswer=()=>{
      //console.log(text)
      if(text!==''){
        let x=text;
        let questionId;
        const db=props.firebase.firestore();
        db.collection('answers').doc(`${props.items.id}`).collection('data').add({answer:x,upvote:0,answeredBy:props.uname})

        db.collection('answeredques').doc(`${name}`).collection('questions').doc(`${props.items.id}`).set({answered:true},{merge:true})

        db.collection('questions').get().then(
          (query)=>{                                                
            query.forEach(
              (doc)=>{
               
                if(doc.data().id===props.items.id)
                questionId=doc.id;
              }
            )
            console.log(questionId)
            db.collection('questions').doc(`${questionId}`).set({answered:true},{merge:true})
            props.dataUpdate();
          }
        )
        
        setText('')
      }
      else
      alert('Write something')
    }
    const writeAnswer=(event)=>{
      setText(event.target.value)
    }
    let name='';
    if(props.uname===undefined)
    name=props.items.postedBy
    else
    name=props.uname
    const db=props.firebase.firestore();
    const upvote=(d,l)=>
    {
      db.collection('answers').doc(`${props.items.id}`).collection('data').doc(`${d}`).set({upvote:l+1})
      console.log(d);
      console.log(l);
    }
    const downvote=(d,l)=>
    {
      db.collection('answers').doc(`${props.items.id}`).collection('data').doc(`${d}`).set({downvote:l+1})
    }
    return(<div>
    <br/>
        <Card style={{borderRadius:"10px",shadowColor: '#000000',backgroundColor:"#e4f5ef"}}>
          <CardContent>
            <span style={{fontSize:'13px',fontWeight:'lighter'}}>Posted by: {name}</span>
            <Typography><b> {props.items.question}</b></Typography><br/><hr/>
            
            { ans.map((data)=>{
                  return(<div><Typography style={{fontSize:'15px',fontWeight:'400'}}><span style={{fontSize:"15px"}}><b>{data.data().answeredBy}</b></span> repled:   {data.data().answer}</Typography><br/>
                 <hr/></div>)
              })
            }
          </CardContent>
        <CardActions disableSpacing>
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
          <TextareaAutosize rows={10} rowsMax={10} placeholder="Write your answer here" style={styles.textarea} onChange={writeAnswer} value={text}/><br></br>
          <Button   style={{backgroundColor:'white',marginLeft:'2%',textAlign:'center',height:'30px',width:'50px',display:'flex',justifyContent:'center',fontSize:'12px',backgroundColor:'rgba(0, 134, 196, 0.966)',color:'white'}} onClick={postAnswer} >Submit</Button>
        </CardContent>
      </Collapse>
        </Card>
    </div>)
}