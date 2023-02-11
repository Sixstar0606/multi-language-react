import React, { Component } from 'react';
import './Home.css';
import { useTranslation } from "react-i18next";

const Home = () => {

    const { t, i18n } = useTranslation();
    
        return (
            <div className="home-container">
                <div className="container">
                    <div className="graf-bg-container">
                        <div className="graf-layout">
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                        </div>
                    </div>
                    <h1 className="home-title">{t("LandingText.label")}</h1>
                </div>
            </div>
        )
}

export default Home;