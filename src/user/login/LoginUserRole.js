import React, { Component, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './Login.css';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN } from '../../constants';
import { login } from '../../actions/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import fbLogo from '../../img/fb-logo.png';
import googleLogo from '../../img/google-logo.png';
import Alert from 'react-s-alert';
import Login from './Login';




const LoginUserRole = () => {
    
    const SocialLogin = () => {
        return (
            <div className="social-login">
                <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                    <img src={googleLogo} alt="Google" /> Log in with Google</a>
                {/* <a className="btn btn-block social-btn facebook" href={FACEBOOK_AUTH_URL}>
                    <img src={fbLogo} alt="Facebook" /> Log in with Facebook</a>
                <a className="btn btn-block social-btn github" href={GITHUB_AUTH_URL}>
                    <img src={githubLogo} alt="Github" /> Log in with Github</a> */}
            </div>
        );
    }


    const LoginForm = () => {

        const [UserRole, setUserRole] = useState('');
        // const [password, setPassword] = useState('');
        // const dispatch = useDispatch();
        // let navigate = useNavigate();

        const handleTutorRole = (event) => {
            const target = event.target;
            setUserRole('Tutor');
        }

        const handleParentRole = (event) => {
            const target = event.target;  
            setUserRole('Parent');
        }

        const handleSubmit = (event) => {
            event.preventDefault();   
            // const loginRequest = Object.assign({email : email, password : password});
            // dispatch(login(loginRequest))
            // .then(response => {
            //     Alert.success("You're successfully logged in!");
            //     navigate('/profile');

            // }).catch(error => {
            //     Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
            // });
            return <Login userRole = {UserRole} />
        }
        
            return (
                <form onSubmit={handleSubmit}>
                    <div className='user-role-form'>
                        <div className={`form-item user-role-btn ${UserRole == "Tutor" && "active-btn" }  `} onClick={handleTutorRole}>
                            {/* <input type="email" name="email" 
                                className="form-control" placeholder="Email"
                                value={email} onChange={handleEmailChange} required/> */}
                            <div>Tutor</div>
                        </div>
                        <div className= {`form-item user-role-btn ${UserRole == "Parent" && "active-btn" }  `} onClick={handleParentRole}>
                            {/* <input type="password" name="password" 
                                className="form-control" placeholder="Password"
                                value={password} onChange={handlePasswordChange} required/> */}
                            <div>Parent</div>
                        </div>
                    </div>
                        <div className="form-item">
                            <button type="submit" className="btn btn-block btn-primary">Next</button>
                        </div>
                    
                </form>                    
            );
    }



    return (
            <div className="login-container">
                <div className="login-content">
                    <h1 className="login-title">Login to SpringSocial</h1>
                    <SocialLogin />
                    <div className="or-separator">
                        <span className="or-text">OR</span>
                    </div>
                    <LoginForm {...this.props} />
                    <span className="signup-link">New user? <Link to="/signup">Sign up!</Link></span>
                </div>
            </div>
        );

        
    }



export default LoginUserRole
