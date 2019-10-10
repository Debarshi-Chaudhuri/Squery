import firebase from '../firebase.js';
export const homepageOnLoad=(data)=>{
    return({
        type:'HOMEPAGE_ON_LOAD',
        payload:data
    })
}