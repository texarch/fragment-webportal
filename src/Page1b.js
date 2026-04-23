import React from 'react';
import './Page1b.css';

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
      
      <a 
        href="https://business.thefragment.app/signup" 
        target="_blank" 
        rel="noopener noreferrer"
        className="page1b-btn"
      >
        Start for Free
      </a>
    </div>
  );
};

export default Page1b;
