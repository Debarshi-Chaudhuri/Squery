import React from 'react';
import './App.css';
import Homepage from './components/Homepage.js';
import Volunteer from "./components/Volunteer";
import VolunteerRoute from "./containers/VolunteerRoute";
import { Switch,Route } from "react-router-dom";
function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/Volunteer' component={VolunteerRoute} /> 
      </Switch>
    </div>
  );
}

export default App;
