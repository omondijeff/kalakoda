import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ArrowDownRight, Award, Flame } from 'lucide-react';

const Fighters = () => {
  const fighters = [
    {
      name: 'Fatuma Zarika',
      nickname: '“IronFist”',
      origin: 'Kenyan',
      flag: 'https://flagcdn.com/ke.svg',
      title: 'WBF World Champion',
      record: '35-14-2',
      rank: 'Ranked 15 in World',
      image: '/gallery/Zarika.png'
    },
    {
      name: 'George Onyango',
      nickname: '“King George”',
      origin: 'Kenyan',
      flag: 'https://flagcdn.com/ke.svg',
      title: 'Welterweight',
      record: '11-3-1',
      rank: 'Number 1 in Kenya',
      image: '/gallery/Photos-3-001/IMG 35.jpg'
    },
    {
      name: 'Emanuel Chivoli',
      nickname: '“El Toro”',
      origin: 'Kenyan',
      flag: 'https://flagcdn.com/ke.svg',
      title: 'Super Lightweight',
      record: '7-2-2',
      rank: 'Number 2 in Kenya',
      image: '/gallery/Photos-3-001/IMG 42.jpg'
    },
    {
      name: 'Felix Loggenberg',
      nickname: '“Lights Out”',
      origin: 'S. Africa',
      flag: 'https://flagcdn.com/za.svg',
      title: 'Pro Boxer',
      record: '1-0-0',
      rank: 'Rising Star',
      image: '/gallery/Photos-3-001/IMG 69.jpg'
    }
  ];

  return (
    <section className="scroll-section" style={{ background: '#0a0a0a' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '8rem' }}>
          <h2 className="section-title">THE <br /> WARRIORS</h2>
          <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1rem' }}>
             <ArrowDownRight size={80} className="brand-green" />
             <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
               <Flame size={32} className="brand-red" />
               <div style={{ letterSpacing: '0.4rem', fontSize: '0.8rem', fontWeight: 900 }}>ELITE TALENT ECOSYSTEM</div>
             </div>
          </div>
        </div>

        <div className="fighters-strip">
           {fighters.map((f, index) => (
             <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="fighter-card"
                style={{ 
                   height: '600px', 
                   position: 'relative', 
                   overflow: 'hidden', 
                   background: '#111',
                   border: '1px solid var(--glass-border)'
                }}
             >
                <img 
                  src={f.image} 
                  alt={f.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6, filter: 'grayscale(1) contrast(1.2)' }}
                />
                
                {/* Branding elements over image */}
                <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', background: 'var(--brand-red)', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Award size={16} />
                  <span style={{ fontSize: '0.7rem', fontWeight: 900, fontFamily: 'Syncopate' }}>{f.record}</span>
                </div>

                <div style={{ position: 'absolute', bottom: '0', left: 0, width: '100%', padding: '3rem 2rem', background: 'linear-gradient(to top, black, transparent)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{ height: '4px', background: 'var(--brand-green)', width: '30px' }}></div>
                    <img src={f.flag} alt={f.origin} style={{ height: '12px', width: '20px', objectFit: 'cover', borderRadius: '1px' }} />
                    <span style={{ fontSize: '0.6rem', fontWeight: 900, letterSpacing: '0.4em', fontFamily: 'Syncopate', opacity: 0.8 }}>{f.origin}</span>
                  </div>
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'white', lineHeight: 1.1, textTransform: 'uppercase' }}>{f.name}</h3>
                  <div style={{ display: 'flex', gap: '0.8rem', color: 'var(--brand-red)', fontWeight: 800, fontSize: '0.75rem', marginBottom: '1rem' }}>
                    <span style={{ opacity: 0.6 }}>{f.nickname}</span>
                    <span>/</span>
                    <span>{f.title}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#888', fontSize: '0.75rem', fontWeight: 800 }}>
                    <Trophy size={16} />
                    {f.rank}
                  </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
      <style>{`
        .brand-green { color: var(--brand-green); }
        .brand-red { color: var(--brand-red); }
        .fighters-strip {
           display: grid;
           grid-template-columns: repeat(4, 1fr);
           gap: 1rem;
        }
        @media (max-width: 1024px) {
          .fighters-strip {
             display: flex;
             overflow-x: auto;
             padding-bottom: 2rem;
             scroll-snap-type: x mandatory;
             gap: 1.5rem;
          }
          .fighter-card {
             flex: 0 0 85%;
             scroll-snap-align: center;
             height: 500px !important;
          }
          .fighters-strip::-webkit-scrollbar {
             height: 4px;
          }
          .fighters-strip::-webkit-scrollbar-thumb {
             background: var(--brand-red);
          }
        }
      `}</style>
    </section>
  );
};

export default Fighters;
