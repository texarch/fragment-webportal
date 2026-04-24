import React from 'react';
import './Page1b.css';
import { openFragmentBusinessApp } from './utils/smartAppLink';

const Page1b = () => {
  return (
    <div className="page1b-container">
      <h2 className="page1b-title">
        Not just events. <br/>Any schedule, any audience.
      </h2>
      
      <div className="page1b-divider" />
      
      <p className="page1b-description">
        If people need to show up for it — Fragment can create it, share it, and keep everyone updated without the <span>back-and-forth.</span>
      </p>
      
      <button 
        onClick={() => openFragmentBusinessApp('signup')}
        className="page1b-btn"
      >
        Start for Free
      </button>
    </div>
  );
};

export default Page1b;
