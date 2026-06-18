import React from 'react';
import image1 from '../../assets/images/homeImages/pricing-eq.svg';
import image2 from '../../assets/images/homeImages/other-trades.svg';

function Pricing() {
    return (
        <div className="pricing Container mt-5 mb-5 pt-5 pb-5">
           <div className="row">
                <div className="col-1"></div>
                <div className="col-4">
                    <h3>Unbeatable pricing</h3>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="#" target="_blank" style={{textDecoration:"none"}}>See pricing</a>
                </div>
                <div className="col-7">
                    <div className="row">
                        <div className="box col">
                            <img src={image1} alt="Pricing" width="50%" height="auto"></img>
                            <p>Free account opening</p>
                        </div>
                        <div className="box col">
                            <img src={image1} alt="Pricing" width="50%" height="auto"></img>
                            <p> Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className="box col">
                            <img src={image2} alt="Pricing" width="50%" height="auto"></img>
                            <p> Intraday and F&O</p>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
}

export default Pricing;
