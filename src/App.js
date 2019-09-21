import React from 'react';
import './App.css';
import Homepage from './components/Homepage.js';
import Volunteer from "./components/Volunteer";
import VolunteerPage from "./components/VolunteerPage";
import { Switch,Route } from "react-router-dom";
function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/Volunteer' component={Volunteer} /> 
        <Route exact path='/Volunteer/:id' component={VolunteerPage} />
      </Switch>
    </div>
  );
}

export default App;
