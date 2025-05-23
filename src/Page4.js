import React from 'react';
import './Page4.css';
import logo from './logo3.png';
import sideImage from './page4c.png';

const Page4 = () => {
  return (
    <>
    <div className="dark-margin1"></div> 

    <div className="page4-container">
      <div className="page4-content">
        <div className="left-section4"></div>

        <div className="right-section4">
          <h1 className="with-text">With</h1>

          <div className="logo-line">
            <img src={logo} alt="Logo" className="logo-img" />
            <h2 className="fragment-text">Fragment</h2>
          </div>

          <div className="create-line">
            <img src={sideImage} alt="Side" className="side-img" />
            <h1 className="create-text">Create</h1>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Page4;
