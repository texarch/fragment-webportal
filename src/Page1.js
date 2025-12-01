// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import './Page1.css';
// // import phoneImage from './phonepage1.png';
// import calendarImage from './Calendar_Page1.png';
// import laptopImage from './Laptop_Page1.png';
// import logoImage from './Logo_Page1.png';
// import bgImage from './page1bg.png';
// import page1bimage from './page1bimage.png';
// import page1cimage from './page1cimage.png';

// const Page1 = () => {
//   const [animationState, setAnimationState] = useState(0);
//   const [imageIndex, setImageIndex] = useState(0); // New state for image loop
//   const skyBlueColor = 'rgb(15, 189, 233)';
//   const blackColor = 'black';
//   const animationDuration = 3.5; // Slower for clarity
//   const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1000;
//   const slideDistance = screenWidth * 1.5; // Distance for sliding
  
//   // Text animation interval
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setAnimationState((prev) => (prev + 1) % 5);
//     }, animationDuration * 1000 + 500); // Added small padding between animations
    
//     return () => clearInterval(interval);
//   }, []);

//   // Image loop interval
//   // useEffect(() => {
//   //   const images = [page1bimage, page1cimage, phoneImage]; // Order as specified
//   //   const imageInterval = setInterval(() => {
//   //     setImageIndex((prev) => (prev + 1) % images.length);
//   //   }, 4000); // 4 seconds duration for each image
    
//   //   return () => clearInterval(imageInterval);
//   // }, []);

//   // Component for each text element with its own animation
//   const AnimatedText = ({ text, fontSize, initialX, targetX, color, isStatic }) => {
//     // If the element is static, don't animate it
//     if (isStatic) {
//       return (
//         <motion.h1
//           style={{ 
//             color: color, 
//             position: 'absolute', 
//             width: '100%', 
//             margin: 0, 
//             fontSize: fontSize,
//             x: 0
//           }}
//         >
//           {text}
//         </motion.h1>
//       );
//     }
    
//     // For animated elements
//     return (
//       <motion.h1
//         initial={{ x: initialX }}
//         animate={{ x: targetX }}
//         transition={{ 
//           duration: animationDuration, 
//           ease: "easeInOut"
//         }}
//         style={{ 
//           color: color, 
//           position: 'absolute', 
//           width: '100%', 
//           margin: 0, 
//           fontSize: fontSize
//         }}
//       >
//         {text}
//       </motion.h1>
//     );
//   };

  
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












