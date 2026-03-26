import React from 'react';
import { motion } from 'framer-motion';
import { Globe, TrendingUp, Award, Shield, ArrowUpRight } from 'lucide-react';

const Scroll1 = () => {
  const principles = [
    { name: 'International Broadcast Spec', icon: <Globe size={24} />, desc: 'Delivering to global networks since 2012.' },
    { name: 'Sustainable Ecosystem', icon: <TrendingUp size={24} />, desc: 'Building talent through serialised events.' },
    { name: 'Unified Boxing Platform', icon: <Award size={24} />, desc: 'One brand, One Continent, Multiple Borders.' },
    { name: 'Pan-African Engagement', icon: <Shield size={24} />, desc: 'South African roots, African ambition.' }
  ];

  return (
    <section className="scroll-section" style={{ background: '#000', padding: '10rem 0' }}>
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'flex-start' }}>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ position: 'relative', width: '100%', height: '80vh', overflow: 'hidden' }}
          >
            <img 
              src="/gallery/Photos-3-001/IMG 104.jpg" 
              alt="Live Production" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0.4)' }}
            />
            {/* Architectural Frame over Image */}
            <div style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'var(--brand-red)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ fontSize: '4rem', fontWeight: 900, lineHeight: 1 }}>100+</div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.2rem', textTransform: 'uppercase' }}>Live Events Delivered</div>
            </div>
            {/* Green accent at bottom */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, height: '40px', width: '100%', background: 'linear-gradient(to top, var(--brand-green), transparent)', opacity: 0.3 }}></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div style={{ marginBottom: '6rem' }}>
              <h2 className="section-title green">OUR <br /> PRINCIPLES</h2>
              <p style={{ fontSize: '1.4rem', color: '#ccc', lineHeight: 1.5, marginBottom: '2rem' }}>
                 Kalakoda Promotions is a premier pan-African promotion dedicated to revolutionising African live events 
                 through high-level, sustained productions.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
              {principles.map((p, index) => (
                <div key={index} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '2rem', display: 'flex', gap: '3rem', alignItems: 'center' }}>
                  <div style={{ color: 'var(--brand-red)', background: 'rgba(237, 18, 31, 0.1)', padding: '1.5rem', borderRadius: '4px' }}>{p.icon}</div>
                  <div>
                    <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', fontFamily: 'Syncopate' }}>{p.name}</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{p.desc}</p>
                  </div>
                  <div style={{ flexGrow: 1, textAlign: 'right' }}>
                     <ArrowUpRight size={20} className="text-muted" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Scroll1;
