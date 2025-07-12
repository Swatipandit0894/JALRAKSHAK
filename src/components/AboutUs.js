// src/components/AboutUs.js
import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <section id="about-us" className="about-us">
      <h2>About Us</h2>
      <div className="about-content">
        <div className="about-text">
          <h3>Our Mission</h3>
          <p>At JalRakshak, our mission is to provide innovative solutions for water safety and quality. We are committed to ensuring that every drop of water is clean and safe for consumption.</p>
        </div>
        <div className="about-text">
          <h3>Our Values</h3>
          <ul>
            <li>Integrity: We uphold the highest standards of honesty and transparency.</li>
            <li>Innovation: We constantly seek new and creative solutions to improve water safety.</li>
            <li>Customer-Centricity: We prioritize the needs and feedback of our customers.</li>
            <li>Sustainability: We strive to make environmentally friendly choices in our operations.</li>
          </ul>
        </div>
        <div className="about-text">
          <h3>Our Team</h3>
          <p>Our team is composed of dedicated professionals with expertise in water technology, environmental science, and customer service. We work together to bring you the best products and services.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
