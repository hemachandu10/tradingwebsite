import React from 'react';
import logo1 from '../../assets/images/productsImages/zerodhafundhouse.png'
import logo2 from '../../assets/images/productsImages/sensibull-logo.svg'
import logo3 from '../../assets/images/productsImages/tijori.svg'
import logo4 from '../../assets/images/productsImages/streak-logo.png'
import logo5 from '../../assets/images/productsImages/smallcase-logo.png'
import logo6 from '../../assets/images/productsImages/ditto-logo.png'
import {Link} from 'react-router'

function Universe() {
  return (
    <>
      <div className="container text-center">
        <div className="title">
          <h5>The Zerodha Universe</h5>
        </div>
        <div className="context">
          <p>Extend your trading and investment experience even further with our partner platforms</p>
        </div>
        <div className="row my-4 py-4">
          <div className="col-4 mb-4">
            <div className="img mb-2">
              <img src={logo1} alt="image" style={{ width: "60%" }} />
            </div>
            <p>Our asset management venture
              that is creating simple and transparent index
              funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 mb-4">
            <div className="img mb-4">
              <img src={logo2} alt="image" style={{ width: "60%" }} />
            </div>
            <p>Our asset management venture
              that is creating simple and transparent index
              funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 mb-4">
            <div className="img mb-2">
              <img src={logo3} alt="image" style={{ width: "50%" }} />
            </div>
            <p>Our asset management venture
              that is creating simple and transparent index
              funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 mt-4">
            <div className="img mb-2">
              <img src={logo4} alt="image" style={{ width: "60%" }} />
            </div>
            <p>Our asset management venture
              that is creating simple and transparent index
              funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 mt-4">
            <div className="img mb-4">
              <img src={logo5} alt="image" style={{ width: "60%" }} />
            </div>
            <p>Our asset management venture
              that is creating simple and transparent index
              funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 mt-4">
            <div className="img mb-4">
              <img src={logo6} alt="image" style={{ width: "40%" }} />
            </div>
            <p>Our asset management venture
              that is creating simple and transparent index
              funds to help you save for your goals.
            </p>
          </div>
        </div>
         <Link to="/signup" ><button className="btn btn-primary mb-5 mt-3" style={{width:"20%"}}>Sign up for free</button></Link>
      </div>
    </>
  );
}

export default Universe;    