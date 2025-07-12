// src/components/Features.js
import React from 'react';
import '../styles/Features.css';

const Features = () => {
  return (
    <section id="features" className="features">
      <h2 className="section-title">Our Key Features</h2>
      <div className="features-container">
        <div className="feature-item">
          <img src="path/to/icon1.png" alt="Feature 1" />
          <h3>Comprehensive Monitoring</h3>
          <p>Monitor water quality parameters like pH, turbidity, and more in real-time.</p>
        </div>
        <div className="feature-item">
          <img src="path/to/icon2.png" alt="Feature 2" />
          <h3>Instant Alerts</h3>
          <p>Receive instant alerts and notifications when water quality deviates from safe levels.</p>
        </div>
        <div className="feature-item">
          <img src="path/to/icon3.png" alt="Feature 3" />
          <h3>Data Analytics & Reporting</h3>
          <p>Analyze historical data and generate comprehensive reports.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
