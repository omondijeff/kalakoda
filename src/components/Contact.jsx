import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="scroll-section" style={{ background: '#000', padding: '8rem 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '8rem', alignItems: 'flex-start' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="section-title">LET'S <br /> TALK</h2>
            <p style={{ fontSize: '1.4rem', color: '#888', marginBottom: '6rem', lineHeight: 1.5 }}>
              Revolutionizing the African live event ecosystem. <br />
              Secure your partnership today and tap into our pan-African reach.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
               <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', display: 'flex', gap: '2rem', alignItems: 'center' }}>
                  <div style={{ color: 'var(--brand-red)' }}><Mail size={32} /></div>
                  <div>
                    <h4 style={{ fontWeight: 900, fontFamily: 'Syncopate', fontSize: '0.65rem', marginBottom: '0.5rem' }}>E-MAIL</h4>
                    <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>info@kalakodaboxing.com</p>
                  </div>
                  <div style={{ flexGrow: 1, textAlign: 'right' }}><ArrowUpRight size={24} className="text-muted" /></div>
               </div>
               
               <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', display: 'flex', gap: '2rem', alignItems: 'center' }}>
                  <div style={{ color: 'var(--brand-green)' }}><Phone size={32} /></div>
                  <div>
                    <h4 style={{ fontWeight: 900, fontFamily: 'Syncopate', fontSize: '0.65rem', marginBottom: '0.5rem' }}>OFFICE</h4>
                    <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>+27 21 XXX XXXX</p>
                  </div>
                  <div style={{ flexGrow: 1, textAlign: 'right' }}><ArrowUpRight size={24} className="text-muted" /></div>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="glass"
            style={{ padding: '6rem 4rem', position: 'relative' }}
          >
            {/* Decoration Bar */}
            <div style={{ position: 'absolute', top: 0, left: 0, height: '4px', width: '30%', background: 'linear-gradient(to right, var(--brand-red), var(--brand-green))' }}></div>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <label style={{ fontSize: '0.65rem', fontWeight: 900, fontFamily: 'Syncopate', color: 'var(--brand-red)' }}>Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  style={{ background: 'transparent', border: 'none', borderBottom: '1px solid var(--glass-border)', padding: '1rem 0', color: 'white', fontSize: '1.2rem', outline: 'none' }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <label style={{ fontSize: '0.65rem', fontWeight: 900, fontFamily: 'Syncopate', color: 'var(--brand-red)' }}>Direct Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  style={{ background: 'transparent', border: 'none', borderBottom: '1px solid var(--glass-border)', padding: '1rem 0', color: 'white', fontSize: '1.2rem', outline: 'none' }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <label style={{ fontSize: '0.65rem', fontWeight: 900, fontFamily: 'Syncopate', color: 'var(--brand-red)' }}>Your Perspective</label>
                <textarea 
                  rows="4" 
                  placeholder="How can we help you?"
                  style={{ background: 'transparent', border: 'none', borderBottom: '1px solid var(--glass-border)', padding: '1rem 0', color: 'white', fontSize: '1.2rem', outline: 'none', resize: 'none' }}
                />
              </div>
              <button 
                className="btn btn-primary" 
                style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)', justifyContent: 'center' }}
                type="button"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
