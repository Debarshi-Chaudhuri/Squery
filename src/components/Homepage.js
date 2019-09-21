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
        db.collection("anonymous").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.data())
                a.push(doc.data());
            })
            this.props.homepageOnLoad(a);
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