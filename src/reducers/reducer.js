const initialState={
    qna:[],
    loggedIn:false,
    userData:{}
}
export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'HOMEPAGE_ON_LOAD':
            return{
                ...state,qna:action.payload
            }
        case 'LOGGING_IN':
            return{
                ...state,user:action.payload,loggedIn:true
            }
        case 'LOGGING_OUT':
            return{
                ...state,loggedIn:false,user:{}
            }
        case 'PROFILE_LOAD':
            return{
                ...state,userData:action.payload
            }
        default:
            return state;
    }
}