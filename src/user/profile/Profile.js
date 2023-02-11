import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from 'react-router-dom'
import './Profile.css';

const Profile = () => {

    let navigate = useNavigate();
    const [authenticated, setAuthenticated] = useState(useSelector(state=>state.auth.authenticated));
    const [currentUser, setCurrentUser] = useState( useSelector(state => state.auth) && useSelector(state => state.auth.user) &&  useSelector(state => state.auth.user.user));
    
        if(!authenticated) {
            return <Navigate
                to={{
                pathname: "/login",
            }}/>; 
        }

        return (
            <div className="profile-container">
                {authenticated ? 
                
                    <div className="container">
                        {console.log(currentUser)}
                        <div className="profile-info">
                            <div className="profile-avatar">
                                { 
                                    (currentUser && currentUser.imageUrl)  ?  (
                                        <img src={currentUser.imageUrl} alt={currentUser.name}/>
                                    ) : (
                                        <div className="text-avatar">
                                            <span>{currentUser && currentUser.name && currentUser.name[0]}</span>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="profile-name">
                            <h2>{currentUser && currentUser.name}</h2>
                            <p className="profile-email">{currentUser && currentUser.email}</p>
                            </div>
                        </div>
                    </div> : <div>{console.log("ok")}</div> }   
            </div>
        );
}

export default Profile