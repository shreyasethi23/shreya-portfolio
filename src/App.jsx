import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';
import Experience from './components/Experience.jsx';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
