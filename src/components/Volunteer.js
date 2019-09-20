import React,{Component} from 'react';
import {Account} from '../containers/Account';
import { Button } from "@material-ui/core";
import { StylesContext } from '@material-ui/styles/StylesProvider';
class Volunteer extends Component{
    constructor(props){
        super(props)
        this.state={a:'blanket3',info:true,b:'Volunteer3'}
    }
    click=()=>{
        if(this.state.a==='blanket1'|| this.state.a==='blanket3')
        this.setState({a:'blanket2',b:'Volunteer2'},()=>{
            setTimeout(()=>{this.setState({info:false})},500);
            setTimeout(()=>{this.setState({a:'blanket4',b:'Volunteer4'})},1950)
        })
        else if(this.state.a==='blanket2'|| this.state.a==='blanket4')
        this.setState({a:'blanket1',b:'Volunteer1'},()=>{
            setTimeout(()=>{this.setState({info:true})},500);
            setTimeout(()=>{this.setState({a:'blanket3',b:'Volunteer3'})},1950)
        })
    }
    render(){
        let style,note,button,statement;
        const styles={
            container:{
                width:'50%',
                margin:'25% auto auto 25%',
                height:'80%',
                wordWrap:'break-word',
                animationDuration:'1.3s',
                animationTimingFunction:'ease-in-out',
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
                    <Account {...this.state}/>
                </div>
                <div className={`${this.state.a}`} style={{textAlign:'center',borderRadius:'10px',justifyItems:'center',display:'flex'}}>
                    <div style={styles.container} class={`${style}`}>
                        <h1 style={{color:'white'}}>{note}</h1>
                        <p style={{color:'rgba(219, 230, 235, 0.966)'}}>{statement}</p>
                        <Button variant='contained' style={{backgroundColor:'rgba(219, 230, 235, 0.966)',height:'33px'}} onClick={this.click}>{button} </Button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Volunteer;