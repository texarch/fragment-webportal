import React from 'react';
import './Page6.css';
import Frame from './Frame.png';

const Page6 = () => {
  return (
    <div className="page6-container">
      <div className="left-section"></div>
      <div className="right-section">
        <img src={Frame} alt="Follow Section Illustration" className="frame-img" />
        <h1 className="follow-text">Follow</h1>
      </div>
    </div>
  );
};

export default Page6;
