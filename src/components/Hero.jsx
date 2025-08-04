import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
// import avatar from '../assets/shreya-avatar.png';

export default function Hero() {
  return (
    
    <section style={{padding: '4rem 2rem', textAlign: 'center' }}>
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        {/* <img src={avatar} alt="Shreya Avatar" style={{ width: '120px', borderRadius: '9999px', marginBottom: '1rem' }} /> */}
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a' }}>Shreya Sethi</h1>
        <div style={{ marginTop: '1rem', fontSize: '1.25rem', color: '#0e7490', fontWeight: '500' }}>
          <Typewriter
            options={{
              strings: ['Software Engineer' ,'Machine Learning Enthusiast',  'Aspiring AI Engineer', 'USC MSCS Student'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p style={{ color: '#334155', marginTop: '1rem' }}>📍 Los Angeles, CA · <a href="mailto:shreyasethi1.ss@gmail.com" style={{ textDecoration: 'underline' }}>shreyasethi1.ss@gmail.com</a></p>
        <div style={{ marginTop: '1.5rem' }}>
          <a
            href="https://www.linkedin.com/in/shreya-sethi-8b93031b1/"
            target="_blank"
            rel="noreferrer"
            style={{ marginRight: '1rem', padding: '0.5rem 1rem', backgroundColor: '#0ea5e9', color: 'white', borderRadius: '0.375rem', fontWeight: '500', textDecoration: 'none' }}
          >
            Connect on LinkedIn
          </a>
          <a
            href="/Resume_Shreya_Sethi.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#0f172a',
              color: '#ffffff',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1rem',
              marginTop: '1rem',
              display: 'inline-block'
            }}
          >
            📄 Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}