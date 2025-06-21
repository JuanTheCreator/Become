import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Slide from './Slide';

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <AnimatePresence mode="wait">
        <Slide
          key={currentIndex}
          title={slides[currentIndex].title}
        >
          {slides[currentIndex].content}
        </Slide>
      </AnimatePresence>
      <div style={{ position: 'absolute', bottom: '10rem', textAlign: 'center', width: '150px', height: '2px', background: '#000', overflow: 'hidden' }}>
        <div style={{ width: `${((currentIndex + 1) / slides.length) * 100}%`, height: '100%', background: '#ff6b6b', transition: 'width 0.5s ease' }}></div>
      </div>
      <footer style={{ position: 'absolute', bottom: '0', width: '100%', textAlign: 'center', padding: '1rem', background: 'transparent', color: 'var(--fg)', fontSize: '0.875rem' }}>
        © {new Date().getFullYear()} Presentación de Diapositivas
      </footer>
    </div>
  );
};

export default Carousel;
