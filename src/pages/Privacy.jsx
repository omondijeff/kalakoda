import React from 'react';
import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <div className="page-wrapper" style={{ paddingTop: '10rem', background: '#000', minHeight: '100vh', color: 'white' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           style={{ marginBottom: '8rem', borderLeft: '8px solid var(--brand-red)', paddingLeft: '4rem' }}
        >
          <h1 className="section-title">Privacy <br /> Policy</h1>
          <p style={{ letterSpacing: '0.4rem', fontSize: '1rem', opacity: 0.6, fontWeight: 900, textTransform: 'uppercase', color: 'var(--brand-green)' }}>
             Legal Framework & Data Protection
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{ lineHeight: 1.8, fontSize: '1.1rem', color: '#ccc' }}
        >
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontFamily: 'Syncopate', fontSize: '1.5rem', marginBottom: '2rem', color: 'white' }}>Introduction</h2>
            <p>
              At Kalakoda Promotions, we are committed to protecting the privacy and security of our users and athletes. 
              This policy outlines how we handle information collected through our digital platforms.
            </p>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontFamily: 'Syncopate', fontSize: '1.5rem', marginBottom: '2rem', color: 'white' }}>Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, such as when you sign up for our newsletter, 
              purchase tickets through our partners, or contact us for inquiries. This may include your name, email address, 
              and communication preferences.
            </p>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontFamily: 'Syncopate', fontSize: '1.5rem', marginBottom: '2rem', color: 'white' }}>How We Use Information</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem' }}>• To provide and maintain our services</li>
              <li style={{ marginBottom: '1rem' }}>• To notify you about changes to our events or athletes</li>
              <li style={{ marginBottom: '1rem' }}>• To provide customer support</li>
              <li style={{ marginBottom: '1rem' }}>• To gather analysis or valuable information so that we can improve our production quality</li>
            </ul>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontFamily: 'Syncopate', fontSize: '1.5rem', marginBottom: '2rem', color: 'white' }}>Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to track the activity on our service and hold certain information. 
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontFamily: 'Syncopate', fontSize: '1.5rem', marginBottom: '2rem', color: 'white' }}>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at: <br />
              <strong>info@kalakodaboxing.com</strong>
            </p>
          </section>
        </motion.div>

      </div>
    </div>
  );
};

export default Privacy;
