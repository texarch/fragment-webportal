// import React, { useState } from 'react';
// import googleCal from './googlecal.png';
// import appleCal from './cal.png';
// import './Page19.css';

// const Page19 = () => {
//   const [popup1Visible, setPopup1Visible] = useState(false);
//   const [popup2Visible, setPopup2Visible] = useState(false);

//   const showPopup = (buttonId) => {
//     if (buttonId === 1) {
//       setPopup1Visible(true);
//       setTimeout(() => setPopup1Visible(false), 2500);
//     } else {
//       setPopup2Visible(true);
//       setTimeout(() => setPopup2Visible(false), 2500);
//     }
//   };

//   return (
//   <>
//       <div className="dark-margin"></div> 
//     <div className="page19-container">
//       <h2 className="page19-heading">Sync your calendar with Fragment</h2>

//       <div className="page19-button-group">
//         <div className="button-wrapper">
//           <button className="calendar-button" onClick={() => showPopup(1)}>
//             <img src={googleCal} alt="Google Calendar" className="calendar-icon" />
//             <span>Google Calendar</span>
//           </button>
//           {popup1Visible && (
//             <div className="popup-message button-popup">Feature needs to be added</div>
//           )}
//         </div>

//         <div className="button-wrapper">
//           <button className="calendar-button" onClick={() => showPopup(2)}>
//             <img src={appleCal} alt="Apple Calendar" className="calendar-icon" />
//             <span>Apple Calendar</span>
//           </button>
//           {popup2Visible && (
//             <div className="popup-message button-popup">Feature needs to be added</div>
//           )}
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Page19;
import React from "react";
import "./Page19.css";

const page19 = () => {
  return (
    <div className="page19">
      <h2>Subscribe</h2>
      <p>Be the first to know about our new features</p>

      <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="Enter Email.."
          required
          className="email-input"
        />
        <button type="submit" className="subscribe-button">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default page19;