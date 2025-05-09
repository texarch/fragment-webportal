import React from 'react';
import './Page8.css';
import image from './page8.png';

const Page8 = () => {
  return (
    <div className="page8-container">
      <div className="left-section"></div>
      <div className="right-section">
        <img src={image} alt="Follow Section Illustration" className="img8" />
        <h1 className="com8">Comment</h1>
      </div>
    </div>
  );
};

export default Page8;
