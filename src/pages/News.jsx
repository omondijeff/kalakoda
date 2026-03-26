import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowUpRight, Play, Globe, Newspaper } from 'lucide-react';

const News = () => {
  const editorialNews = [
    { 
      title: 'Nairobi Nightmare: Unifying African Boxing Talent', 
      date: 'March 24, 2026', 
      author: 'Kalakoda News Team', 
      excerpt: 'A historical milestone as international broadcast specifications meet local talent in the heart of Nairobi.', 
      image: '/gallery/Photos-3-001/IMG 100.jpg' 
    },
    { 
      title: 'Fatuma Zarika: The Retrospective of a World Champion', 
      date: 'March 20, 2026', 
      author: 'Boxing Insider', 
      excerpt: 'Exploring the legacy of Kenya’s elite pugilist ahead of the next world title defense event.', 
      image: '/gallery/Zarika.png' 
    }
  ];

  const externalPress = [
    {
      outlet: 'TV47 Digital',
      title: 'Okwiri defends Indian Ocean Title in electrifying Kalakoda night',
      link: 'https://www.tv47.digital/okwiri-defends-indian-ocean-against-uganda-in-electrifying-kalakoda-boxing-night-126902/',
      date: '2024'
    },
    {
      outlet: 'Daily Nation',
      title: 'Fatuma Zarika, Rayton Okwiri to challenge for Commonwealth titles',
      link: 'https://nation.africa/kenya/sports/boxing/fatuma-zarika-rayton-okwiri-to-challenge-for-commonwealth-titles-5275072',
      date: '2024'
    },
    {
      outlet: 'TV47 Digital',
      title: 'Kalakoda brings the future of East African boxing to Nairobi',
      link: 'https://www.tv47.digital/kalakoda-brings-the-future-of-east-african-boxing-to-nairobi-126451/',
      date: '2024'
    }
  ];

  return (
    <div className="page-wrapper" style={{ paddingTop: '10rem', background: '#000', minHeight: '100vh' }}>
      <SEO title="News & Press" description="Latest updates, media coverage, and press releases from Kalakoda Promotions. Featured in TV47, Nation Africa, and more." />
      <div className="container">
        
        {/* Header */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           style={{ marginBottom: '8rem' }}
        >
          <h1 className="section-title">GLOBAL <br /> COVERAGE</h1>
          <p style={{ letterSpacing: '0.4rem', fontSize: '1rem', opacity: 0.6, fontWeight: 900, textTransform: 'uppercase', color: 'var(--brand-green)' }}>
            News, Media & Press Highlights
          </p>
        </motion.div>

        {/* Video Feature */}
        <section style={{ marginBottom: '12rem' }} className="video-feature-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.5fr) 1fr', gap: '4rem', alignItems: 'center' }}>
             <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', background: '#111' }} className="glass">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/S0RXIgVdZUM" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  style={{ border: 'none' }}
                ></iframe>
             </div>
             <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                   <div style={{ width: '40px', height: '2px', background: 'var(--brand-red)' }}></div>
                   <span style={{ fontFamily: 'Syncopate', fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.4em' }}>VIDEO FEATURE</span>
                </div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', lineHeight: 1.1 }}>THE <br /> AFTERMOVIE</h2>
                <p style={{ color: '#888', marginBottom: '3rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
                  Witness the intensity of African boxing. Our high-specification productions 
                  bridge the gap between talent and global broadcast audiences.
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                   <Play size={20} className="brand-red" />
                   <span style={{ fontWeight: 800 }}>Watch Highlights</span>
                </div>
             </div>
          </div>
        </section>

        {/* Main News Loop */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', marginBottom: '12rem' }}>
          {editorialNews.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ overflow: 'hidden', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
            >
              <div style={{ position: 'relative', height: '300px', overflow: 'hidden' }}>
                <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1)' }} />
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'var(--brand-red)' }}></div>
              </div>
              
              <div style={{ padding: '3rem 0' }}>
                <div style={{ display: 'flex', gap: '2rem', marginBottom: '1.5rem', fontSize: '0.75rem', fontWeight: 900, fontFamily: 'Syncopate', opacity: 0.6 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><Calendar size={14} className="brand-red" /> {item.date}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><User size={14} className="brand-green" /> {item.author}</div>
                </div>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', lineHeight: 1.2, color: 'white', textTransform: 'uppercase' }}>{item.title}</h2>
                <p style={{ color: '#888', marginBottom: '3rem', fontSize: '1.1rem', lineHeight: 1.6 }}>{item.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* External Press Section */}
        <section style={{ marginBottom: '15rem', background: '#0a0a0a', padding: '6rem', border: '1px solid rgba(255,255,255,0.05)' }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '6rem' }}>
              <Newspaper size={32} className="brand-green" />
              <h3 style={{ fontSize: '2rem', fontFamily: 'Syncopate', fontWeight: 900 }}>PRESS <br /> PRESENCE</h3>
           </div>
           
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
              {externalPress.map((press, i) => (
                <a 
                  key={i}
                  href={press.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <motion.div 
                    whileHover={{ x: 10 }}
                    style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '2rem' }}
                  >
                    <div style={{ color: 'var(--brand-red)', fontWeight: 900, fontSize: '0.7rem', fontFamily: 'Syncopate', marginBottom: '1rem', letterSpacing: '0.2em' }}>
                       {press.outlet} • {press.date}
                    </div>
                    <h4 style={{ fontSize: '1.4rem', lineHeight: 1.3, marginBottom: '2rem' }}>{press.title}</h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.8rem', color: 'var(--brand-green)', fontWeight: 800 }}>
                       READ ARTICLE <ArrowUpRight size={16} />
                    </div>
                  </motion.div>
                </a>
              ))}
           </div>
        </section>

      </div>
      <style>{`
        @media (max-width: 1024px) {
          .video-feature-container {
             margin-bottom: 8rem !important;
          }
          .video-feature-container > div {
             grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default News;
