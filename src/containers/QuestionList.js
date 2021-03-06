import React from 'react';
import {QuesItem} from "./QuesItem";
import firebase from "../firebase";
export const QuesList =(props)=>{
    const [loadAnswer,setLoadAnswer]=React.useState(true)
    const [bool,setState]=React.useState(false)
    const db=firebase.firestore();
    React.useEffect(()=>{
        //console.log(props)
        setLoadAnswer(true)
        if(props.uname!==undefined){
            //db.collection('answeredques').doc(this.props.uname).collection('qna').onSnapshot((snapshot)=>snapshot.docs.forEach((doc)=>console.log(doc.data())))
            db.collection('answeredques').doc(props.uname).collection('questions').orderBy('time').get().then(
                (query)=>{
                    let a=[]
                    query.forEach((doc)=>{
                        a=[doc.data(),...a]
                    })
                    props.questionsLoad(a)
                    props.answerUpdate()
                    setState(true)
                    setLoadAnswer(false)
                }
            )
        }
        else{
            db.collection('questions').get().then(
                (query)=>{
                    let a=[]
                    query.forEach((doc)=>{
                        a=[doc.data(),...a]
                    })
                    console.log('a')
                    props.questionsLoad(a)
                    setLoadAnswer(false)
                    setState(true)
                }
            )
        }
    },[props.updateQuestion])
    //db.collection('answerques').doc(this.props.uname).collection('qna').onSnapshot((snapshot)=>{snapshot.docs.forEach((doc)=>)});

    let h1;
    if(props.uname===undefined)
    h1='Frequently Asked Questions'
    else
    h1='Questions You Have Answered'
    var jsondata=require("../qna.json");
    var name="something";
    const d=db.collection('answeredques/Pacharjee/qna');
        //db.collection('answerques').doc(this.props.uname).collection('qna').onSnapshot((snapshot)=>snapshot.docs.forEach((doc)=>console.log(doc.data())))
     
        //db.doc('qna/').get().then((doc)=>console.log(doc.id))
      //  db.collection('answeredques').doc('Pacharjee').collection('qna').add({question:'How to add 2 numbers?'}).then((doc)=>{db.collection('answer').doc(doc.id).set({question:'How to add 2 numbers?',postedby:'Pacahrjee'})})
        //db.collection('answeredques/Pacharjee/qna').add({answer:'/qna/'})
     // db.collection('answeredques').doc('Pacharjee').collection('qna').get().then((doc)=>doc.forEach((d)=>d.data().answer.get().then((e)=>{console.log(e.data())})))
    
    return(
        <div style={{width:'80%',marginLeft:'2%',padding:'55px',zIndex:'2'}}>
        <h1 style={{fontWeight:'300'}}>{h1}</h1>
            {loadAnswer &&
                <div style={{display:'flex',width:'100%',height:'600px',alignItems:'center',justifyContent:'center'}}>
                    <img src={require('../Images/loader2.gif')} style={{width:'70px',height:'70px'}}/>
                </div> 
            }
            <div>{
            bool ? props.qna.map((items)=><QuesItem items={items} uname={props.uname} {...props}/>) : <div style={{display:'flex',width:'100%',height:'600px',alignItems:'center',justifyContent:'center'}}>
            <img src={require('../Images/loader2.gif')} style={{width:'70px',height:'70px'}}/>
            </div>
            }</div>
        </div>
    );
    
}
