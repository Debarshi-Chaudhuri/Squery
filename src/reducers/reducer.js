const initialState={
    qna:[],
    loggedIn:false,
    userData:{},
    userStats:{},
    updateCount:0
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
        case 'PROFILE_DATA_LOAD':
        return{
            ...state,userStats:action.payload
        }
        case 'QUESTIONS_LOAD':
        return{
            ...state,qna:action.payload
        }
        case 'DATA_UPDATE':
        return{
            ...state,updateCount:state.updateCount+1
        }
        default:
            return state;
    }
}