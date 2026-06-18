import React from 'react';
import image from '../../assets/images/homeImages/index-education.svg';
import { Link } from "react-router"

function Education() {
  return (
    <div className="education container mt-5 mb-5 pt-5 pb-5">
      <div className="row">
        <div className="col">
          <div className="image">
            <img src={image} alt="Education" width="80%" height="auto" />
          </div>
        </div>
        <div className="col">
          <h3>Free and open market education</h3>
          <div className="box mt-4">
            <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
            <Link to="#" onClick={(e) => e.preventDefault()}>
              Varsity <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
          <div className="box mt-4">
            <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
            <Link to="#" onClick={(e) => e.preventDefault()}>
              TradingQ&A <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Education;