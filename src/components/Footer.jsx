import React from 'react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#b4afe8ff', color: 'white', textAlign: 'center', padding: '1rem' }}>
      <p>© {new Date().getFullYear()} Shreya Sethi. All rights reserved.</p>
    </footer>
  );
}