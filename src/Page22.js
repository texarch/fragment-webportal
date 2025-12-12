import React, { useState } from 'react';
import imgA from './assets/22a.png';
import imgB from './assets/22b.png';
import imgC from './assets/22c.png';
import './Page22.css';

const Page22 = () => {
  const [popupVisible, setPopupVisible] = useState({ a: false, b: false, c: false });

  const showPopup = (key) => {
    setPopupVisible({ ...popupVisible, [key]: true });
    setTimeout(() => {
      setPopupVisible({ ...popupVisible, [key]: false });
    }, 2500);
  };

  return (
    <div className="page22-container">
      <h2 className="page22-heading">Our Subscriptions</h2>
      <div className="page22-card-container">
        <div className="subscription-card">
          <img src={imgA} alt="Subscription A" className="subscription-img" />
          <button className="subscribe-btn" onClick={() => showPopup('a')}>
            Subscribe
          </button>
          {popupVisible.a && <div className="popup-msg">Feature needs to be added</div>}
        </div>

        <div className="subscription-card">
          <img src={imgB} alt="Subscription B" className="subscription-img" />
          <button className="subscribe-btn" onClick={() => showPopup('b')}>
            Subscribe
          </button>
          {popupVisible.b && <div className="popup-msg">Feature needs to be added</div>}
        </div>

        <div className="subscription-card">
          <img src={imgC} alt="Subscription C" className="subscription-img" />
          <button className="subscribe-btn" onClick={() => showPopup('c')}>
            Subscribe
          </button>
          {popupVisible.c && <div className="popup-msg">Feature needs to be added</div>}
        </div>
      </div>
    </div>
  );
};

export default Page22;


