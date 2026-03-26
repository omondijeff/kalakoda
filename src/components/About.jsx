import React from 'react';
import { motion } from 'framer-motion';
import { Target, Globe, Award, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="scroll-section" style={{ background: '#000', padding: '10rem 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '8rem', alignItems: 'center' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="section-title">THE <br /> CATALYST</h2>
            <div style={{ display: 'flex', gap: '2rem', marginBottom: '4rem' }}>
              <div style={{ width: '4px', background: 'var(--brand-green)', height: '100%' }}></div>
              <p style={{ fontSize: '1.4rem', fontWeight: 600, color: 'white', lineHeight: 1.4 }}>
                At Kalakoda, we believe in the power of sport to transform lives and unite communities. 
                As the premier Pan-African boxing promoter, we are committed to discovering, nurturing, 
                and showcasing the immense talent spread across Africa’s vast and diverse regions.
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '4rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                 <div style={{ color: 'var(--brand-red)' }}><Globe size={24} /></div>
                 <div>
                    <h4 style={{ fontWeight: 900, marginBottom: '0.5rem', fontFamily: 'Syncopate', fontSize: '0.65rem' }}>MISSION</h4>
                    <p style={{ fontSize: '0.85rem', color: '#888' }}>Uniting diverse talents through high-quality productions.</p>
                 </div>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                 <div style={{ color: 'var(--brand-red)' }}><Sparkles size={24} /></div>
                 <div>
                    <h4 style={{ fontWeight: 900, marginBottom: '0.5rem', fontFamily: 'Syncopate', fontSize: '0.65rem' }}>TRANSFORMATION</h4>
                    <p style={{ fontSize: '0.85rem', color: '#888' }}>Revolutionizing the African live event landscape.</p>
                 </div>
              </div>
            </div>

            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
               South African-born and pan-African in vision, we have successfully delivered over 70 live sporting broadcasts 
               across the continent, celebrating the rich talent in sports and entertainment.
            </p>
            
            <button className="btn btn-outline" style={{ marginTop: '2rem' }}>
               Dive Deeper 
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', height: '100%' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <img src="/gallery/Photos-3-001/IMG 60.jpg" alt="Boxer" style={{ width: '100%', height: '400px', objectFit: 'cover', filter: 'grayscale(1)' }} className="glass" />
              <div style={{ height: '300px', background: 'var(--brand-green)', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start' }}>
                 <Target size={40} className="text-white" style={{ marginBottom: '2rem' }} />
                 <h4 style={{ fontSize: '1.5rem', fontWeight: 900, fontFamily: 'Syncopate' }}>ONE <br /> RING</h4>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '6rem' }}>
              <div style={{ height: '300px', background: 'var(--brand-red)', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start' }}>
                 <Award size={40} className="text-white" style={{ marginBottom: '2rem' }} />
                 <h4 style={{ fontSize: '1.5rem', fontWeight: 900, fontFamily: 'Syncopate' }}>BEYOND <br /> BORDERS</h4>
              </div>
              <img src="/gallery/Photos-3-001/IMG 70.jpg" alt="Fight" style={{ width: '100%', height: '400px', objectFit: 'cover', filter: 'grayscale(1)' }} className="glass" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
