import React from 'react';
import About from '../components/About';
import Scroll1 from '../components/Scroll1';

import SEO from '../components/SEO';

const AboutPage = () => {
  return (
    <div className="page-wrapper" style={{ paddingTop: '10rem', background: '#000' }}>
      <SEO title="Our Heritage" description="Discover the heritage of Kalakoda Promotions, the premier Pan-African Sport & Entertainment Promotion company." />
      <Scroll1 />
      <About />
    </div>
  );
};

export default AboutPage;
