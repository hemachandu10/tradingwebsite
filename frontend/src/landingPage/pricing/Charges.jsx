import React from 'react';
import './style.css'

function Charges() {
  return (
    <>
      <div className="container my-5 pt-5">
        <div className="title mb-4">
          <h3>Charges explained</h3>
        </div>
        <div className="row">
          <div className="col">
            <h5>Securities/Commodities transaction tax</h5>
            <div id="cnt">
              <p>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>
              <p>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>
            </div>
            <h5>Transaction/Turnover Charges</h5>
            <div id="cnt">
              <p>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
              <p>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
              <p>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>
              <p>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
            </div>
          </div>
          <div className="col">
            <h5>DP (Depository participant) charges</h5>
            <div id="cnt">
              <p>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
              <p>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>
            </div>
            <h5>AMC (Account maintenance charges)</h5>
            <div id="cnt">
              <p>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA</p>
              <p>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
              <p>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>
              <p>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
            </div>
          </div>
        </div>
        <div className="Disclaimer">
          <h4>Disclaimer</h4>
          <div id="cnt">
            <p>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Charges;    