import React from 'react';
import {Link} from 'react-router'
function OpenAccount() {
  return (
    <div>
       <div className="context text-center mt-5 mb-5">
            <h4>Open a Zerodha account</h4>
            <p className="mt-3 mb-3" style={{ fontSize: '15px' }}>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
             <Link to="/signup" ><button className="btn btn-primary mb-5 mt-3" style={{width:"20%"}}>Sign up for free</button></Link>
        </div>
    </div>
  );
}

export default OpenAccount;