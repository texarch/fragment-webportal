// import React from 'react';
// import Insta from './assets/insta.png';       
// import LinkedIn from './assets/linkedin.png';
// import email from './assets/email.png';   
// import './Page24.css'; 

// const Page24 = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div className="footer-column social-contact">
//           <div className="social-icons-footer">
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//               <img src={Insta} alt="Instagram" />
//             </a>
//             <a href="www.linkedin.com/company/thefragmentapp/" target="_blank" rel="noopener noreferrer">
//               <img src={LinkedIn} alt="LinkedIn" />
//             </a>
//             <a href="https://www.youtube.com/@thefragmentapp" target="_blank" rel="noopener noreferrer">
//               <img src={email} alt="YouTube" />
//             </a>
//           </div>
//           <p>Email:<span> hi@thefragment.app</span> </p>
//           <p>FAQ</p>
//         </div>

//         <div className="footer-column offset-top">
//           <p>About Us</p>
//           <p>Work with us</p>
//         </div>

//         <div className="footer-column offset-top">
//           <p>Privacy</p>
//           <p>Terms and Conditions</p>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <p>CopyRight Info</p>
//       </div>
//     </footer>
//   );
// };

// export default Page24;
// import React, { useState } from "react";
// import "./Page11.css";
// import playstore from './assets/playstore.png';
// import a from './assets/a.png'; 

// const Page11 = () => {
//   const [popupPlayVisible, setPopupPlayVisible] = useState(false);
//   const [popupAppVisible, setPopupAppVisible] = useState(false);

//   const showPopup = (store) => {
//     if (store === "play") {
//       setPopupPlayVisible(true);
//       setTimeout(() => setPopupPlayVisible(false), 2500);
//     } else {
//       setPopupAppVisible(true);
//       setTimeout(() => setPopupAppVisible(false), 2500);
//     }
//   };

//   return (
//     <>
//     <div className="white-margin"></div>
//     <div className="page11-container">
//       <h2>
//   <span className="busy-being">Busy being a</span>
//   <span className="goal-setter">Goal-setter</span>
// </h2>

//       <p className="fragment0">Fragment makes time feel Kinder !!</p>
//       {/* <p className="website-link">🌐 https://thefragment.app</p>
//       <p className="or-text">or</p> */}

//       <div className="store-buttons">
//         <div className="button-wrapper">
//           <button className="store-button" onClick={() => showPopup("play")}>
//             <img src={playstore} alt="Play Store" className="store-icon" />
//             <span>Play Store</span>
//           </button>
//           {popupPlayVisible && (
//             <div className="popup-message">Get it on Google Play</div>
//           )}
//         </div>

//         <div className="button-wrapper">
//           <button className="store-button" onClick={() => showPopup("app")}>
//             <img src={a} alt="App Store" className="store-icon" />
//             <span>App Store</span>

//           </button>
//           {popupAppVisible && (
//             <div className="popup-message">Download on the App Store</div>
//           )}
//         </div>
//       </div>
//     </div>
    
// </>
//   );
// };

// export default Page11;

// import React from "react";
// import "./Page24.css";
// import connections_page11 from "./assets/connections_page11.png";

// const Page24 = () => {
//   return (
//     <footer className="page24">
//       <div className="footer-content">
//         <div className="footer-left">
//           <p className="connect-text">Connect with us on</p>
//           <img
//             src={connections_page11}
//             alt="Social media icons"
//             className="social-icons"
//           />
//           <p className="email">hi@fragment.com</p>
//         </div>

//         <div className="footer-middle">
//           <a href="/">About Us</a>
//           <a href="/">Work with us</a>
//           <a href="/">FAQ's</a>
//         </div>

//         <div className="footer-right">
//           <a href="/">Privacy</a>
//           <a href="/">Terms and Conditions</a>
//         </div>
//       </div>

//       <div className="copyright">
//         <p>CopyRight Info</p>
//       </div>
//     </footer>
//   );
// };

// export default Page24;



