import React from 'react';
import './Page17.css';
import page1bg from './page1bg.png';
import grey from './page17.png';

const Page17 = () => {
  return (
    <>
      <div className="page17-container">
        <div
          className="page17-left-section"
          style={{ backgroundImage: `url(${page1bg})` }}
        >
          <div className="page17-image-wrapper">
            <img src={grey} alt="Page 18" className="page17-image" />
            <h1 className="page17-plan-text">Keep</h1>
          </div>
        </div>
        <div className="page17-right-section"></div>
      </div>

  
    </>
  );
};

export default Page17;
