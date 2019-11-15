import React from 'react';
import icon from '../icon.svg'
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
export const Searchbar=()=>{
    return(
        <div className='Searchbar-header'>
            <p style={{color:'black',fontSize:'120%',marginLeft:'2%',fontWeight:'350'}}>Squery</p>
            <input type='text' className='Searchbar-search' placeholder='What&apos;s your question? ' />
            <Button variant='contained' style={{backgroundColor:'rgba(219, 230, 235, 0.966)',height:'31px',left:'1%'}} ><img style={{height:'20px'}} src={icon} /></Button>
            <NavLink className='Searchbar-login' to='/Volunteer' >Login as a volunteer ?</NavLink>
        </div>
    )
}