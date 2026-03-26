import React from 'react';
import { NavLink } from 'react-router-dom';
import { Trophy, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '10rem 0 5rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '6rem', marginBottom: '8rem' }}>
          
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '3rem' }}>
              <div style={{ background: 'white', padding: '0.4rem' }}>
                 <img src="/kalakoda.png" alt="Kalakoda Logo" style={{ height: '40px', display: 'block' }} />
              </div>
              <div style={{ color: 'white' }}>
                <span style={{ fontFamily: 'Syncopate', fontWeight: 900, fontSize: '2rem', letterSpacing: '-0.08em' }}>KALAKODA</span>
                <div style={{ fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.4em', color: 'var(--brand-green)' }}>PROMOTIONS</div>
              </div>
            </div>
            <p style={{ color: '#888', fontSize: '1.1rem', marginBottom: '4rem', lineHeight: 1.5 }}>
              The premier pan-African promotion company dedicated to revolutionizing 
              African live events through high-specification productions.
            </p>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <a 
                href="https://www.facebook.com/share/1Kmp6GVzpb/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'white', opacity: 0.6, transition: '0.3s' }}
                onMouseEnter={e => e.currentTarget.style.opacity = 1}
                onMouseLeave={e => e.currentTarget.style.opacity = 0.6}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a 
                href="https://x.com/kalakodapromos?s=21" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'white', opacity: 0.6, transition: '0.3s' }}
                onMouseEnter={e => e.currentTarget.style.opacity = 1}
                onMouseLeave={e => e.currentTarget.style.opacity = 0.6}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a 
                href="https://x.com/kalakoda_boxing?s=21" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'white', opacity: 0.6, transition: '0.3s' }}
                onMouseEnter={e => e.currentTarget.style.opacity = 1}
                onMouseLeave={e => e.currentTarget.style.opacity = 0.6}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a 
                href="https://www.instagram.com/kalakoda_promotions?igsh=amNuZzk2eWxhdTkw" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'white', opacity: 0.6, transition: '0.3s' }}
                onMouseEnter={e => e.currentTarget.style.opacity = 1}
                onMouseLeave={e => e.currentTarget.style.opacity = 0.6}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'white', marginBottom: '3rem', fontSize: '0.9rem', fontFamily: 'Syncopate', opacity: 0.6 }}>Navigation</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <li><NavLink to="/" style={{ color: 'white', fontSize: '1.1rem', fontWeight: 500 }}>Home</NavLink></li>
              <li><NavLink to="/about" style={{ color: 'white', fontSize: '1.1rem', fontWeight: 500 }}>About Us</NavLink></li>
              <li><NavLink to="/news" style={{ color: 'white', fontSize: '1.1rem', fontWeight: 500 }}>News</NavLink></li>
              <li><NavLink to="/look-book" style={{ color: 'white', fontSize: '1.1rem', fontWeight: 500 }}>Look Book</NavLink></li>
              <li><NavLink to="/contact" style={{ color: 'white', fontSize: '1.1rem', fontWeight: 500 }}>Contact</NavLink></li>
            </ul>
          </div>

          {/* Office */}
          <div>
            <h4 style={{ color: 'white', marginBottom: '3rem', fontSize: '0.9rem', fontFamily: 'Syncopate', opacity: 0.6 }}>Our Base</h4>
            <p style={{ color: '#888', marginBottom: '2rem', fontSize: '1.1rem' }}>
              The Media Hive<br />
              Cape Town, South Africa
            </p>
            <p style={{ color: 'white', fontWeight: 700, fontSize: '1.1rem' }}>
               info@kalakodaboxing.com<br />
               +27 21 XXX XXXX
            </p>
          </div>

          {/* Subscribe */}
          <div>
             <h4 style={{ color: 'white', marginBottom: '3rem', fontSize: '0.9rem', fontFamily: 'Syncopate', opacity: 0.6 }}>Bulletin</h4>
             <div style={{ borderTop: '4px solid var(--brand-red)', paddingTop: '2rem' }}>
               <p style={{ fontSize: '1.1rem', color: '#888', marginBottom: '2rem' }}>Join the ecosystem for exclusive event access.</p>
               <div style={{ display: 'flex', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
                 <input 
                    type="email" 
                    placeholder="Your primary email"
                    style={{ background: 'none', border: 'none', color: 'white', padding: '0.5rem 0', width: '100%', outline: 'none', fontSize: '1.1rem' }}
                 />
                 <button style={{ background: 'none', border: 'none', color: 'var(--brand-red)', cursor: 'pointer' }}><ArrowRight size={24} /></button>
               </div>
             </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '4rem', fontSize: '0.75rem', fontWeight: 900, fontFamily: 'Syncopate', opacity: 0.3 }}>
          <p>© 2026 KALAKODA MEDIA GROUP. ALL RIGHTS RESERVED.</p>
          <div style={{ display: 'flex', gap: '3rem' }}>
            <NavLink to="/privacy" style={{ color: 'white' }}>PRIVACY</NavLink>
            <NavLink to="/terms" style={{ color: 'white' }}>TERMS</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
