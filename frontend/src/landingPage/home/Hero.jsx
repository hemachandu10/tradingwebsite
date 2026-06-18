import React from 'react';
import landingImage from "../../assets/images/homeImages/landing.svg";
import {Link} from 'react-router'

function Hero() {
    return (
       <>
        <div className="LandingImage container mb-5 text-center">
            <img src={landingImage} alt="Hero Image" width="65%"/>
        </div>
        <div className="context text-center mt-5 mb-5">
            <h2>Invest in everything</h2>
            <p style={{ fontSize: '1.25rem' }}>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <Link to="/signup" ><button className="btn btn-primary mt-3">Sign up for free</button></Link>
        </div>
       </>
    );
}

export default Hero;