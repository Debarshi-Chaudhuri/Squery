import React,{Component} from 'react';
import {Account} from '../containers/Account';
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
        return(<div className='container'>
                <div className={`${this.state.b}`}>
                    <Account {...this.state}/>
                </div>
                <div className={`${this.state.a}`} style={{textAlign:'center',opacity:'1'}}>
                    <button onClick={this.click}>Click</button>
                </div>
            </div>
        )
    }
}
export default Volunteer;