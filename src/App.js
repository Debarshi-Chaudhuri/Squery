import React from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage.js';
import Volunteer from "./components/Volunteer";
=======
import './App.css';
import Homepage from './components/Homepage.js';
import Volunteer from "./components/Volunteer";
import VolunteerRoute from "./containers/VolunteerRoute";
>>>>>>> 18608c3f888b2463b4520944323fa0455f0ed005
import { Switch,Route } from "react-router-dom";
function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={Homepage} />
<<<<<<< HEAD
        <Route exact path='/Volunteer' component={Volunteer} /> 
=======
        <Route path='/Volunteer' component={VolunteerRoute} /> 
>>>>>>> 18608c3f888b2463b4520944323fa0455f0ed005
      </Switch>
    </div>
  );
}

export default App;
