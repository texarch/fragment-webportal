import React from 'react';
import './Page18.css';
import page1bg from './page1bg.png';
import grey from './grey2.png';

const Page18 = () => {
  return (
    <div className="page18-container">
      <div className="page18-left-section" style={{ backgroundImage: `url(${page1bg})` }}>
        <div className="page18-image-wrapper">
          <img src={grey} alt="Page 18" className="page18-image" />
          <h1 className="page18-plan-text">Interact</h1>
        </div>
      </div>
      <div className="page18-right-section"></div>
    </div>
  );
};

export default Page18;
