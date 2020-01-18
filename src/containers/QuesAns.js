import React from 'react';
//import { NavLink } from "react-router-dom";
import {Card,CardActions,CardActionArea,CardContent,CardHeader,CardMedia ,Typography,IconButton } from "@material-ui/core";
import {FavoriteIcon} from "@material-ui/icons/Favorite";
import "../qna.json";
export const QuesAns=(props)=>{
    let h1;
    var jsondata=require("../qna.json");
    console.log(props.uname)
    if(props.uname===undefined)
    h1='Frequently Asked Questions'
    else
    h1='Questions You Have Answered'
    return(
        <div style={{width:'80%',marginLeft:'2%',padding:'55px',zIndex:'2'}}>
            <h1>{h1}</h1>
            <div>{
                jsondata.qna.map((items)=><Card><CardHeader>By :</CardHeader><CardContent><div></div><Typography>Question: {items.ques}</Typography><Typography>Reply: {items.ans}</Typography></CardContent><CardActions disableSpacing><IconButton><FavoriteIcon/></IconButton></CardActions></Card>)
            }</div>
        </div>
    
    )
}