const initialState={
    qna:[],
    loggedIn:false,
    userData:{},
    userStats:{},
    updateQuestion:0,
    updateAnswer:0
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
        case 'QUESTION_UPDATE':
        return{
            ...state,updateQuestion:state.updateQuestion+1
        }
        case 'ANSWER_UPDATE':
        return{
            ...state,updateAnswer:state.updateAnswer+1
        }
        default:
            return state;
    }
}