// ✅ src/components/Experience.jsx
import React from 'react';

const experiences = [
  {
    company: 'J.P. Morgan Chase & Co.',
    role: 'Software Developer',
    duration: 'Jul 2023 – Jul 2024',
    location: 'Bangalore, India',
    description: 'Worked on modernizing backend infrastructure using Java and Spring Boot. Contributed to scalable RESTful APIs and optimized database queries to improve performance.'
  },
  {
    company: 'J.P. Morgan Chase & Co.',
    role: 'Software Developer Intern',
    duration: 'Jan 2023 – Jul 2023',
    location: 'Bangalore, India',
    description: 'Built internal dashboard components and automation scripts to monitor service health. Collaborated with senior engineers on code reviews and unit testing.'
  }
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '3rem 2rem' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', color: '#0f172a' }}>Experience</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
        {experiences.map((exp, index) => (
          <div key={index} style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 6px 16px rgba(0,0,0,0.08)' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.25rem', color: '#0f172a' }}>{exp.role}</h3>
            <p style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '0.25rem' }}>{exp.company} • {exp.location}</p>
            <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: '0.75rem' }}>{exp.duration}</p>
            <p style={{ fontSize: '0.95rem', color: '#334155' }}>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
