import React from 'react';
import './Page12.css';
import page1bg from './page1bg.png';
import page12 from './page12.png';
import blogo from './blogo.png';

// Page12 component renders a section with a logo, text, and image, styled with Page12.css
const Page12 = () => {
  return (
    <div>
      <div className="dark-margin"></div>
      <div className="page12-container">
        <div
          className="page12-content"
          style={{ backgroundImage: `url(${page1bg})` }}
          data-testid="page12-content"
        >
          <div className="logo-image">
            <img className="logo-img12" src={blogo} alt="Logo" />
            <span className="fragmentb">Fragment Business</span>
          </div>
          <div className="page12-image-wrapper">
            <img className="page12-image" src={page12} alt="Main Image" />
            <div className="page12-text">Create</div>
          </div>
        </div>
        <div className="page12-right-section">
          <div className="page12-right-section-inner"></div>
        </div>
      </div>
    </div>
  );
};

export default Page12;
