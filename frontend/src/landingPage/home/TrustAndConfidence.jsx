import React from 'react';
import image from '../../assets/images/homeImages/ecosystem.png';
import {Link} from "react-router"

function TrustAndConfidence(){
    return (
        <div className="TrustAndConfidence container mt-5 mb-5 pt-5 pb-5">
            <div className="row mt-5">
                <div className="col-5 mt-5">
                    <h3>Trust and Confidence</h3>
                    <div className="para1 mt-5">
                        <h5>Customer-first always</h5>
                        <p style={{ fontSize: '1.1rem' }}>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    </div>
                    <div className="para2 mt-5">
                        <h5>No spam or gimmicks</h5>
                        <p style={{ fontSize: '1.1rem' }}>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    </div>
                    <div className="para3 mt-5">
                        <h5>The Zerodha universe</h5>
                        <p style={{ fontSize: '1.1rem' }}>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>
                    <div className="para4 mt-5">
                        <h5>Do better with money</h5>
                        <p style={{ fontSize: '1.1rem' }}>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                </div>
                <div className="col-7 mt-5">
                    <div className="image">
                        <img src={image} alt="Ecosystem" width="92%" height="auto"></img>
                        <div className="links text-center mt-3">
                            <Link to="/products" style={{textDecoration:"none"}}>Explore our products<i class="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustAndConfidence;
