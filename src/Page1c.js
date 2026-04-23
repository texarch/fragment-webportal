import React from 'react';
import './Page1c.css';
import chaosImg from './assets/Build_with_chaos_img.png';

const Page1c = () => {
  return (
    <div className="page1c-container">
      <div className="page1c-content">
        {/* Left Side: Illustration */}
        <div className="page1c-left">
          <img src={chaosImg} alt="Build without chaos" className="chaos-img" />
        </div>

        {/* Right Side: Message */}
        <div className="page1c-right">
          <div className="chaos-title-container">
            <div className="title-build">Build without</div>
            <div className="title-chaos">Chaos</div>
          </div>
          
          <div className="chaos-divider" />
          
          <p className="chaos-description">
            No need for spreadsheets, message broadcasts, update emails, payment follow-ups. <br/>
            Just one tool that handles all of it — <br /><strong>automatically</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page1c;
