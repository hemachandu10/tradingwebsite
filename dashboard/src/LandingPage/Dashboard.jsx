import React from 'react';
import {Routes,Route} from 'react-router'
import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";

function Dashboard() {
    return (
        <>
            <div className="main">
                <div className="row">
                    <div className="col-4 border-end">
                        <WatchList/>
                    </div>
                    <div className="col-8">
                        <Routes>
                             <Route exact path="/" element={<Summary/>}></Route>
                            <Route path="/orders" element={<Orders/>}></Route>
                            <Route path="/holdings" element={<Holdings/>}></Route>
                            <Route path="/positions" element={<Positions/>}></Route>
                            <Route path="/funds" element={<Funds/>}></Route>
                            <Route path="/apps" element={<Apps/>}></Route>
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;