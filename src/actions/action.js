import firebase from '../firebase.js';
export const homepageOnLoad=(data)=>{
    return({
        type:'HOMEPAGE_ON_LOAD',
        payload:data
    })
}
export const loggingIn=(data)=>{
    return({
        type:'LOGGING_IN',
        payload:data
    })
}
export const loggingOut=()=>{
    return({
        type:'LOGGING_OUT'
    })
}