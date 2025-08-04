import React from 'react';

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', position: 'sticky', top: 0, backgroundColor: '#b4afe8ff', zIndex: 10, borderBottom: '1px solid #e2e8f0'
    }}>
      <h1 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a' }}>Shreya Sethi's Portfolio</h1>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
        <li><a href="#" style={{ fontSize: '1.25rem',color: '#0f172a', textDecoration: 'none' }}>Home</a></li>
        <li><a href="#skills" style={{ fontSize: '1.25rem', color: '#0f172a', textDecoration: 'none' }}>Skills</a></li>
        <li><a href="#projects" style={{ fontSize: '1.25rem', color: '#0f172a', textDecoration: 'none' }}>Projects</a></li>
        <li><a href="#contact" style={{ fontSize: '1.25rem', color: '#0f172a', textDecoration: 'none' }}>Contact</a></li>
      </ul>
    </nav>
  );
}
