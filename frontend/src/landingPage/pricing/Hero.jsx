import React from 'react';
import image1 from '../../assets/images/homeImages/pricing-eq.svg';
import image2 from '../../assets/images/homeImages/other-trades.svg';

function Hero() {
  return (
    <>
      <div className="container text-center mb-5 pb-5">
        <div className="title mt-5 pt-5 mb-3">
          <h2>Charges</h2>
        </div>
        <div className="context mb-5 pb-5">
          <p style={{fontSize:"1.5rem"}}>List of all charges and taxes</p>
        </div>
        <div className="row">
          <div className="box col">
            <img src={image1} alt="Pricing" width="70%" height="auto"></img>
            <div className="content">
               <h2>Free equity delivery</h2>
               <div className="des mt-3">
                <p style={{fontSize:"1.1rem"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
               </div>
            </div>
          </div>
          <div className="box col">
            <img src={image2} alt="Pricing" width="70%" height="auto"></img>
            <div className="content">
               <h2>Intraday and F&O trades</h2>
               <div className="des mt-3">
                <p style={{fontSize:"1.1rem"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
               </div>
            </div>
          </div>
          <div className="box col">
            <img src={image1} alt="Pricing" width="70%" height="auto"></img>
            <div className="content">
               <h2>Free direct MF</h2>
               <div className="des mt-3">
                <p style={{fontSize:"1.1rem"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;    