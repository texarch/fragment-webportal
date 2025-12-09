import React from "react";
import "./Page11.css";
// import Navbar from "./Navbar";
import IndividualPage1 from "./assets/Individual_Page1.png";
import { useNavigate } from "react-router-dom";

const Page11 = ({ setView }) => {
  const navigate = useNavigate();

  return (
    <>
      {/* <Navbar /> */}

      <div className="page11-container">
        <div className="page11-content">

          {/* LEFT */}
          <div className="left-content">
            <div className="tabs-container">
              <div
                className="tab-item"
                onClick={() => setView('organiser')}
              >
                <div className="tab-label">Organiser</div>
              </div>

              <div
                className="tab-item active"
                onClick={() => setView('individual')}
              >
                <div className="tab-label">Individual</div>
              </div>
            </div>

            <div className="title-text">
              Stay organized with multi-calendars, to-dos, and automatic event sync.
            </div>

            <div className="divider-line" />

            <div className="subtitle-text">
              Create calendars, follow organizers, engage, and book events and slots.
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="right-images">
            <img src={IndividualPage1} className="main-img" alt="Individual Page" />
          </div>

        </div>
      </div>
    </>
  );
};

export default Page11;


