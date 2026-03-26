import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          onClick={scrollToTop}
          className="scroll-top-minimal"
          style={{
            position: 'fixed',
            bottom: '10rem',
            right: '2rem',
            zIndex: 1500,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            transform: 'rotate(-90deg)',
            transformOrigin: 'right bottom'
          }}
        >
          <span style={{ 
            fontFamily: 'Syncopate', 
            fontSize: '0.7rem', 
            fontWeight: 900, 
            letterSpacing: '0.5em', 
            color: 'white',
            whiteSpace: 'nowrap',
            opacity: 0.6
          }}>
            BACK TO TOP
          </span>
          <div style={{ width: '40px', height: '1px', background: 'var(--brand-red)' }} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
