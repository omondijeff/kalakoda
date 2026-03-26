import React, { useState, useEffect, useRef } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { MoveRight, X, Maximize2, Loader2 } from 'lucide-react';

const LookBook = () => {
  const [images, setImages] = useState([]);
  const [displayCount, setDisplayCount] = useState(12);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const loaderRef = useRef(null);

  // Load manifest
  useEffect(() => {
    const fetchManifest = async () => {
      try {
        const response = await fetch('/gallery/manifest.json');
        if (response.ok) {
          const data = await response.json();
          setImages(data);
        } else {
          // Fallback if no manifest exists yet (e.g., initial setup)
          console.warn('Gallery manifest not found. Please run the generation script.');
        }
      } catch (err) {
        console.error('Error loading gallery:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchManifest();
  }, []);

  // Infinite Scroll logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && displayCount < images.length) {
          setDisplayCount(prev => prev + 12);
        }
      },
      { threshold: 0.1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [images, displayCount]);

  const currentDisplay = images.slice(0, displayCount);

  return (
    <div className="page-wrapper" style={{ paddingTop: '10rem', background: '#000', minHeight: '100vh' }}>
      <SEO title="Photo Gallery" description="Explore over 350 moments captured from the Nairobi Nightmare boxing event. Authentic African combat sports photography." />
      <div className="container">
        
        {/* Header */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           style={{ marginBottom: '8rem', borderLeft: '8px solid var(--brand-red)', paddingLeft: '4rem' }}
        >
          <h1 className="section-title green">Nairobi <br /> Nightmare</h1>
          <p style={{ letterSpacing: '0.4rem', fontSize: '1rem', opacity: 0.6, fontWeight: 900, textTransform: 'uppercase', color: 'white' }}>
             {images.length > 0 ? `${images.length} Moments Captured` : 'Curating African Boxing Excellence'}
          </p>
        </motion.div>

        {/* Masonry Grid */}
        {loading ? (
          <div style={{ height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Loader2 className="animate-spin text-brand-red" size={48} />
          </div>
        ) : images.length > 0 ? (
          <div className="masonry-grid" style={{ marginBottom: '10rem' }}>
            {currentDisplay.map((img, i) => (
              <motion.div
                key={img.id || i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedImage(img)}
                className="gallery-item-wrapper"
              >
                <div style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer' }}>
                  <img 
                    src={img.src} 
                    alt="Boxing Event" 
                    loading="lazy"
                    style={{ width: '100%', height: 'auto', display: 'block' }} 
                  />
                  <div className="gallery-overlay">
                     <Maximize2 size={24} className="text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div style={{ height: '40vh', border: '1px dashed var(--glass-border)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#888' }}>
             <p style={{ marginBottom: '2rem' }}>No images found in `/public/gallery/`.</p>
             <div style={{ background: '#111', padding: '1rem 2rem', fontSize: '0.8rem', fontFamily: 'monospace' }}>
                1. Add images to /public/gallery/ <br />
                2. Run: node scripts/generate-manifest.js
             </div>
          </div>
        )}

        {/* Loading Indicator for Infinite Scroll */}
        {displayCount < images.length && (
          <div ref={loaderRef} style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '4rem' }}>
             <Loader2 className="animate-spin text-brand-red" size={24} />
          </div>
        )}

        {/* Lightbox / Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: 'rgba(0,0,0,0.95)',
                zIndex: 3000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem'
              }}
            >
               <button 
                  onClick={() => setSelectedImage(null)}
                  style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
               >
                 <X size={40} />
               </button>
               <motion.img 
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  src={selectedImage.src} 
                  style={{ maxHeight: '90vh', maxWidth: '90vw', objectFit: 'contain', boxShadow: '0 0 50px rgba(0,0,0,0.5)' }} 
               />
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      <style>{`
        .masonry-grid {
          column-count: 3;
          column-gap: 1.5rem;
        }
        @media (max-width: 1100px) { .masonry-grid { column-count: 2; } }
        @media (max-width: 700px) { .masonry-grid { column-count: 1; } }

        .gallery-item-wrapper {
          display: inline-block;
          width: 100%;
          margin-bottom: 1.5rem;
          background: #111;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .gallery-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(237, 18, 31, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: 0.3s ease;
        }

        .gallery-item-wrapper:hover .gallery-overlay {
          opacity: 1;
        }

        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

export default LookBook;
