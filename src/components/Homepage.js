import React,{ Component } from "react";
import {bindActionCreators} from 'redux';
import ChatBot from "react-simple-chatbot";
import { connect } from "react-redux";
import { Searchbar } from "../containers/Searchbar";
import { ThemeProvider } from 'styled-components';
import firebase from '../firebase';
import { homepageOnLoad } from "../actions/action";
import { QuestionList } from "../containers/QuestionList";
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        homepageOnLoad
    },dispatch)
}
const mapStateToProps=(store)=>{
    return({
        qna:store.qna
    })
}
class Homepage extends Component{
    componentDidMount(){
        let a=[];
        const db = firebase.firestore();
<<<<<<< HEAD
        db.collection("qna").get().then((querySnapshot) => {
=======
        db.collection("anonymous").get().then((querySnapshot) => {
>>>>>>> 18608c3f888b2463b4520944323fa0455f0ed005
            querySnapshot.forEach((doc) => {
                console.log(doc.data())
                a.push(doc.data());
            })
            this.props.homepageOnLoad(a);
        }); 
<<<<<<< HEAD
=======
        
>>>>>>> 18608c3f888b2463b4520944323fa0455f0ed005
    }
    render(){
        const steps=[
            {
                id: '0',
<<<<<<< HEAD
                message: "Do you have any questions?",
=======
                message: "Choose an option",
>>>>>>> 18608c3f888b2463b4520944323fa0455f0ed005
                trigger: '1'
            },
            {
                id: '1',
<<<<<<< HEAD
                user:true,
                trigger:"3"
=======
                options: [
                    { value: 1, label: 'Ask question in private', trigger: '2' },
                    { value: 2, label: 'Ask question publicly', trigger: '3' },
                ],
            },
            {
                id:'2',
                message:'someone will contact you soon',
                end:true
>>>>>>> 18608c3f888b2463b4520944323fa0455f0ed005
            },
            {
            id:"3",
            message: 'Hi {previousValue}',
<<<<<<< HEAD
            trigger:"1"
=======
            end:true
>>>>>>> 18608c3f888b2463b4520944323fa0455f0ed005
            }
        ];
        return(
            <div>
                <Searchbar/>
                <div>
                    <h2>&nbsp;&nbsp;Frequently Asked Questions...</h2>
                    <div>
                        <QuestionList qna={this.props.qna}/>
                    </div>
                    <div>
                        <ThemeProvider theme={{ background: '#f5f8fb',
                                headerBgColor: '#0086c4',
                                headerFontColor: '#fff',
                                headerFontSize: '15px',
                                botBubbleColor: '#0086c4',
                                botFontColor: '#fff',
                                userBubbleColor: '#ccc8c8',
                                userFontColor: '#000000',}}>
                            <ChatBot steps={steps} floating={true} floatingStyle={{backgroundColor:"rgba(0, 134, 196, 0.966)"}} />
                    </ThemeProvider>
                </div>
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Homepage);