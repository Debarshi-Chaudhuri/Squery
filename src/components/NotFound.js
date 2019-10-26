import React from "react";
import "../style.css";
class NotFound extends React.Component{
    render(){
        return(
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h3>Oops! Page not found</h3>
                        <h1><span>4</span><span>0</span><span>4</span></h1>
                    </div>
                    <p>we are sorry, but the page you requested was not found</p>
		        </div>
	        </div>
        );
    }
}

export default NotFound;