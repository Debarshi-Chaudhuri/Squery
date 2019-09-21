import React from 'react';
import Volunteer from "../components/Volunteer"; 
import { Switch,Route,withRouter } from "react-router-dom";
import VolunteerPage from "../components/VolunteerPage";
function VolunteerRoute() {
  return (
    <div >
      <Switch>
        <Route exact path='/Volunteer' component={Volunteer} />
        <Route path='/Volunteer/:id' component={VolunteerPage} /> 
      </Switch>
    </div>
  );
}

export default withRouter(VolunteerRoute);
