import React,{Component} from 'react';
import {Account} from '../containers/Account';
import { Button,Snackbar } from "@material-ui/core";
import firebase from "../firebase";
class Volunteer extends Component{
    constructor(props){
        super(props)
<<<<<<< HEAD
        this.state={a:'blanket3',info:true,b:'Volunteer3',opacity:'1',uname:"",pass:""}
=======
        this.state={a:'blanket3',info:true,b:'Volunteer3',opacity:'1',uname:"",pass:"",email:"",popup:false}
>>>>>>> a48f23a80787c84987e778c262b980d150e00080
    }
    click=()=>{
        if(this.state.a==='blanket1'|| this.state.a==='blanket3')
        this.setState({a:'blanket2',b:'Volunteer2',opacity:'0.1'},()=>{

            setTimeout(()=>{this.setState({info:false,opacity:'1'})},500);
            setTimeout(()=>{this.setState({a:'blanket4',b:'Volunteer4'})},1950)
        })
        else if(this.state.a==='blanket2'|| this.state.a==='blanket4')
        this.setState({a:'blanket1',b:'Volunteer1',opacity:'0.1'},()=>{

            setTimeout(()=>{this.setState({info:true,opacity:'1'})},500);
            setTimeout(()=>{this.setState({a:'blanket3',b:'Volunteer3'})},1950)
        })
    }
    handlechange=(event)=>
    {
<<<<<<< HEAD
        console.log(event.target.name,event.target.value)
        this.setState({[event.target.name]:event.target.value});
    }
    adduser=()=>
    {
        const db=firebase.firestore();
        db.collection("answeredques").doc(`${this.state.uname}`).set({
            pass:this.state.pass,
            ans:""
        })
        this.props.history.push(`/Volunteer/${this.state.uname}`)
        this.setState({uname:"",pass:""})
=======
        this.setState({[event.target.name]:event.target.value});
    }
    adduserSignUp=()=>
    {
        var exist=false;
        const auth=firebase.auth();
        const db=firebase.firestore();
        db.collection("answerdques").get().then((query)=>
        {
            query.forEach((doc)=>{
                if(this.state.uname==doc.id)
                {
                    exist=true;
                }
            })
            if(!exist)
            {
                auth.createUserWithEmailAndPassword(this.state.email,this.state.pass).then((res)=>{
                    db.collection("answeredques").doc(`${this.state.uname}`).set({uid:res.user.uid,email:this.state.email,pass:this.state.pass,ans:""})}).then((res2)=>{
                    const user=firebase.auth().currentUser;
                    user.sendEmailVerification().then(()=> {
                        console.log("email sent")
                        this.setState({popup:true});
                        auth.currentUser.updateProfile({displayName:this.state.uname})
                        this.setState({email:"",uname:"",pass:""})
                      }).catch(function(error) {
                        console.log(error)
                      })
                      }).catch((error)=> {
                        console.log(error.code);
                        alert(error.message);
                        
                      });
                      
            }
            else
            {
                alert("USERNAME ALREADY EXISTS");
            }
        })
        
          
    }
    adduserSignIn=()=>
    {
        var match=false;
        const auth=firebase.auth();
        //console.log(auth);
        const db=firebase.firestore();
      
        db.collection("answeredques").get().then((query)=>{
            query.forEach((doc)=>{
                console.log(doc.data().email)
                console.log(this.state.uname)
                console.log(this.state.pass)
                if(doc.id==this.state.uname && doc.data().pass==this.state.pass)
            {
               match=true;
           }
           
            })
            if(match)
            {
                db.collection("answeredques").doc(`${this.state.uname}`).onSnapshot((doc)=>{ auth.signInWithEmailAndPassword(doc.data().email, this.state.pass).then(
                    (res)=>{
                        if(auth.currentUser.emailVerified)
                        {
                        this.props.history.push(`/Volunteer/${this.state.uname}`)
                //console.log(res);
                this.setState({uname:"",pass:""})}
            else{alert("Unverified account")}}).catch((error)=>{
                    console.log(error.code);
                    console.log(error.message);
                    this.setState({uname:"",pass:""})
                  })})
            }
            else{
                alert("username not found / SignUp")
                this.setState({uname:"",pass:""})
               }
        })
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              console.log(user.displayName);
              console.log(user.email);
              console.log(user.emailVerified);
              console.log(user.photoURL);
              console.log(user.isAnonymous);
              console.log(user.uid);
              console.log(user.providerData);
              // ...
            } else {
              console.log("user signed out");
            }
          });
>>>>>>> a48f23a80787c84987e778c262b980d150e00080
    }
    render(){
        let style,note,button,statement;
        const styles={
            container:{
                width:'50%',
                margin:'25% auto auto 25%',
                height:'80%',
                wordWrap:'break-word',
                fontFamily:'Ubuntu',
                animationDuration:'1.3s',
                animationTimingFunction:'ease-in-out',
                opacity:this.state.opacity
            }
        }
        if(this.state.info){
            style="w3-container w3-center w3-animate-left";
            note='Welcome Back !';
            statement='To keep connected with us login with your personal info';
            button='Sign In';
        }
        else{
            style="w3-container w3-center w3-animate-right";
            note='Hello, Friend !';
            statement='Enter your personal details and start your journey with us';
            button='Sign Up';
        }
        return(<div className='container'>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
                <div className={`${this.state.b}`}>
<<<<<<< HEAD
                    <Account submit={this.adduser} {...this.state} change={this.handlechange}/>
                </div>
                <div className={`${this.state.a}`} style={{textAlign:'center',borderRadius:'10px',justifyItems:'center',display:'flex'}}>
                    <div style={styles.container} class={`${style}`}>
=======
               
                    <Account submitSignIn={this.adduserSignIn} submitSignUp={this.adduserSignUp} {...this.state} uname={this.state.uname} pass={this.state.pass} change={this.handlechange} email={this.state.email}/>
                    
                </div>
                <div className={`${this.state.a}`} style={{textAlign:'center',borderRadius:'10px',justifyItems:'center',display:'flex'}}>
                    <div style={styles.container} className={`${style}`}>
>>>>>>> a48f23a80787c84987e778c262b980d150e00080
                        <h1 style={{color:'white',fontFamily:'Ubuntu'}}>{note}</h1>
                        <p style={{color:'rgba(219, 230, 235, 0.966)'}}>{statement}</p>
                        <Button variant='contained' style={{backgroundColor:'rgba(219, 230, 235, 0.966)',height:'33px'}} onClick={this.click}>{button} </Button>
                    </div>
                </div>
<<<<<<< HEAD
=======
            <Snackbar anchorOrigin={{vertical: "bottom",horizontal: "left" }}
        open={this.state.popup}
        onClose={()=>this.setState({popup:false})}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        style={{backgroundColor:"#1100BB"}}
        variant="information"
        autoHideDuration={5000}
        message={<span id="message-id">Email sent verify email</span>}/>
>>>>>>> a48f23a80787c84987e778c262b980d150e00080
            </div>
        )
    }
}
<<<<<<< HEAD
export default (Volunteer);
=======
export default Volunteer;
>>>>>>> a48f23a80787c84987e778c262b980d150e00080
