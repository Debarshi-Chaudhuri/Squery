import React from 'react';
//import { NavLink } from "react-router-dom";


export const QuesAns=()=>{
    var a=[1,21,2,1,2,12,1,21,31,23,12,,12,23,4,23,423,4,234,23,4,234,324,23,4,234,23,4,324,23,4,34,32,423,4,234,23,4,324,23,4,324,32,423,5,245,23,4,324,23,432,4,23,423,4,234,23,4,234,23,4,234,23,4,34,23423,4,324,32,4,234,32,4,32,42,34,23,432,4,23,423,4,23,4234,23,4,23,432,4,323,,32,43,43,34,342,34,342,34,342,34,342,324,342,3,24,432,324,34,23,423,4,23,4,234,23,4,23,42,34,,234,32,432,4,234,32,4]
    return(
        <div style={{marginLeft:'130px',width:'100%',marginRight:'20%',alignContent:'center',justifyItems:'center'}}>
            
            <div style={{width:'80%',left:'20%',right:'100px',position:'relative',padding:'5%'}}>
                <h1>Questions You Have Answered</h1>
                <div>{
                    a.map((items)=><p>{items}<hr></hr></p>)
                }</div>
            </div>
        </div>
    )
}