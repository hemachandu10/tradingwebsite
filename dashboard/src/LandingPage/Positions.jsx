import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';//Axios is a popular, promise-based HTTP client used in React applications to seamlessly send requests to APIs and handle backend communications. 
//import { positions } from './Data/data';

function Positions() {
    const [allpositions,setallpositions]=useState([])
    useEffect(()=>{
        axios.get("https://tradingwebsite-8qfx.onrender.com/allpositons").then((res)=>{setallpositions(res.data)})
    },[])
    return (
        <>
            <div className="box">
                <div className="title">
                    <h3>Positions({allpositions.length})</h3>
                    <div className="Data">
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th>Product</th>
                                    <th>Instrument</th>
                                    <th>Qty.</th>
                                    <th>Avg.</th>
                                    <th>LTP</th>
                                    <th>P&L</th>
                                    <th>Chg.</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allpositions.map((stock, index) => {
                                    const curValue = stock.price * stock.qty;
                                    const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                                    const profClass = isProfit ? "profit" : "loss";
                                    const dayClass = stock.isLoss ? "loss" : "profit";

                                    return (
                                        <tr key={index}>
                                            <th scope="row">{index+1}</th>
                                            <td>{stock.product}</td>
                                            <td>{stock.name}</td>
                                            <td>{stock.qty}</td>
                                            <td>{stock.avg.toFixed(2)}</td>
                                            <td>{stock.price.toFixed(2)}</td>
                                            <td className={profClass}>
                                                {(curValue - stock.avg * stock.qty).toFixed(2)}
                                            </td>
                                            <td className={dayClass}>{stock.day}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Positions;