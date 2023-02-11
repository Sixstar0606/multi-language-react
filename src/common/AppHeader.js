import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate, Navigate, useLocation } from 'react-router-dom';
import { logout } from '../actions/auth';
import './AppHeader.css';
import { useTranslation } from "react-i18next";
import LanguageSelector from '../multi-language/LanguageSelector';

const AppHeader = () => {

    const [authenticated, setAuthenticated] = useState(useSelector(state=>state.auth.authenticated));
    const { t, i18n } = useTranslation();

    const location = useLocation();
    console.log(location.pathname);


    const dispatch = useDispatch();
    let navigate = useNavigate();
    const onLogout = () => {
        dispatch(logout());
        setAuthenticated(false);
        //  <Navigate
        //     to={{
        //     pathname: "/",
        // }}/>;  
        navigate('/');
    }


    
        return location.pathname === "/profile" ? (
            <header className="app-header">
                <div className="container">
                    <div className="app-branding">
                        <Link to="/" className="app-title">{t("Logo.label")}</Link>
                    </div>
                    <div className="app-options">
                        <nav className="app-nav">
                                    <ul>
                                        <li>
                                            <LanguageSelector />
                                        </li>
                                        <li>
                                            <NavLink to="/profile">{t("Profile.label")}</NavLink>
                                        </li>
                                        <li>
                                            <a onClick={onLogout}>{t("Logout.label")}</a>
                                        </li>
                                    </ul>
                        </nav>
                    </div>
                </div>
            </header>
        ) : (
            <header className="app-header">
                <div className="container">
                    <div className="app-branding">
                        <Link to="/" className="app-title">{t("Logo.label")}</Link>
                    </div>
                    <div className="app-options">
                        <nav className="app-nav">
                                    <ul>
                                        <li>
                                            <LanguageSelector />
                                        </li>
                                        <li>
                                            <NavLink to="/login">{t("Login.label")}</NavLink>        
                                        </li>
                                        <li>
                                            <NavLink to="/signup-user-role">{t("Signup.label")}</NavLink>        
                                        </li>
                                    </ul>
                        </nav>
                    </div>
                </div>
            </header>
            );

}

export default AppHeader;