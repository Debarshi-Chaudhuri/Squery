import React from "react";
import {bindActionCreators} from 'redux';
import { connect } from "react-redux";
import { profileLoad } from "../actions/action.js";
import {Profile} from "../containers/Profile";
import {Mes_Notif} from "../containers/Mes_Notif";
import {QuesAns} from "../containers/QuesAns";
import QuesList from "../containers/QuestionList";
import firebase from "../firebase";

const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators({
    profileLoad
  },dispatch)
}
const mapStateToProps=(store)=>{
  return({
      qna:store.qna,
      userData:store.userData
  })
}
class VolunteerPage extends React.Component{
  constructor(props){
    super(props)
    this.state={resubmission:false,loading:true,uname:''}
  }
  componentDidMount(){
    this.props.profileLoad(this.props.location.state)
    const db=firebase.firestore();
    firebase.auth().onAuthStateChanged((user)=> {
      console.log(user)
      if (user) {
        this.setState({loading:false,uname:user.displayName})
      }
      else {
        console.log("user signed out");
        this.setState({loading:false,resubmission:true})
      }
    });
    //console.log(firebase.auth().currentUser.displayName);
   // var jsondata=require("../qna.json");
    //console.log(jsondata)
   
  }
  
  signOut=()=>{
    this.props.history.push('/Volunteer');
    firebase.auth().signOut().then(function() {
      console.log("successfully signed out")
    }).catch(function(error) {
      console.log("Error occured")
    });
  }
  render(){
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
            <Profile firebase={firebase} signOut={this.signOut} {...this.props}/>
            <QuesList {...this.state} firebase={firebase}/>
            <Mes_Notif  />
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
        )*/