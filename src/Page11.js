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
              <button
                className="home-organiser-tab"
                onClick={() => setView('organiser')}
              >
                <span>Organiser</span>
              </button>

              <button
                className="home-individual-tab active"
                onClick={() => setView('individual')}
              >
                <span>Individual</span>
              </button>
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


