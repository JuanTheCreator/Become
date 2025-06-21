import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitTextPlugin from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitTextPlugin);

const SplitText = ({ text, className, from, to, delay, duration, ease, threshold, rootMargin, textAlign }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const initializeSplitText = () => {
      const split = new SplitTextPlugin(textRef.current, { type: 'chars' });
      const elements = split.chars;

      gsap.fromTo(
        elements,
        from,
        {
          ...to,
          stagger: delay,
          duration,
          ease,
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
            threshold,
            rootMargin,
          },
        }
      );

      return () => {
        split.revert(); // Limpiar la instancia de SplitText
      };
    };

    if (document.fonts.check('1em "Playfair Display"')) {
      initializeSplitText();
    } else {
      document.fonts.ready.then(initializeSplitText); // Esperar explícitamente a que las fuentes estén listas
    }
  }, [text, from, to, delay, duration, ease, threshold, rootMargin]);

  return (
    <div ref={textRef} className={className} style={{ textAlign }}>
      {text}
    </div>
  );
};

export default SplitText;
