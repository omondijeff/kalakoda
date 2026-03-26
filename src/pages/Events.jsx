import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Ticket } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      title: 'Nightmare in Nairobi III',
      subtitle: 'FRIDAY FIGHT NIGHTS',
      date: 'MAR 27, 2026',
      location: 'MASSHOUSE Ngong Racecourse',
      time: '18:00 - 02:00 EAT',
      description: 'A storm is brewing! Join us for an electrifying night of international boxing where women take center stage and lead the action.',
      image: '/gallery/Nightmare_3.png',
      link: 'https://kalakoda.hustlesasa.shop/products/69aa9101a3a7e03687296c79',
      status: 'upcoming'
    }
  ];

  return (
    <div className="page-wrapper" style={{ paddingTop: '10rem', background: '#000', minHeight: '100vh', color: 'white' }}>
      <SEO title="Fight Schedule" description="View the upcoming Kalakoda boxing events, including Nightmare in Nairobi and other Pan-African fight nights." />
      <div className="container">
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           style={{ marginBottom: '8rem', borderLeft: '8px solid var(--brand-green)', paddingLeft: '4rem' }}
        >
          <h1 className="section-title">EVENT <br /> SCHEDULE</h1>
          <p style={{ letterSpacing: '0.4rem', fontSize: '1rem', opacity: 0.6, fontWeight: 900, textTransform: 'uppercase', color: 'var(--brand-red)' }}>
             Upcoming Fights & Productions
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', marginBottom: '15rem' }}>
          {upcomingEvents.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden', display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr' }}
              className="glass event-card-split"
            >
              <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', overflow: 'hidden' }}>
                <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', background: 'var(--brand-red)', padding: '0.4rem 0.8rem', fontSize: '0.6rem', fontWeight: 900, fontFamily: 'Syncopate' }}>
                   UPCOMING
                </div>
              </div>
              
              <div style={{ padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 900, fontFamily: 'Syncopate', color: 'var(--brand-red)', letterSpacing: '0.4em' }}>{event.subtitle}</span>
                <h2 style={{ fontSize: '2.5rem', marginTop: '1rem', marginBottom: '2rem', fontFamily: 'Syncopate', fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 1.1 }}>{event.title}</h2>
                <p style={{ color: '#888', marginBottom: '3rem', fontSize: '1.1rem', lineHeight: 1.6 }}>{event.description}</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '4rem' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#888' }}>
                      <Calendar size={18} className="text-white" />
                      <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>{event.date}</span>
                   </div>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#888' }}>
                      <MapPin size={18} className="brand-green" />
                      <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>{event.location}</span>
                   </div>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#888' }}>
                      <Clock size={18} className="brand-red" />
                      <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>{event.time}</span>
                   </div>
                </div>

                <a 
                  href={event.link || "https://kalakoda.hustlesasa.shop/"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary" 
                  style={{ width: '100%', justifyContent: 'center', clipPath: 'none', background: 'white', color: 'black' }}
                >
                  Book Your Seat <Ticket size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Events;
