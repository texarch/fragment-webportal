import React from 'react';
import groupSchedulingImg from './group1.png';
import './Page2.css';
import personalPlanningImg from './personal.png';

const Page2 = () => {
  return (
    <>
    <div className="dark-margin1"></div> 

    <div className="Page2-container">
      <div className="Page2-text">
        <h1>
          <span className="Page2-upper">EXPERIENCE</span><br />
          <span className="Page2-lower">the <strong>Perfect</strong></span>
        </h1>
        <div className="Page2-ai-powered">AI Powered</div>
      </div>

      <div className="Page2-graphics">
  <div className="Page2-graphic-block">
    <img src={personalPlanningImg} alt="Personal Planning" className='first' />
    <p>
      <span className="Page2-main-label">Personal Planning</span><br />
      <span className="Page2-sub-label">for Individuals</span>
    </p>
  </div>

  <div className="Page2-graphic-block">
    <img src={groupSchedulingImg} alt="Group Scheduling" />
    <p>
      <span className="Page2-main-label">Group Scheduling</span><br />
      <span className="Page2-sub-label">for Organisations</span>
    </p>
  </div>
</div>
</div>
</>
  );
};

export default Page2;