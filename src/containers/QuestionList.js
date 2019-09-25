import React from 'react';
export const QuestionList=(props)=>{
    console.log(props.qna)
    return(
        <div>{
            props.qna.map((qna)=>{
                return (
                    <div className='Qna-div'>
                        <ul>
                            <p>Question : {qna.ques}</p>
                            <p>Answer : {qna.ans}</p>
                        </ul>
                        <hr></hr>
                    </div>
                )
            })
        }</div>
    )
}