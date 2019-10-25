import React from 'react';
import {QuesItem} from "./QuesItem";
class QuesList extends React.Component{
    
    render()
    {
        let h1;
        if(this.props.uname===undefined)
        h1='Frequently Asked Questions'
        else
        h1='Questions You Have Answered'
        var jsondata=require("../qna.json");
        return(
            <div style={{width:'80%',marginLeft:'2%',padding:'55px',zIndex:'2'}}>
            <h1>{h1}</h1>
            <div>{
                jsondata.qna.map((items)=><QuesItem items={items}/>)
            }</div>
        </div>
        );
    }
}
export default QuesList;
