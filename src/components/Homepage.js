import React,{ Component } from "react";
import {bindActionCreators} from 'redux';
import { Searchbar } from "../containers/Searchbar";
class Homepage extends Component{
    render(){
        return(
            <div>
                <Searchbar/>
                <div>
                    <h2>&nbsp;&nbsp;Frequently Asked Questions...</h2>
                </div>
            </div>
        )
    }
}
export default Homepage;