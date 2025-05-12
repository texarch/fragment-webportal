import React, { useState } from "react";
import "./Page11.css";
import playstore from './playstore.png';
import a from './a.png'; 

const Page11 = () => {
  const [popupPlayVisible, setPopupPlayVisible] = useState(false);
  const [popupAppVisible, setPopupAppVisible] = useState(false);

  const showPopup = (store) => {
    if (store === "play") {
      setPopupPlayVisible(true);
      setTimeout(() => setPopupPlayVisible(false), 2500);
    } else {
      setPopupAppVisible(true);
      setTimeout(() => setPopupAppVisible(false), 2500);
    }
  };

  return (
    <>
    <div className="white-margin"></div>
    <div className="page11-container">
      <h2>
  <span className="busy-being">Busy being a</span>
  <span className="goal-setter">Goal-setter</span>
</h2>

      <p className="fragment">Fragment makes time feel Kinder !!</p>
      {/* <p className="website-link">🌐 https://thefragment.app</p>
      <p className="or-text">or</p> */}

      <div className="store-buttons">
        <div className="button-wrapper">
          <button className="store-button" onClick={() => showPopup("play")}>
            <img src={playstore} alt="Play Store" className="store-icon" />
            <span>Play Store</span>
          </button>
          {popupPlayVisible && (
            <div className="popup-message">Get it on Google Play</div>
          )}
        </div>

        <div className="button-wrapper">
          <button className="store-button" onClick={() => showPopup("app")}>
            <img src={a} alt="App Store" className="store-icon" />
            <span>App Store</span>

          </button>
          {popupAppVisible && (
            <div className="popup-message">Download on the App Store</div>
          )}
        </div>
      </div>
    </div>
    
</>
  );
};

export default Page11;
