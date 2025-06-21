import React from 'react';
import { motion as Motion } from 'framer-motion';

const MotionLayout = ({ children, transition = { duration: 0.6, ease: 'easeOut' } }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transition}
      style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      {children}
    </Motion.div>
  );
};

export default MotionLayout;
