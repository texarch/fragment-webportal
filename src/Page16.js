import React from "react";
import "./Page16.css";
import winkEni from "./Eni_Page16.png";
import blueTick from "./blue_tick_box.png";

const Page16 = () => {
  return (
    <div className="page16-section">
      <div className="page16-content">

        {/* LEFT — Eni Image */}
        <div className="page16-left">
          <img src={winkEni} alt="Eni AI Genie" className="page16-image" />
        </div>

        {/* RIGHT — Text */}
        <div className="page16-right">
          <h1 className="page16-title">Ask <span className="page16-highlight">‘Eni’</span></h1>
          <h2 className="page16-subtitle">The AI Genie</h2>
          <p className="page16-to">to</p>

          <ul className="page16-list">
            <li>
              <img src={blueTick} alt="tick" className="tick-img"/> 
              Generate conflict free Schedules
            </li>
            <li>
              <img src={blueTick} alt="tick" className="tick-img"/> 
              Generate events from Images
            </li>
            <li>
              <img src={blueTick} alt="tick" className="tick-img"/> 
              Get your Summary
            </li>
            <li>
              <img src={blueTick} alt="tick" className="tick-img"/> 
              Set Reminders
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Page16;