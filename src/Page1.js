import React from "react";
import "./Page1.css";
import page1Image from "./page1(image).png";

const Page1 = () => {
  return (
    <>

      <div className="page1-wrapper">
        <div className="page1-content">

          {/* LEFT SIDE */}
          <div className="page1-left">

            {/* Tabs */}
            <div className="page1-tabs">
              <button className="organiser-tab active" onClick={() => alert("Organiser clicked")}>
                <span>Organiser</span>
              </button>
              <button className="individual-tab" onClick={() => alert("Individual clicked")}>
                <span>Individual</span>
              </button>
            </div>

            {/* Heading */}
            <h1 className="page1-heading">
              Manage schedules &
              <br />
              bookings across groups.
            </h1>

            {/* Divider Line */}
            <div className="page1-divider"></div>

            {/* Subtext */}
            <p className="page1-subtext">
              Create calendars for each group, share events,
              manage bookings & payments.
            </p>

            {/* Button */}
            <div className="page1-buttons">
              <button
                className="demo-btn"
                onClick={() => alert("Demo booked! Our team will reach out soon.")}
              >
                <span>Book a Demo</span>
              </button>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="page1-right">
            <div className="mockup-wrapper">
              <div className="w-[959px] h-[596px] relative">
                <img
                  src={page1Image}
                  alt="Page 1 Visual"
                  className="page1-single-img"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Page1;