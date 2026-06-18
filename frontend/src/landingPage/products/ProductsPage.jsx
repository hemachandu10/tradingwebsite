import React from 'react';
import Hero from './Hero';
import LeftImage from './LeftImage';
import RightImage from './RightImage';
import Universe from './Universe';
import leftImage1 from '../../assets/images/productsImages/products-kite.png';
import leftImage2 from '../../assets/images/productsImages/products-coin.png';
import RightImage1 from '../../assets/images/productsImages/products-console.png';
import RightImage2 from '../../assets/images/productsImages/landing.svg';



function ProductPage() {
  return (
      <>
        <Hero/>
        <LeftImage imageUrl={leftImage1} productName="Kite" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."/>
        <RightImage imageUrl={RightImage1} productName="Console" productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."/>
        <LeftImage imageUrl={leftImage2} productName="Coin" productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."/>
        <RightImage imageUrl={RightImage2} productName="Kite Connect API" productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."/>
        <div className="tag text-center my-5 py-5">
          <h4>Want to know more about our technology stack? Check out the Zerodha.tech blog.</h4>
        </div>
        <Universe/>
      </>
    );
}

export default ProductPage; 