import React from 'react';
import { motion as Motion } from 'framer-motion';
import ScrollFloat from './ScrollFloat';

const Slide = ({ title, children }) => {
  return (
    <Motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'var(--fg)', padding: '2rem', textAlign: 'center' }}
    >
      <ScrollFloat
        containerClassName="text-4xl md:text-6xl font-bold"
        animationDuration={0.6}
        ease="power3.out"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.05}
      >
        {title}
      </ScrollFloat>
      <div style={{ marginTop: '2rem', maxWidth: '800px' }}>
        {children}
      </div>
    </Motion.section>
  );
};

export default Slide;
