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


            <div className="h-9 px-2 py-1 bg-cyan-50 rounded-2xl inline-flex justify-center items-center gap-2">
              <div className="w-3 h-3 bg-sky-300 rounded-full" />
              <div className="text-center justify-start text-black text-lg font-['SF_Pro'] tracking-wide">Not just for Organisers.</div>
            </div>

            <div className="title-text">
              Also for those who like to<br />
              stay organized in their own<br />
              way.
            </div>

            <div className="divider-line" />

            <div className="subtitle-text">
              Create your own planning space — <br />
              manage multi-calendars and to-dos,<br />
              follow organizers, engage, book events,<br />
              and stay auto-synced.
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


