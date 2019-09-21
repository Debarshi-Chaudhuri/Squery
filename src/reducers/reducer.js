const initialState={
    qna:[]
}
export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'HOMEPAGE_ON_LOAD':
            return{
                ...state,qna:action.payload
            }
        default:
            return state;
    }
}