import React from 'react';
import './App.css';
import Homepage from './components/Homepage.js';
import Volunteer from "./components/Volunteer";
import VolunteerPage from "./components/VolunteerPage";
import { Switch,Route ,Redirect,Router} from "react-router-dom";
import NotFound from "./components/NotFound";
function App() {
  return (
    <div >
      
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/Volunteer' component={Volunteer} /> 
        <Route exact path='/Volunteer/:id' component={VolunteerPage} />
        <Redirect exact to='/Volunteer'/>
        <Route exact path='*' component={NotFound}/>
        </Switch>
      
    </div>
  );
}

export default App;
