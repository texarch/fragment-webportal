import React from "react";
import "./Page18.css";
import LaptopPage18 from "./assets/Individual_Page18.png";

const Page18 = () => {
  return (
    <div className="page18">
      <div className="page18-text">
        <div className="page18-title">
          <span className="cambo normal text-8xl">Try us on your </span>
          <span className="sf-bold text-8xl">Desktop </span>
          <span className="cambo normal text-8xl">!!</span>
        </div>

        <p className="page18-subtitle">
          <span className="sf-bold text-3xl">Fragment </span>
          <span className="sf text-3xl">
            is also available for your Desktop and Website not just your mobile..
          </span>
        </p>
      </div>

      <div className="page18-image">
        <img
          src={LaptopPage18}
          alt="Fragment Business Desktop Preview"
          className="desktop-preview"
        />
      </div>

      {/* Mobile Images (Triangle Layout) */}
      <div className="page18-mobile-images">
        <div className="page18-mobile-top">
          <img src={require("./assets/Page18_mobile(2).png")} alt="Mobile View 2" />
        </div>
        <div className="page18-mobile-bottom">
          <img src={require("./assets/Page18_mobile(1).png")} alt="Mobile View 1" />
          <img src={require("./assets/Page18_mobile(3).png")} alt="Mobile View 3" />
        </div>
      </div>
    </div>
  );
};

export default Page18;


