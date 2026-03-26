import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Terminal, MoveRight, Layers } from 'lucide-react';

const Hero = () => {
  return (
    <section className="scroll-section" style={{ position: 'relative', overflow: 'hidden', padding: 0 }}>
      {/* Background with Darkened Layering */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.85)), url('/hero_img.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(0.4) contrast(1.1)',
          zIndex: -2
        }}
      />
      
      {/* Content Container */}
      <div className="container" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '6rem' }}>
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'circOut' }}
          style={{ position: 'relative', width: '100%' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ padding: '0.4rem 1rem', background: 'var(--brand-green)', color: 'white', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2rem', fontSize: '0.7rem' }}>
              AFRICA'S NO. 1
            </div>
            <div style={{ height: '1px', background: 'var(--glass-border)', flexGrow: 1 }}></div>
          </div>
          
          <h1 style={{ fontSize: 'clamp(4rem, 10vw, 8.5rem)', lineHeight: 0.8, marginBottom: '4rem', letterSpacing: '-0.1em' }}>
            ONE RING, <br />
            <span style={{ color: 'var(--brand-red)' }}>NO BORDERS</span>
          </h1>
          
          <div className="grid-2" style={{ width: '100%', gap: '4rem', marginBottom: '4rem' }}>
            <div style={{ maxWidth: '400px' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: 1.4 }}>
                Unifying the African continent through world-class boxing, elite entertainment, and high-specification broadcast.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', justifyContent: 'flex-end' }}>
              <a 
                href="https://kalakoda.hustlesasa.shop/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary" 
                style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)', paddingRight: '4rem', textDecoration: 'none' }}
              >
                Get Tickets <MoveRight size={20} />
              </a>
              <Link 
                to="/events" 
                className="btn btn-outline" 
                style={{ border: 'none', borderLeft: '4px solid var(--brand-green)', paddingLeft: '2rem', textDecoration: 'none', color: 'white' }}
              >
                Event Schedule
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Dynamic Decoration List */}
        <div style={{ position: 'absolute', bottom: '10vh', right: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1.5rem', opacity: 0.3 }}>
           <div style={{ fontSize: '0.6rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1em' }}>PROXIMITY • POWER • PURPOSE</div>
           <div style={{ display: 'flex', gap: '2rem' }}>
             {[1,2,3,4].map(i => <div key={i} style={{ width: '1px', height: '40px', background: 'white' }}></div>)}
           </div>
        </div>

      </div>

      <style>{`
        h1 span {
           -webkit-text-stroke: 1px rgba(255,255,255,0.1);
        }
      `}</style>
    </section>
  );
};

export default Hero;
