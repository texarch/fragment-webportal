import React from 'react';
import './Page21.css';
import page21a from './page21a.png';
import page21b from './page21b.png'; 

const Page21 = () => {
  return (
    <div className="full-page-container">
      <div className="half-page-banner">
        <div className="content-overlay">
          <h1>
            Try us on the <b>Desktop !!</b>
          </h1>
          <p>
            <strong>Fragment</strong> and <strong>Fragment Business</strong> is also <br />
            available for your Desktop and Website not just<br />
            your mobile.
          </p>
        </div>
      </div>

      <div className="bottom-half-white">
        <div className="overlay-wrapper">
          <img src={page21a} alt="Bottom Banner" className="bottom-image" />
          <img src={page21b} alt="Laptop Overlay" className="laptop-overlay" />
        </div>
      </div>
    </div>
  );
};

export default Page21;
