import React from 'react';
import { Button } from "@material-ui/core";
import loader from '../Images/loader2.gif';
export const Account=(props)=>{
    if(props.info)
    return(
        <div className='Account-div'>
            <h1 style={{color:'rgba(0, 134, 196, 0.966)',fontFamily:'Ubuntu'}}>Create An Account</h1>
            <input type='text' className='Account-input' value={props.uname} placeholder='Name' name="uname" onChange={props.change}/><br></br>
            <input type='password' className='Account-input' value={props.pass} placeholder='Password' name="pass" onChange={props.change}/><br></br>
            <input type='email' value={props.email} name="email" onChange={props.change} className='Account-input' placeholder='Email' /><br></br>
            <Button variant='contained' style={{backgroundColor:'rgba(219, 230, 235, 0.966)',height:'33px'}} onClick={props.submitSignUp} >Submit</Button>
            <p>{props.loading && <img src={loader} style={{width:'15%',height:'6%'}} /> }</p>
        </div>
    )
    else
    return(
        <div className='Account-div'>
            <h1 style={{color:'rgba(0, 134, 196, 0.966)',fontFamily:'Ubuntu'}}>Sign In to Squery</h1>
            <input type='text' className='Account-input' value={props.uname} placeholder='Name' name="uname" onChange={props.change}/><br></br>
            <input type='password' className='Account-input' value={props.pass} placeholder='Password' name="pass" onChange={props.change}/><br></br>
            <Button variant='contained' style={{backgroundColor:'rgba(219, 230, 235, 0.966)',height:'33px'}} onClick={props.submitSignIn} >Submit </Button>
            <p>{props.loading && <img src={loader} style={{width:'15%',height:'6%'}} /> }</p>
        </div> 
    )
}
