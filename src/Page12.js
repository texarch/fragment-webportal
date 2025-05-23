import React from 'react';
import './Page12.css';
import page1bg from './page1bg.png';
import page12 from './page12.png';
import blogo from './blogo.png';

const Page12 = () => {
  return (
    <>
      <div className="dark-margin"></div>
      <div className="page12-container">
   
         <div
          className="page12-left-section"
          style={{ backgroundImage: `url(${page1bg})` }}
        >
          <div className="logo-image">
            <img src={blogo} alt="Logo" className="logo-img12" />
            <h2 className="fragmentb">Fragment Business</h2>
          </div>

          <div className="page12-image-wrapper">
            <h1 className="page12-text">Create</h1>
            <img
              src={page12}
              alt="Page 16"
              className="page12-image"
            />
          </div>
        </div>
     

        <div className="page12-right-section"></div>
      </div>
    </>
  );
};

export default Page12;
