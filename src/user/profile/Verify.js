import React, { Component } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { verify } from '../../actions/auth';

const Verify = (authenticated) => {

        const { code } = useParams();

        console.log("-dddddddddddddddddd : " , code);

        if(authenticated) {

            verify("verify?code="+ code);
            return <Navigate
                to={{
                pathname: "/profile",
                // state: { from: this.props.location }
            }}/>;            
        }
        else{
            return <Navigate
                to={{
                pathname: "/login",
                // state: { from: this.props.location }
            }}/>;    
        }

        return (
            <div className="profile-container">
                <div className="container">
                    <div className="profile-info">
                        
                            Vrifyed!
                    </div>
                </div>    
            </div>
        );
}

export default Verify