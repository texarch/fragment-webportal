import React from 'react';
import './Page13.css';
import page1bg from './page1bg.png';
import page13image from './page13image.png';

const Page13 = () => {
  return (
    <div className="page13-container">
      <div className="page13-left-section" style={{ backgroundImage: `url(${page1bg})` }}>
        <div className="page13-image-wrapper">
          <img src={page13image} alt="Page 13" className="page13-image" />
          <h1 className="page13-plan-text">Plan</h1>
        </div>
      </div>
      <div className="page13-right-section"></div>
    </div>
  );
};

export default Page13;
