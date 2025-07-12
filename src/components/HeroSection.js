import React from 'react';
import './styles/HeroSection.css'; // Import the CSS file

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to JalRakshak</h1>
        <p>Your solution for smart water monitoring and purification.</p>
        <button className="cta-button">Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;
