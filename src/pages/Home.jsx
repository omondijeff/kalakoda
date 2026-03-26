import React from 'react';
import Hero from '../components/Hero';
import Scroll1 from '../components/Scroll1';
import Fighters from '../components/Fighters';
import About from '../components/About';
import Contact from '../components/Contact';

import SEO from '../components/SEO';

const Home = () => {
  return (
    <div className="home-page">
      <SEO title="One Ring, No Borders" />
      <Hero />
      <Scroll1 />
      <Fighters />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
