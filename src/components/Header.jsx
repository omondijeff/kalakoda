import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'News', path: '/news' },
    { name: 'Look Book', path: '/look-book' },
    { name: 'Tickets', path: 'https://kalakoda.hustlesasa.shop/', external: true },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-100 transition-all duration-500 ${
        scrolled ? 'bg-black/95 backdrop-blur-2xl shadow-2xl border-b border-white/5' : 'bg-transparent'
      }`}
      style={{
        padding: scrolled ? '1rem 0' : '1.5rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
          <div style={{ background: 'white', padding: '0.4rem', lineSize: 0 }}>
             <img src="/kalakoda.png" alt="Kalakoda Logo" style={{ height: '40px', display: 'block' }} />
          </div>
          <div>
            <span style={{ fontFamily: 'Syncopate', fontWeight: 700, fontSize: '1.8rem', letterSpacing: '-0.08em', color: 'white' }}>KALAKODA</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <div style={{ height: '2px', background: 'var(--brand-green)', width: '20px' }}></div>
              <span style={{ fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.4em', color: 'var(--brand-green)' }}>Promotions</span>
            </div>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <nav style={{ display: 'none' }} className="md-flex">
          <ul style={{ display: 'flex', gap: '3.5rem' }}>
            {navLinks.map((link) => (
              <li key={link.path}>
                {link.external ? (
                  <a 
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'Syncopate',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      color: 'var(--brand-green)',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {link.name}
                  </a>
                ) : (
                  <NavLink 
                    to={link.path}
                    style={({ isActive }) => ({
                      fontFamily: 'Syncopate',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      color: isActive ? 'var(--brand-red)' : 'white',
                      opacity: isActive ? 1 : 0.6,
                      letterSpacing: '0.1em',
                      position: 'relative'
                    })}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <motion.div layoutId="nav-line" style={{ position: 'absolute', bottom: -8, left: 0, width: '100%', height: '2px', background: 'var(--brand-red)' }} />
                    )}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
          className="md-none"
        >
          {isOpen ? <X size={40} /> : <Menu size={40} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30 }}
            className="md-none"
            style={{ 
              background: '#0a0a0a', 
              position: 'fixed', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100vh',
              padding: '8rem 4rem 4rem',
              zIndex: 1000
            }}
          >
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {navLinks.map((link) => (
                <li key={link.path}>
                  {link.external ? (
                    <a 
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: 'Syncopate',
                        fontSize: '3rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        color: 'var(--brand-green)'
                      }}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <NavLink 
                      to={link.path}
                      style={{
                        fontFamily: 'Syncopate',
                        fontSize: '3rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        color: 'white'
                      }}
                    >
                      {link.name}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .md-flex { @media (min-width: 1025px) { display: flex !important; } }
        .md-none { @media (min-width: 1025px) { display: none !important; } }
        .z-100 { z-index: 2000 !important; }
      `}</style>
    </header>
  );
};

export default Header;
