import React from 'react';
import './Page7.css';
import page7image from './page7a.png'; 

const Page7 = () => {
  return (
    <div className="page7-container">
      <div className="left-side">
        <h1 className="get-text">Get</h1>
      </div>
      <div className="right-side">
        <img src={page7image} alt="Page 7" className="page7-image" />
      </div>
    </div>
  );
};

export default Page7;
