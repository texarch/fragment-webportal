import React from 'react';
import './Pagel.css';
import pagelBg from './pagel.png'; // Update the path if needed

const Pagel = () => {
  return (
    <div className="pagel-container">
      <div className="pagel-content">
        <h3 className="pagel-subtitle">Our Calendars keep you on time</h3>
        <h1 className="pagel-title">
          Add on <span className="bold">To-Do’s</span> to keep <br />
          track of your <span className="bold">Progress!!</span>
        </h1>
        <button className="pagel-button">Subscribe to explore</button>
      </div>
    </div>
  );
};

export default Pagel;
