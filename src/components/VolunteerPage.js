import React from "react";
import {Profile} from "../containers/Profile";
import {Mes_Notif} from "../containers/Mes_Notif";
import {QuesAns} from "../containers/QuesAns";
import {withRouter} from "react-router-dom";
import { Button,Avatar ,makeStyles,Grid, Container} from "@material-ui/core";
import firebase from "../firebase";
import '../VolunPage.css'
class VolunteerPage extends React.Component{
  constructor(props){
    super(props)
    this.state={resubmission:false,loading:true,uname:''}
  }
  componentDidMount(){
    console.log(this.props)
    firebase.auth().onAuthStateChanged((user)=> {
      console.log(user)
      if (user) {
        // User is signed in.
        console.log(user.displayName);
        console.log(user.email);
        console.log(user.emailVerified);
        console.log(user.photoURL);
        console.log(user.isAnonymous);
        console.log(user.uid);
        console.log(user.providerData);
        this.setState({loading:false,uname:user.displayName})
      }
      else {
        console.log("user signed out");
        this.setState({loading:false,resubmission:true})
      }
    });
    //console.log(firebase.auth().currentUser.displayName);
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
            <Profile firebase={firebase} signOut={this.signOut} />
            <QuesAns {...this.state} />
            <Mes_Notif  />
        </div>
    );
  }
}

export default (VolunteerPage);
/*
<Grid container
                style={{display:'inline-flex',zIndex:'2'}}>
                <Profile firebase={firebase}/>
                <QuesAns />
                <Mes_Notif signOut={this.signOut}/>
            </Grid>
*/