import React from 'react';
import './Page14.css';
import page1bg from './page1bg.png';
import page14 from './page14.png';


const Page14 = () => {
  return (
    <div className="page14-container">
      <div
        className="page14-left-section"
        style={{ backgroundImage: `url(${page1bg})` }}
      >
        <div className="page14-image-wrapper">
          <h1 className="page14-text">Share</h1>
          <img
            src={page14}
            alt="Page 16"
            className="page14-image"
          />
        </div>
      </div>
      <div className="page14-right-section">
    
      </div>
    </div>
  );
};

export default Page14;
