import React, { Component, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './Login.css';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN } from '../../constants';
import { login } from '../../actions/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import fbLogo from '../../img/fb-logo.png';
import googleLogo from '../../img/google-logo.png';
import Alert from 'react-s-alert';
import { useTranslation } from "react-i18next";



const Login = () => {

    const { t, i18n } = useTranslation();
    
    const SocialLogin = () => {
        return (
            <div className="social-login">
                <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                    <img src={googleLogo} alt="Google" /> {t("Google.login")}</a>
                {/* <a className="btn btn-block social-btn facebook" href={FACEBOOK_AUTH_URL}>
                    <img src={fbLogo} alt="Facebook" /> Log in with Facebook</a>
                <a className="btn btn-block social-btn github" href={GITHUB_AUTH_URL}>
                    <img src={githubLogo} alt="Github" /> Log in with Github</a> */}
            </div>
        );
    }


    const LoginForm = () => {

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const dispatch = useDispatch();
        let navigate = useNavigate();

        const handleEmailChange = (event) => {
            const target = event.target;
            const inputName = target.name;        
            const inputValue = target.value;  
            setEmail(inputValue);
        }

        const handlePasswordChange = (event) => {
            const target = event.target;
            const inputName = target.name;        
            const inputValue = target.value;  
            setPassword(inputValue);
        }

        const handleSubmit = (event) => {
            event.preventDefault();   

            const loginRequest = Object.assign({email : email, password : password});
            dispatch(login(loginRequest))
            .then(response => {
                Alert.success("You're successfully logged in!");
                navigate('/profile');

            }).catch(error => {
                Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
            });
        }
        
            return (
                <form onSubmit={handleSubmit}>
                    <div className="form-item">
                        <input type="email" name="email" 
                            className="form-control" placeholder="Email"
                            value={email} onChange={handleEmailChange} required/>
                    </div>
                    <div className="form-item">
                        <input type="password" name="password" 
                            className="form-control" placeholder="Password"
                            value={password} onChange={handlePasswordChange} required/>
                    </div>
                    <div className="form-item">
                        <button type="submit" className="btn btn-block btn-primary">{t("Login.label")}</button>
                    </div>
                </form>                    
            );
    }



    return (
            <div className="login-container">
                <div className="login-content">
                    <h1 className="login-title">{t("Login.title")}</h1>
                    <SocialLogin />
                    <div className="or-separator">
                        <span className="or-text">OR</span>
                    </div>
                    <LoginForm {...this.props} />
                    <span className="signup-link">{t("NewUser.label")} <Link to="/signup-user-role">{t("Signup.label")}</Link></span>
                </div>
            </div>
        );

        
    }



export default Login
