import React from 'react';
import image from '../../assets/images/aboutImages/nithin-kamath.jpg'
import './style.css'

function Team() {
  return (
      <>
        <div className="container border-top">
          <div className="section1 mt-5 pt-5">
            <div className="row">
              <div className="col-1"></div>
              <div className="col-5">
                <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
                <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
                <p>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
              </div>
              <div className="col-5">
                <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                <p>Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
                <p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.</p>
              </div>
              <div className="col-1">
              </div>
            </div>
          </div>
          <div className="section2 mt-5 pt-5">
            <div className="title text-center">
              <h5>People</h5>
            </div>
            <div className="row mt-5 pt-5 mb-5">
              <div className="col-5">
                <div className="box text-center">
                  <div className="image mb-3">
                    <img src={image} alt="image" style={{borderRadius:"100%",width:"60%"}}></img>
                  </div>
                  <h6>Nithin Kamath</h6>
                  <p>Founder, CEO</p>
                  </div>
              </div>
              <div className="col-7">
                <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                <p>Playing basketball is his zen.</p>
                <span>Connect on  </span><a href='#'>Homepage</a> / <a href='#'>TradingQnA</a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Team;    