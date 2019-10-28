import React from "react";
import {bindActionCreators} from 'redux';
import { connect } from "react-redux";
import { profileLoad,profileDataLoad,questionsLoad } from "../actions/action.js";
import {Profile} from "../containers/Profile";
import {Mes_Notif} from "../containers/Mes_Notif";
import {QuesAns} from "../containers/QuesAns";
import {QuesList} from "../containers/QuestionList";
import firebase from "../firebase";
import ChatBot from "react-simple-chatbot";
const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators({
    profileLoad,profileDataLoad,questionsLoad
  },dispatch)
}
const mapStateToProps=(store)=>{
  return({
      qna:store.qna,
      userData:store.userData,
      userStats:store.userStats
  })
}
class VolunteerPage extends React.Component{
  constructor(props){
    super(props)
    this.state={resubmission:false,loading:true,uname:''}
  }
  componentDidMount(){
    this.props.profileLoad(this.props.location.state)
    this.props.profileDataLoad(this.props.location.state)
    const db=firebase.firestore();
    firebase.auth().onAuthStateChanged((user)=> {
      //console.log(user)
      
      if (user) {
        db.collection('answeredques').doc(`${user.displayName}`).set({active:true},{merge:true})
        this.setState({loading:false,uname:user.displayName})
      }
      else {
        console.log("user signed out");
        this.setState({loading:false,resubmission:true})
      }
    });
  }
  
  signOut=()=>{
    const db=firebase.firestore();
    
    this.props.history.push('/Volunteer');
    firebase.auth().signOut().then(function() {
      db.collection('answeredques').doc(`${this.state.uname}`).set({active:false},{merge:true})
      console.log("successfully signed out")
    }).catch(function(error) {
      console.log("Error occured")
    });
  }
  render(){
    const steps=[
      {
          id: '0',
          message: "Choose an option",
          trigger: '1'
      },
      {
          id: '1',
          options: [
              { value: 1, label: 'Ask question in private', trigger: '2' },
              { value: 2, label: 'Ask question publicly', trigger: '3' },
          ],
      },
      {
          id:'2',
          message:'someone will contact you soon',
          end:true
      },
      {
          id:"3",
          message: 'Hi {previousValue}',
          end:true
      }
  ];
    if(this.state.loading)
    return(
      <div style={{display:'flex',width:'100%',height:'600px',alignItems:'center',justifyContent:'center'}}>
        <img src={require('../Images/loader2.gif')} style={{width:'70px',height:'70px'}}/>
      </div> 
    )
    else if(this.state.resubmission)
    return(
      <div id="notfound">
        <div className="notfound">
            <div className="notfound-404">
                <h3>You logged out. Confirm resubmission</h3>
                <h1><span>4</span><span>0</span><span>4</span></h1>
            </div>
            <p>Go Back</p>
        </div>
	    </div>
    )
    else if(!this.state.resubmission)
    return(
        <div style={{zIndex:'1'}}>
            <Profile firebase={firebase} signOut={this.signOut} {...this.props} {...this.state}/>
            <QuesList {...this.state} firebase={firebase} {...this.props}/>
            <ChatBot steps={steps} floating={true} floatingStyle={{backgroundColor:"rgba(0, 134, 196, 0.966)"}} />
        </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(VolunteerPage);
/*
db.collection("answeredques").doc('A').get().then(
          (query)=>{
            console.log(query)
          }
          TO CHECK IF A USER EXISTS
        )*/