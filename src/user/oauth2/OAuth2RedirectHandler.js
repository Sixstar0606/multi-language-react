import React, { Component } from 'react';
import { ACCESS_TOKEN } from '../../constants';
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { getCurrentUser } from '../../actions/auth';
import { useDispatch, useSelector } from "react-redux";

const OAuth2RedirectHandler = () => {
    const getUrlParameter = (name) => {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        
        var location = useLocation();
        

        var results = regex.exec(location.search);
        console.log("location", location);
        
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

        let navigate = useNavigate();
        const dispatch = useDispatch();
        const token = getUrlParameter('token');
        const error = getUrlParameter('error');

        
        if(token) {
            console.log("#################token##############", token);
            localStorage.setItem(ACCESS_TOKEN, token);

            dispatch(getCurrentUser());
            return <Navigate to={{
                pathname: "/profile",
                // state: { from: {location} }
            }}/>; 
            // navigate("/profile");
        } else {
            return <Navigate to={{
                pathname: "/login",
                state: { 
                    // from: {location},
                    error: error 
                }
            }}/>;
            // navigate("/login"); 
        }
    
}

export default OAuth2RedirectHandler;