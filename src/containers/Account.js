import React from 'react';
import { Button } from "@material-ui/core";
export const Account=(props)=>{
    if(props.info)
    return(
    <div className='Account-div'>
        <h1 style={{color:'rgba(0, 134, 196, 0.966)',fontFamily:'Ubuntu'}}>Create An Account</h1>
        <input type='text' className='Account-input' placeholder='Name' /><br></br>
        <input type='password' className='Account-input' placeholder='Password' /><br></br>
        <input type='email' className='Account-input' placeholder='Email' /><br></br>
        <Button variant='contained' style={{backgroundColor:'rgba(219, 230, 235, 0.966)',height:'33px'}} >Submit</Button>
    </div>
    )
    else
    return(
        <div className='Account-div'>
            <h1 style={{color:'rgba(0, 134, 196, 0.966)',fontFamily:'Ubuntu'}}>Sign In to Squery</h1>
            <input type='text' className='Account-input' placeholder='Name' /><br></br>
            <input type='password' className='Account-input' placeholder='Password' /><br></br>
            <Button variant='contained' style={{backgroundColor:'rgba(219, 230, 235, 0.966)',height:'33px'}} >Submit </Button>
        </div>
    )
}