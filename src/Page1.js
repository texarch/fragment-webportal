import React from 'react';
import { motion } from 'framer-motion';
import './Page1.css';
import phoneImage from './phonepage1.png';
import bgImage from './page1bg.png';

const Page1 = () => {
  return (
    <div
      className="page01-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="page1-content">
        <div className="text-section">
          <motion.h1
            animate={{ x: [0, 30, 0] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: 'loop' }}
          >
            Plan.
          </motion.h1>

          <motion.h1
            animate={{ x: [0, -30, 0] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: 'loop', delay: 0.2 }}
          >
            Organize
          </motion.h1>

          <motion.h1
            animate={{ x: [0, 30, 0] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: 'loop', delay: 0.4 }}
          >
            Connect
          </motion.h1>

          <p>And bring clarity to your Daily events</p>
        </div>

        <div className="image-section">
          <motion.img
            src={phoneImage}
            alt="Phone"
            animate={{ scale: [0.98, 1, 0.98] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: 'loop' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Page1;
