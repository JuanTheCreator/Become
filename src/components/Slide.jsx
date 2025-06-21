import React from 'react';
import { motion as Motion } from 'framer-motion';
import SplitText from './SplitText';

const Slide = ({ title, children }) => {
  return (
    <Motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'var(--fg)', padding: '2rem', textAlign: 'center' }}
    >
      <SplitText
        text={title}
        className="text-4xl md:text-6xl font-bold"
        delay={0.05}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 50 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.2}
        rootMargin="-100px"
        textAlign="center"
      />
      <div style={{ marginTop: '2rem', maxWidth: '800px' }}>
        {children}
      </div>
    </Motion.section>
  );
};

export default Slide;
