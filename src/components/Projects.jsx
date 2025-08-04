// ✅ src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Music Genre Transfer Using Deep Generative Architectures',
    description: 'This project explores the task of music genre transfer—modifying the stylistic features of an audio clip to match a target genre, while preserving its melody, rhythm, and structure. We experiment with a range of deep generative models, including Transformer, CycleGAN, VAE, StarGAN, and a novel use of MusicGen.',
    github: 'https://github.com/shreyasethi23/Music-Genre-Transformation',
    stack: ['Python', 'Transformers', 'PyTorch']
  },
  {
    title: 'Bias in Clinical Text Using LLMs',
    description: 'Explored and reduced bias in LLM-generated clinical narratives. Techniques included prompt tuning and comparative analysis with synthetic datasets.',
    github: 'https://github.com/shreyasethi23/Bias-Detection-in-LLMs',
    stack: ['LLMs', 'NLP', 'Prompt Tuning']
  },
  {
    title: 'Heart Disease Prediction Model',
    description: 'This project predicts heart disease using machine learning on cross-country medical datasets, enhancing accuracy through diverse data. It uses 14 key features like age, gender, and chest pain to assess cardiovascular risk. Models like SVM, Random Forest, and XGBoost were evaluated, with SVM achieving 100% accuracy. Ensemble techniques further improved prediction reliability.',
    github: 'https://github.com/shreyasethi23/Heart-Disease-Prediction-ML',
    stack: ['XGBoost', 'Scikit-learn', 'Pandas']
  }
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '3rem 2rem' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', color: '#0f172a' }}>Projects</h2>
      
      {/* Grid updated for broader cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {projects.map((project, index) => (
          <motion.div
  key={project.title}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.2 }}
  viewport={{ once: true }}
  style={{
    borderRadius: '1rem',
    padding: '1.5rem',
    backgroundColor: '#ffffff',
    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
    transition: 'transform 0.3s ease',
    color: '#0f172a',
    minHeight: '340px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden' // prevent overflow
  }}
  whileHover={{ scale: 1.02 }}
>
  <div>
    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: '#0f172a' }}>{project.title}</h3>
    <p style={{
      marginBottom: '1rem',
      color: '#475569',
      fontSize: '0.95rem',
      lineHeight: '1.4',
      maxHeight: '120px',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }}>
      {project.description}
    </p>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
      {project.stack.map((tech) => (
        <span
          key={tech}
          style={{
            padding: '0.35rem 0.75rem',
            backgroundColor: '#e2e8f0',
            borderRadius: '9999px',
            fontSize: '0.875rem',
            fontWeight: '500',
            color: '#1e293b'
          }}
        >
          {tech}
        </span>
      ))}
    </div>
  </div>

  <div style={{ marginTop: 'auto' }}>
    <a
      href={project.github}
      target="_blank"
      rel="noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.6rem 1.25rem',
        backgroundColor: '#0f172a',
        color: '#ffffff',
        borderRadius: '0.5rem',
        textDecoration: 'none',
        fontWeight: '500',
        transition: 'background-color 0.3s ease',
        width: 'fit-content'
      }}
    >
      <FaGithub /> View Code
    </a>
  </div>
</motion.div>

        ))}
      </div>
    </section>
  );
}
