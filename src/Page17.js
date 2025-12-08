// import React from 'react';
// import './Page17.css';
// import page1bg from './page1bg.png';
// import grey from './page17.png';

// const Page17 = () => {
//   return (
//     <>
//       <div className="page17-container">
//         <div
//           className="page17-left-section"
//           style={{ backgroundImage: `url(${page1bg})` }}
//         >
//           <div className="page17-image-wrapper">
//             <img src={grey} alt="Page 18" className="page17-image" />
//             <h1 className="page17-plan-text">Keep</h1>
//           </div>
//         </div>
//         <div className="page17-right-section"></div>
//       </div>

  
//     </>
//   );
// };

// export default Page17;

import React from "react";
import "./Page17.css";
import Individual_Page17 from "./Individual_Page17.png";

const Page17 = () => {
  return (
    <div className="page17">
      {/* LEFT: full image (phone + emojis + droplets all inside this PNG) */}
      <div className="page17-left">
        <div className="page17-image-container">
          <img
            src={Individual_Page17}
            alt="Calendars and To-Do's"
            className="page17-image"
          />
        </div>
      </div>

      {/* RIGHT: text content */}
      <div className="page17-right">
        <p className="page17-subheading">Our Calendars keep you on time</p>

        <div className="page17-heading-wrapper">
          <div>
            <span className="page17-heading part-1">Our </span>
            <span className="page17-heading part-2">To-Do’s</span>
            <span className="page17-heading part-1"> keep you </span>
          </div>
          <div className="page17-heading part-3">on Track!</div>
        </div>
      </div>
    </div>
  );
};

export default Page17;


