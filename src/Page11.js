import React, { useState } from "react";
import "./Page11.css";
// import Navbar from "./Navbar";
import IndividualPage1 from "./Individual_Page1.png";

const Page11 = () => {
  const [tab, setTab] = useState("individual");

  return (
    <>
      {/* <Navbar /> */}

      <div className="page11-container">
        {/* LEFT SIDE */}
        <div className="left-content">
          <div className="text-bar-container">
            <div className="tabs-container">
              <div
                data-status={tab === "organiser" ? "selected" : "Default"}
                className={`tab-item ${tab === "organiser" ? "active" : ""}`}
                onClick={() => setTab("organiser")}
              >
                <div className="tab-label">Organiser</div>
              </div>
              <div
                data-status={tab === "individual" ? "selected" : "Default"}
                className={`tab-item ${tab === "individual" ? "active" : ""}`}
                onClick={() => setTab("individual")}
              >
                <div className="tab-label">Individual</div>
              </div>
            </div>

            <div className="text-content-block">
              <div className="title-text">
                Stay organized with multi-calendars, to-dos, and automatic event sync.
              </div>

              <div className="divider-line" />

              <div className="subtitle-container">
                <div className="subtitle-text">
                  Create calendars, follow organizers, engage, and book events and slots.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="right-images">
          <img
            src={IndividualPage1}
            className="main-img"
            alt="Individual Page"
          />
        </div>
      </div>
    </>
  );
};

export default Page11;
