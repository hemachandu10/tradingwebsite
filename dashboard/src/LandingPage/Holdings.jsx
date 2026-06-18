import React from 'react';
import { useState, useEffect } from 'react';
//import { holdings } from './Data/data'
import './holdings&positions.css'
import axios from 'axios';//Axios is a popular, promise-based HTTP client used in React applications to seamlessly send requests to APIs and handle backend communications. 
import VerticalBar from './verticalbar';
function Holdings() {
    const [allholdings, setallholdings] = useState([])
    useEffect(() => {
        axios.get("https://tradingwebsite-8qfx.onrender.com/allholdings").then((res) => { setallholdings(res.data) });
    }, []);

    //for chatjs-2
    const labels = allholdings.map((subArray) => subArray["name"]);

    const data = {
        labels,
        datasets: [
            {
                label: "Stock Price",
                data: allholdings.map((stock) => stock.price),
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ],
    };
    return (
        <div className="box my-5">
            <div className="title mb-3">
                <h3>Holdings({allholdings.length})</h3>
                <div className="Data">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th>Instrument</th>
                                <th>Qty.</th>
                                <th>Avg. cost</th>
                                <th>LTP</th>
                                <th>Cur. val</th>
                                <th>P&L</th>
                                <th>Net chg.</th>
                                <th>Day chg.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allholdings.map((stock, index) => {
                                const curValue = stock.price * stock.qty;
                                const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                                const profClass = isProfit ? "profit" : "loss";
                                const dayClass = stock.isLoss ? "loss" : "profit";
                                // tofixed is used to go up to two decimals
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{stock.name}</td>
                                        <td>{stock.qty}</td>
                                        <td>{stock.avg.toFixed(2)}</td>
                                        <td>{stock.price.toFixed(2)}</td>
                                        <td>{curValue.toFixed(2)}</td>
                                        <td className={profClass}>
                                            {(curValue - stock.avg * stock.qty).toFixed(2)}
                                        </td>
                                        <td className={profClass}>{stock.net}</td>
                                        <td className={dayClass}>{stock.day}</td>
                                    </tr>
                                );

                            })}
                        </tbody>
                    </table>
                </div>
                <div className="graph">
                     <VerticalBar data={data}/>
                </div>
            </div>
            
        </div>
    );
}

export default Holdings;