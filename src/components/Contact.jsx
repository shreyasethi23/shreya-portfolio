import React from 'react';

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '3rem 2rem' }}>
      <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2rem' }}>Contact Me</h2>
      <form
        action="https://formspree.io/f/mqalddzr"
        method="POST"
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          backgroundColor: '#ffffff',
          padding: '2rem',
          borderRadius: '1rem',
          boxShadow: '0 8px 24px rgba(0,0,0,0.08)'
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          required
          placeholder="Your Name"
          style={{
            padding: '0.75rem',
            borderRadius: '0.5rem',
            border: '1px solid #cbd5e1',
            fontSize: '1rem'
          }}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="your@email.com"
          style={{
            padding: '0.75rem',
            borderRadius: '0.5rem',
            border: '1px solid #cbd5e1',
            fontSize: '1rem'
          }}
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          placeholder="Write your message..."
          style={{
            padding: '0.75rem',
            borderRadius: '0.5rem',
            border: '1px solid #cbd5e1',
            fontSize: '1rem'
          }}
        ></textarea>

        <button
          type="submit"
          style={{
            padding: '0.75rem',
            borderRadius: '0.5rem',
            backgroundColor: '#0f172a',
            color: 'white',
            border: 'none',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
