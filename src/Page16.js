import React from 'react';
import './Page16.css';
import page1bg from './page1bg.png';
import page16image from './page16image.png';

const Page16 = () => {
  return (
    <div className="page16-container">
      <div
        className="page16-left-section"
        style={{ backgroundImage: `url(${page1bg})` }}
      >
        <div className="page16-image-wrapper">
          <h1 className="page16-text">See</h1>
          <img
            src={page16image}
            alt="Page 16"
            className="page16-image"
          />
        </div>
      </div>
      <div className="page16-right-section"></div>
    </div>
  );
};

export default Page16;
