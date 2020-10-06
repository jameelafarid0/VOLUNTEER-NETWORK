import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home'
import Header from './Components/Header/Header';
import Events from './Components/Events/Events';
import Registration from './Components/Registration/Registration';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import UserDetails from './Components/UserDetails/UserDetails';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

export const VolunteerEvents = createContext();

function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({});

  
  return (
    <VolunteerEvents.Provider
    value={{ 
      loggedUserState: [loggedInUser, setLoggedInUser]}}
      
    >
      <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/events">
          <Events/>
        </Route>
        <PrivateRoute path="/registration/:task">
            <Registration></Registration>
          </PrivateRoute>
        <Route path="/registration">
          <Login ></Login>
          </Route>  
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/userTask">
            <UserDetails></UserDetails>
          </Route>
        <Route exact path="/">
         <Home/>
       </Route>
      </Switch>
    </Router>
    </VolunteerEvents.Provider>
  );
}

export default App;
