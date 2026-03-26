import React from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <div className="page-wrapper" style={{ paddingTop: '10rem', background: '#000', minHeight: '100vh', color: 'white' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           style={{ marginBottom: '8rem', borderLeft: '8px solid var(--brand-red)', paddingLeft: '4rem' }}
        >
          <h1 className="section-title">Terms & <br /> Conditions</h1>
          <p style={{ letterSpacing: '0.4rem', fontSize: '1rem', opacity: 0.6, fontWeight: 900, textTransform: 'uppercase', color: 'var(--brand-green)' }}>
             Service Terms & Usage Guidelines
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{ lineHeight: 1.8, fontSize: '1.1rem', color: '#ccc' }}
        >
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontFamily: 'Syncopate', fontSize: '1.5rem', marginBottom: '2rem', color: 'white' }}>Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
              These terms apply to all visitors, users and others who access or use the Service.
            </p>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontFamily: 'Syncopate', fontSize: '1.5rem', marginBottom: '2rem', color: 'white' }}>Intellectual Property</h2>
            <p>
              The Service and its original content, features and functionality are and will remain the exclusive property of 
              Kalakoda Media Group and its licensors. Our trademarks and trade dress may not be used in connection with 
              any product or service without the prior written consent of Kalakoda Media Group.
            </p>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontFamily: 'Syncopate', fontSize: '1.5rem', marginBottom: '2rem', color: 'white' }}>Promotional Content</h2>
            <p>
              All promotional materials, aftermovies, and images displayed on this website are for informational and 
              marketing purposes. Unauthorized duplication or distribution of this content is prohibited.
            </p>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontFamily: 'Syncopate', fontSize: '1.5rem', marginBottom: '2rem', color: 'white' }}>Limitation of Liability</h2>
            <p>
              In no event shall Kalakoda Media Group, nor its directors, employees, partners, agents, suppliers, or affiliates, 
              be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, 
              loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of 
              or inability to access or use the Service.
            </p>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontFamily: 'Syncopate', fontSize: '1.5rem', marginBottom: '2rem', color: 'white' }}>Changes</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
              What constitutes a material change will be determined at our sole discretion.
            </p>
          </section>
        </motion.div>

      </div>
    </div>
  );
};

export default Terms;
