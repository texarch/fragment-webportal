import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Page1.css';
import phoneImage from './phonepage1.png';
import bgImage from './page1bg.png';
import page1bimage from './page1bimage.png';
import page1cimage from './page1cimage.png';

const Page1 = () => {
  const [animationState, setAnimationState] = useState(0);
  const [imageIndex, setImageIndex] = useState(0); // New state for image loop
  const skyBlueColor = 'rgb(15, 189, 233)';
  const blackColor = 'black';
  const animationDuration = 3.5; // Slower for clarity
  const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1000;
  const slideDistance = screenWidth * 1.5; // Distance for sliding
  
  // Text animation interval
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationState((prev) => (prev + 1) % 5);
    }, animationDuration * 1000 + 500); // Added small padding between animations
    
    return () => clearInterval(interval);
  }, []);

  // Image loop interval
  useEffect(() => {
    const images = [page1bimage, page1cimage, phoneImage]; // Order as specified
    const imageInterval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds duration for each image
    
    return () => clearInterval(imageInterval);
  }, []);

  // Component for each text element with its own animation
  const AnimatedText = ({ text, fontSize, initialX, targetX, color, isStatic }) => {
    // If the element is static, don't animate it
    if (isStatic) {
      return (
        <motion.h1
          style={{ 
            color: color, 
            position: 'absolute', 
            width: '100%', 
            margin: 0, 
            fontSize: fontSize,
            x: 0
          }}
        >
          {text}
        </motion.h1>
      );
    }
    
    // For animated elements
    return (
      <motion.h1
        initial={{ x: initialX }}
        animate={{ x: targetX }}
        transition={{ 
          duration: animationDuration, 
          ease: "easeInOut"
        }}
        style={{ 
          color: color, 
          position: 'absolute', 
          width: '100%', 
          margin: 0, 
          fontSize: fontSize
        }}
      >
        {text}
      </motion.h1>
    );
  };

  // Get animations for current state
  const getAnimations = () => {
    switch (animationState) {
      case 0: // Initial state - Connect is blue
        return [
          { id: 'plan-0', text: 'Plan.', color: blackColor, fontSize: undefined, isStatic: true },
          { id: 'organize-0', text: 'Organize', color: blackColor, fontSize: '68px', isStatic: true },
          { id: 'connect-0', text: 'Connect', color: skyBlueColor, fontSize: '68px', isStatic: true }
        ];
      
      case 1: // Plan slides in from right (becomes blue), Connect slides in from left (becomes black)
        return [
          { id: 'plan-1-in', text: 'Plan.', color: skyBlueColor, fontSize: undefined, initialX: slideDistance, targetX: 0, isStatic: false },
          { id: 'plan-1-out', text: 'Plan.', color: blackColor, fontSize: undefined, initialX: 0, targetX: -slideDistance, isStatic: false },
          { id: 'organize-1', text: 'Organize', color: blackColor, fontSize: '68px', isStatic: true },
          { id: 'connect-1-in', text: 'Connect', color: blackColor, fontSize: '68px', initialX: -slideDistance, targetX: 0, isStatic: false },
          { id: 'connect-1-out', text: 'Connect', color: skyBlueColor, fontSize: '68px', initialX: 0, targetX: slideDistance, isStatic: false }
        ];
      
      case 2: // Organize slides in from right (becomes blue), Plan slides in from left (becomes black)
        return [
          { id: 'plan-2-in', text: 'Plan.', color: blackColor, fontSize: undefined, initialX: -slideDistance, targetX: 0, isStatic: false },
          { id: 'plan-2-out', text: 'Plan.', color: skyBlueColor, fontSize: undefined, initialX: 0, targetX: slideDistance, isStatic: false },
          { id: 'organize-2-in', text: 'Organize', color: skyBlueColor, fontSize: '68px', initialX: slideDistance, targetX: 0, isStatic: false },
          { id: 'organize-2-out', text: 'Organize', color: blackColor, fontSize: '68px', initialX: 0, targetX: -slideDistance, isStatic: false },
          { id: 'connect-2', text: 'Connect', color: blackColor, fontSize: '68px', isStatic: true }
        ];
      
      case 3: // Connect slides in from right (becomes blue), Organize slides in from left (becomes black)
        return [
          { id: 'plan-3', text: 'Plan.', color: blackColor, fontSize: undefined, isStatic: true },
          { id: 'organize-3-in', text: 'Organize', color: blackColor, fontSize: '68px', initialX: -slideDistance, targetX: 0, isStatic: false },
          { id: 'organize-3-out', text: 'Organize', color: skyBlueColor, fontSize: '68px', initialX: 0, targetX: slideDistance, isStatic: false },
          { id: 'connect-3-in', text: 'Connect', color: skyBlueColor, fontSize: '68px', initialX: slideDistance, targetX: 0, isStatic: false },
          { id: 'connect-3-out', text: 'Connect', color: blackColor, fontSize: '68px', initialX: 0, targetX: -slideDistance, isStatic: false }
        ];
      
      case 4: // Plan slides in from right (becomes blue), Connect slides in from left (becomes black)
        return [
          { id: 'plan-4-in', text: 'Plan.', color: skyBlueColor, fontSize: undefined, initialX: slideDistance, targetX: 0, isStatic: false },
          { id: 'plan-4-out', text: 'Plan.', color: blackColor, fontSize: undefined, initialX: 0, targetX: -slideDistance, isStatic: false },
          { id: 'organize-4', text: 'Organize', color: blackColor, fontSize: '68px', isStatic: true },
          { id: 'connect-4-in', text: 'Connect', color: blackColor, fontSize: '68px', initialX: -slideDistance, targetX: 0, isStatic: false },
          { id: 'connect-4-out', text: 'Connect', color: skyBlueColor, fontSize: '68px', initialX: 0, targetX: slideDistance, isStatic: false }
        ];
        
      default:
        return [
          { id: 'plan-default', text: 'Plan.', color: blackColor, fontSize: undefined, isStatic: true },
          { id: 'organize-default', text: 'Organize', color: blackColor, fontSize: '68px', isStatic: true },
          { id: 'connect-default', text: 'Connect', color: skyBlueColor, fontSize: '68px', isStatic: true }
        ];
    }
  };

  const animations = getAnimations();
  
  // Filter animations by text to render in correct containers
  const planAnimations = animations.filter(anim => anim.text === 'Plan.');
  const organizeAnimations = animations.filter(anim => anim.text === 'Organize');
  const connectAnimations = animations.filter(anim => anim.text === 'Connect');

  // Array of images in specified order
  const images = [page1bimage, page1cimage, phoneImage];

  return (
    <div className="page01-container" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="page1-content">
        <div className="text-section">
          {/* Plan Container */}
          <div style={{ height: '95px', overflow: 'hidden', position: 'relative' }}>
            {planAnimations.map(anim => (
              <AnimatedText
                key={anim.id}
                text={anim.text}
                fontSize={anim.fontSize}
                initialX={anim.initialX}
                targetX={anim.targetX}
                color={anim.color}
                isStatic={anim.isStatic}
              />
            ))}
          </div>

          {/* Organize Container */}
          <div style={{ height: '78px', overflow: 'hidden', position: 'relative', marginTop: '10px' }}>
            {organizeAnimations.map(anim => (
              <AnimatedText
                key={anim.id}
                text={anim.text}
                fontSize={anim.fontSize}
                initialX={anim.initialX}
                targetX={anim.targetX}
                color={anim.color}
                isStatic={anim.isStatic}
              />
            ))}
          </div>

          {/* Connect Container */}
          <div style={{ height: '78px', overflow: 'hidden', position: 'relative', marginTop: '10px' }}>
            {connectAnimations.map(anim => (
              <AnimatedText
                key={anim.id}
                text={anim.text}
                fontSize={anim.fontSize}
                initialX={anim.initialX}
                targetX={anim.targetX}
                color={anim.color}
                isStatic={anim.isStatic}
              />
            ))}
          </div>

          <p style={{ marginTop: '30px' }}>And bring clarity to your Daily events</p>
        </div>

        <div className="image-section">
          <motion.img
            key={imageIndex} // Key changes to force re-render
            src={images[imageIndex]}
            alt="Display"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: [0.98, 1, 0.98] }}
            exit={{ opacity: 0 }}
            transition={{ 
              opacity: { duration: 0.5 }, // Fade transition for image change
              scale: { duration: 4, repeat: Infinity, repeatType: 'loop' } // Keep original scale animation
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Page1;