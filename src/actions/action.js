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
export const profileLoad=(user)=>{
    return({
        type:'PROFILE_LOAD',
        payload:{
            email:user.email,pass:user.pass,profilePic:user.profilePic,active:user.active
        }
    })
}
export const profileDataLoad=(user)=>{
    return({
        type:'PROFILE_DATA_LOAD',
        payload:{
            count:user.count
        }
    })
}
export const questionsLoad=(data)=>{
    return({
        type:'QUESTIONS_LOAD',
        payload:data
    })
}
export const questionUpdate=()=>{
    return({
        type:'QUESTION_UPDATE'
    })
}
export const answerUpdate=()=>{
    return({
        type:'ANSWER_UPDATE'
    })
}