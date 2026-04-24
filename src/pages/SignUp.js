import React from 'react';
import './Pricing.css';
import comingSoonImg from '../assets/comingsoon.jpg';
import Page20 from '../Page20';

const SignUp = () => {
    return (
        <div>
            <div className="pricing-container">
                <div className="pricing-overlay"></div>
                <div className="pricing-content">
                    <h1 className="pricing-heading">Coming Soon...</h1>
                    <img src={comingSoonImg} alt="Coming Soon" className="pricing-image" />
                    <p className="pricing-subtext">
                        We are piecing our Fragments together, one event at a Time
                    </p>
                </div>
            </div>
            <Page20 />
        </div>
    );
};

export default SignUp;
