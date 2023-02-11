import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './Signup.css';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL } from '../../constants';
import { setuserRole } from '../../actions/auth';
import fbLogo from '../../img/fb-logo.png';
import googleLogo from '../../img/google-logo.png';
import githubLogo from '../../img/github-logo.png';
import Alert from 'react-s-alert';
import { useTranslation } from "react-i18next";

const SignupUserRole = () => {
    const { t, i18n } = useTranslation();

    const SocialSignup = () => {
        return (
            <div className="social-signup">
                <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                    <img src={googleLogo} alt="Google" /> {t("Google.Signin")}</a>
                {/* <a className="btn btn-block social-btn facebook" href={FACEBOOK_AUTH_URL}>
                    <img src={fbLogo} alt="Facebook" /> Sign up with Facebook</a>
                <a className="btn btn-block social-btn github" href={GITHUB_AUTH_URL}>
                    <img src={githubLogo} alt="Github" /> Sign up with Github</a> */}
            </div>
        );
}

const SignupForm = () => {

   
    const [UserRole, setUserRole] = useState('');

    const dispatch = useDispatch();
    let navigate = useNavigate();

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
        dispatch(setuserRole(UserRole))
        .then(() => {
            navigate('/signup');
        })

        // dispatch(register(signUpRequest))
        // .then(response => {
        //     Alert.success("You're successfully registered. Please login to continue!");
        //     navigate('/profile');
        // }).catch(error => {
        //     Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');            
        // });
    }

        return (
            <form onSubmit={handleSubmit}>
                    <div className='user-role-form'>
                        <div className={`form-item user-role-btn ${UserRole == "Tutor" && "active-btn" }  `} onClick={handleTutorRole}>
                            {/* <input type="email" name="email" 
                                className="form-control" placeholder="Email"
                                value={email} onChange={handleEmailChange} required/> */}
                            <div>{t("Tutor.label")}</div>
                        </div>
                        <div className= {`form-item user-role-btn ${UserRole == "Parent" && "active-btn" }  `} onClick={handleParentRole}>
                            {/* <input type="password" name="password" 
                                className="form-control" placeholder="Password"
                                value={password} onChange={handlePasswordChange} required/> */}
                            <div>{t("Parent.label")}</div>
                        </div>
                    </div>
                        <div className="form-item">
                            <button type="submit" className="btn btn-block btn-primary">{t("Next.label")}</button>
                        </div>
                    
                </form>                   

        );
}

    
    const [authenticated, setAuthenticated] = useState(useSelector(state=>state.auth.authenticated));



        return (
            <div className="signup-container">
                <div className="signup-content">
                    <h1 className="signup-title">{t("Signup.title")}</h1>
                    <SocialSignup />
                    <div className="or-separator">
                        <span className="or-text">OR</span>
                    </div>
                    <SignupForm {...this.props} />
                    <span className="login-link"> {t("Already.Sign")} <Link to="/login">{t("Login.label")}</Link></span>
                </div>
            </div>
        );
}




export default SignupUserRole