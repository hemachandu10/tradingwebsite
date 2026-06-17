import React from 'react';

function Summary() {
    return (  
        <div className="box">
            <div className="title mt-5 pt-3 mb-2">
                <h4>Hi,User</h4>
            </div>
            <div className="equitybox border-top mt-5">
                <div className="content mt-5">
                    <h2>Equity</h2>
                </div>
                
            </div>
            <div className="Holdingsbox border-top mt-5 pt-2">
                 <div className="content mt-5">
                    <h5>Holdings</h5>
                </div>
               
            </div>
        </div>
    );
}

export default Summary;