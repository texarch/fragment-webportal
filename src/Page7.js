import React from "react";
import "./Page7.css";
import buildWithoutChaos from "./assets/Buildwithoutchaos_Page7.png";

const Page7 = () => {
  return (
    <div className="page7-section">
      <div className="page7-content">

        {/* LEFT SIDE IMAGE */}
        <div className="page7-left">
          <img
            src={buildWithoutChaos}
            alt="Build Without Chaos"
            className="page7-image"
          />
        </div>

        {/* RIGHT SIDE — EXACT DEV MODE LAYOUT */}
        <div className="page7-right">

          <div className="textbar-wrapper">

            {/* Heading block like dev mode */}
            <div className="heading-container">
              <h1 className="text-build">Build without</h1>
              <h1 className="text-chaos">Chaos</h1>
            </div>

            {/* Thick Vector 2175 line */}
            <div className="vector-line"></div>

            {/* Text list */}
            <div className="list-container">
              <p>No endless email updates.</p>
              <p>No details buried in inboxes.</p>
              <p>No messages lost in noisy group chats.</p>
              <p>No messy spreadsheets to manage users.</p>
              <p>No scattered payments or tracking hassles.</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Page7;


