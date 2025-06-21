import React from 'react';
import { motion } from 'framer-motion';

const MotionLayout = ({ children, transition = { duration: 0.6, ease: 'easeOut' } }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transition}
      style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      {children}
    </motion.div>
  );
};

export default MotionLayout;
