import React from "react";
import "./Page6.css";
import winkEni from "./assets/winkEni_Page6.png";
import blueTickBoxImg from "./assets/blue_tick_box.png";

const Page6 = () => {
  return (
    <div className="page6-section">
      <div className="page6-content">
        
        {/* LEFT SIDE */}
        <div className="page6-left">
          <h1 className="page6-title">
            Ask <span className="page6-highlight">‘Eni’</span>
          </h1>

          <h2 className="page6-subtitle">The AI Genie</h2>

          {/* Center aligned "to" */}
          <p className="page6-to">to</p>

          <ul className="page6-list">
            <li>
              <img src={blueTickBoxImg} alt="Tick Box" className="list-tick-icon" />
              <span>Generate conflict free Schedules</span>
            </li>

            <li>
              <img src={blueTickBoxImg} alt="Tick Box" className="list-tick-icon" />
              <span>Generate events from Images</span>
            </li>

            <li>
              <img src={blueTickBoxImg} alt="Tick Box" className="list-tick-icon" />
              <span>Get your Summary</span>
            </li>

            <li>
              <img src={blueTickBoxImg} alt="Tick Box" className="list-tick-icon" />
              <span>Set Reminders</span>
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="page6-right">
          <img src={winkEni} alt="Eni AI Genie" className="page6-image" />
        </div>
      </div>
    </div>
  );
};

export default Page6;


