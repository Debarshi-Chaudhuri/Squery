import React from 'react';
import {QuesItem} from "./QuesItem";
import firebase from "../firebase";
class QuesList extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={ques:[],bool:false};
    }
    componentDidMount()
    {
        const db=firebase.firestore();
        if(this.props.uname!==undefined){
            //db.collection('answeredques').doc(this.props.uname).collection('qna').onSnapshot((snapshot)=>snapshot.docs.forEach((doc)=>console.log(doc.data())))
            db.collection('answeredques').doc(this.props.uname).collection('qna').get().then(
                (query)=>{
                    query.forEach((doc)=>{
                        this.setState({ques:this.state.ques.concat(doc.data()),bool:true})
                    })
                }
            )
        }
        else{
            db.collection('answer').onSnapshot(
                (snapshot)=>{
                    snapshot.docs.forEach((doc)=>{
                        this.setState({ques:this.state.ques.concat(doc.data()),bool:true})
                    })
                }
            )
        }
        //db.collection('answerques').doc(this.props.uname).collection('qna').onSnapshot((snapshot)=>{snapshot.docs.forEach((doc)=>)});
    }
    render()
    {
        let h1;
        if(this.props.uname===undefined)
        h1='Frequently Asked Questions'
        else
        h1='Questions You Have Answered'
        var jsondata=require("../qna.json");
        var name="something";
        const db=firebase.firestore();
        const d=db.collection('answeredques/Pacharjee/qna');
        //db.collection('answerques').doc(this.props.uname).collection('qna').onSnapshot((snapshot)=>snapshot.docs.forEach((doc)=>console.log(doc.data())))
     
        //db.doc('qna/').get().then((doc)=>console.log(doc.id))
      //  db.collection('answeredques').doc('Pacharjee').collection('qna').add({question:'How to add 2 numbers?'}).then((doc)=>{db.collection('answer').doc(doc.id).set({question:'How to add 2 numbers?',postedby:'Pacahrjee'})})
        //db.collection('answeredques/Pacharjee/qna').add({answer:'/qna/'})
     // db.collection('answeredques').doc('Pacharjee').collection('qna').get().then((doc)=>doc.forEach((d)=>d.data().answer.get().then((e)=>{console.log(e.data())})))
     
        return(
            <div style={{width:'80%',marginLeft:'2%',padding:'55px',zIndex:'2'}}>
            <h1>{h1}</h1>
                <div>{
                this.state.bool ? this.state.ques.map((items)=><QuesItem items={items} uname={this.props.uname}/>) : <div style={{display:'flex',width:'100%',height:'600px',alignItems:'center',justifyContent:'center'}}>
                <img src={require('../Images/loader2.gif')} style={{width:'70px',height:'70px'}}/>
              </div>
                }</div>
            </div>
        );
    }
}
export default QuesList;
