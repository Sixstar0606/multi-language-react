import React, { Component, useEffect, useState, Suspense } from 'react';
import {
  Route,
  Routes
} from 'react-router-dom';
import "../multi-language/i18n";
import AppHeader from '../common/AppHeader';
import Home from '../home/Home';
import Login from '../user/login/Login';
import Signup from '../user/signup/Signup';
import SignupUserRole from '../user/signup/SignupUserRole';
import Profile from '../user/profile/Profile';
import OAuth2RedirectHandler from '../user/oauth2/OAuth2RedirectHandler';
import NotFound from '../common/NotFound';
import LoadingIndicator from '../common/LoadingIndicator';
import { getCurrentUser } from '../actions/auth.js';
import { ACCESS_TOKEN } from '../constants';
import PrivateRoute from '../common/PrivateRoute';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import './App.css';
import Verify from '../user/profile/Verify';

const App = () => {

  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // const loadCurrentlyLoggedInUser =() => {
  //   getCurrentUser().then(response => {
  //     setCurrentUser(response);
  //     setAuthenticated(true);
  //     setLoading(false);
  //   }).catch(error => {

  //     setLoading(false);
  //   });    
  // }

  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);

    setAuthenticated(false);
    setCurrentUser(null);
    Alert.success("You're safely logged out!");
  }


    // useEffect(()=>{
    //   loadCurrentlyLoggedInUser();
    // },[])

    return (
      <div className="app">
        <Suspense fallback={null}>
          <div className="app-top-box">
            <AppHeader authenticated={authenticated} onLogout={handleLogout} />
          </div>
          <div className="app-body">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>           
              <Route exact path='/profile' currentUser = {currentUser} element = {<Profile />} />
              <Route path='/verify/:code' element = {<Verify />} />
              <Route exact path="/login"
                element = {<Login />}></Route>
              <Route exact path="/signup"
                element ={ <Signup/>}></Route>
              <Route exact path="/signup-user-role"
                element ={ <SignupUserRole/>}></Route>
              <Route path="/oauth2/redirect" element={ <OAuth2RedirectHandler />}></Route>  
              <Route element = {<NotFound />}></Route>
            </Routes>
          </div>
          <Alert stack={{limit: 3}} 
            timeout = {3000}
            position='top-right' effect='slide' offset={65} />
        </Suspense>
      </div>
    );
  // }
}

export default App;
