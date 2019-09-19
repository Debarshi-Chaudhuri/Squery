import React from 'react';
export const Account=(props)=>{
    if(props.info)
    return(
    <div className='CreateAnAccount-div'>
        <h1 style={{color:'rgba(0, 134, 196, 0.966)'}}>Create An Account</h1>
        <input type='text' className='CreateAnAccount-input' placeholder='Name' /><br></br>
        <input type='password' className='CreateAnAccount-input' placeholder='Password' /><br></br>
        <input type='email' className='CreateAnAccount-input' placeholder='Email' /><br></br>
        
    </div>
    )
    else
    return(
        <div className='CreateAnAccount-div'>
            <h1 style={{color:'rgba(0, 134, 196, 0.966)'}}>Sign In</h1>
            <input type='text' className='CreateAnAccount-input' placeholder='Name' /><br></br>
            <input type='password' className='CreateAnAccount-input' placeholder='Password' /><br></br>
        </div>
    )
}