import React from 'react';
import './Page10.css';
import image from './page10.png';

const Page10 = () => {
  return (
    <div className="page10-container">
      <div className="left-section"></div>
      <div className="right-section1">
        <img src={image} alt="Record Section Illustration" className="img" />
        <h1 className="record">Record</h1>
      </div>
    </div>
  );
};

export default Page10;
