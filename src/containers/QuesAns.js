import React from 'react';
//import { NavLink } from "react-router-dom";
import {Card,CardActions,CardActionArea,CardContent,CardHeader,CardMedia ,Typography,IconButton } from "@material-ui/core";
import {FavoriteIcon} from "@material-ui/icons/Favorite";
import "../qna.json";
export const QuesAns=(props)=>{
    let h1;
    var jsondata=require("../qna.json");
    console.log(props.uname)
    var a=[1,21,2,1,2,12,1,21,31,23,12,,12,23,4,23,423,4,234,23,4,234,324,23,4,234,23,4,324,23,4,34,32,423,4,234,23,4,324,23,4,324,32,423,5,245,23,4,324,23,432,4,23,423,4,234,23,4,234,23,4,234,23,4,34,23423,4,324,32,4,234,32,4,32,42,34,23,432,4,23,423,4,23,4234,23,4,23,432,4,323,,32,43,43,34,342,34,342,34,342,34,342,324,342,3,24,432,324,34,23,423,4,23,4,234,23,4,23,42,34,,234,32,432,4,234,32,4]
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