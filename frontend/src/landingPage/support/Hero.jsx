import React from 'react';

function Hero() {
  return (
      <>
      <div className="box py-5 mb-5" style={{backgroundColor:"#579df3"}} >
        <div className="container-fluid my-4 py-4">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-5">
              <div className="title mb-3">
                <h5>Support Portal</h5>
              </div>
              <p>this is the page where you find answer for your question</p>
            </div>
            <div className="col-5">
              <div className="title mb-3">
                <h5>Track Ticket</h5>
              </div>
              <p>track your ticket here</p>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
        </div>
      </>
    );
}

export default Hero;    