import React from "react";
import {Profile} from "../containers/Profile";
import {Mes_Notif} from "../containers/Mes_Notif";
import {QuesAns} from "../containers/QuesAns";
import {withRouter} from "react-router-dom";
import { Button,Avatar ,makeStyles,Grid, Container} from "@material-ui/core";
import firebase from "../firebase";
class VolunteerPage extends React.Component{
  constructor(props){
    super(props)
    this.state={resubmission:false}
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

          }
          else {
            console.log("user signed out");
            this.setState({resubmission:true})
          }
        });
        //console.log(firebase.auth().currentUser.displayName);
  }
  
  signOut=()=>{
    this.props.history.goBack();
    firebase.auth().signOut().then(function() {
      console.log("successfully signed out")
    }).catch(function(error) {
      console.log("Error occured")
    });
  }
  render(){
    if(this.state.resubmission)
    return(<div>
      <h3>You are logged out go back</h3>
    </div>)
    else
    return(
        <div style={{zIndex:'1'}} >
            <Grid container
                style={{display:'inline-flex',zIndex:'2'}}>
                <Profile firebase={firebase}/>
                <QuesAns />
                <Mes_Notif signOut={this.signOut}/>
            </Grid>
        </div>
    );
  }
}

export default withRouter(VolunteerPage);