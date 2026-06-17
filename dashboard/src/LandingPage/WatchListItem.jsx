import React from 'react';
import { useState } from 'react';
import './watchlist.css';
import BuyForm from './buyForm'; 
import SellForm from './SellForm'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import Tooltip from '@mui/material/Tooltip';
import Grow from '@mui/material/Grow';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


function WatchListItem({ stock, index }) {
    const [sellAction,setSellAction]=useState(false)
    const [buyAction,setBuyAction]=useState(false)
    
    const colname = stock.isDown ? "loss" : "profit";
    const [showStock, setshowStock] = useState(false);
    function stockEnter(prevalue) {
        setshowStock(true)
    }
    function stockLeave(prevalue) {
        setshowStock(false)
    }
    return (
        <li className="stock border-bottom py-3" onMouseOver={stockEnter} onMouseOut={stockLeave}>
            <div className="row">
                <div className="col-4 brand">
                    <span className={colname}  >
                        {stock.name}
                    </span>
                </div>
                <div className="col-8 text-end ">
                    <span className="stockValues">
                        <span className={colname}>{stock.percent}</span>
                        {stock.isDown ? <KeyboardDoubleArrowDownIcon /> : <KeyboardDoubleArrowUpIcon />}
                        <span>{stock.price}</span>
                    </span>
                </div>
            </div>
            {showStock && <WatchListAction setBuyAction={setBuyAction} setSellAction={setSellAction}/>}
            {buyAction && <BuyForm setBuyAction={setBuyAction} stock={stock}/>}
            {sellAction && <SellForm setSellAction={setSellAction} stock={stock}/>}
            
        </li>
    );
}

function WatchListAction({setBuyAction,setSellAction}) {
    
    return (
        <div className='text-end mt-1'>
            <Tooltip title="Buy" placement='top' arrow TransitionComponent={Grow}>
                <span className='me-2'><button onClick={() => setBuyAction(true)} className='icon-btn p-1'>Buy</button></span>
            </Tooltip>
             <Tooltip title="Sell" placement='top' arrow TransitionComponent={Grow}>
                <span className='me-2'><button onClick={() => setSellAction(true)} className='icon-btn p-1'>Sell</button></span>
            </Tooltip>
            <Tooltip title="Analytics" placement='top' arrow TransitionComponent={Grow}>
                <span className='me-2 me-2'><button className='material-icon p-1'><AnalyticsIcon/></button></span>
            </Tooltip>
             <Tooltip title="More" placement='top' arrow TransitionComponent={Grow}>
                <span className='me-2'><button className='material-icon p-1'><MoreHorizIcon/></button></span>
            </Tooltip>
        </div>
    );
}

export default WatchListItem;