const initialState={
    qna:[],
    loggedIn:false,
    user:{}
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
        default:
            return state;
    }
}