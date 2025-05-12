import React, { useState } from "react";
import "./Page20.css";
import playstore from './playstore.png';
import a from './a.png'; 

const Page20 = () => {
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
    <div className="dark-margin"></div> 

    <div className="page20-container">

      <h2>
       <span className="busy-being1"></span>If you are a <span className="goal-setter1">Entrepreneur</span>
      </h2>
      <p className="fragment1">Fragment Business helps keep your entire team on the same page!</p>
      <p className="website-link1" style={{ color: '#5A6A84' }}>
  {/* <span className="web" style={{ color: '#5A6A84' }}>🌐</span> https://thefragment.app */}
</p>


      {/* <p className="or-text1">or</p> */}

      <div className="store-buttons1">
        <div className="button-wrapper1">
          <button className="store-button1" onClick={() => showPopup("play")}>
            <img src={playstore} alt="Play Store" className="store-icon1" />
            <span>Play Store</span>
          </button>
          {popupPlayVisible && (
            <div className="popup-message1">Get it on Google Play</div>
          )}
        </div>

        <div className="button-wrapper1">
          <button className="store-button1" onClick={() => showPopup("app")}>
            <img src={a} alt="App Store" className="store-icon1" />
            <span>App Store</span>

          </button>
          {popupAppVisible && (
            <div className="popup-message1">Download on the App Store</div>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default Page20;
