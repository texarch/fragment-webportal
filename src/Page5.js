import React from 'react';
import './Page5.css';
import page5 from './page5.png'; 

const Page5 = () => {
  return (
    <div className="page5-container">
      <div className="left-side5">
        <h1 className="text5">Plan</h1>
      </div>
      <div className="right-side5">
        <img src={page5} alt="Page 8" className="page5-image" />
      </div>
    </div>
  );
};

export default Page5;
