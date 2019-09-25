import React from "react";
import {Profile} from "../containers/Profile";
import {Mes_Notif} from "../containers/Mes_Notif";
import {QuesAns} from "../containers/QuesAns";
import {withRouter} from "react-router-dom";
import { Button,Avatar ,makeStyles,Grid, Container} from "@material-ui/core";
class VolunteerPage extends React.Component{
    componentDidMount(){
        //console.log(this.props.match.params.id)
    }
    render(){
    return(
        <div style={{zIndex:'1'}} >
            <Grid container
                style={{display:'inline-flex',zIndex:'2'}}>
                <Profile/>
                <QuesAns />
                <Mes_Notif/>
            </Grid>
        </div>
    );
}
}

export default withRouter(VolunteerPage);