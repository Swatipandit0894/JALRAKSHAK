// src/components/HowItWorks.js
import React from 'react';
import '../styles/HowItWorks.css';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps-container">
        <div className="step">
          <img src="path/to/step1-icon.png" alt="Step 1" />
          <h3>Step One</h3>
          <p>Brief description of the first step in the process.</p>
        </div>
        <div className="step">
          <img src="path/to/step2-icon.png" alt="Step 2" />
          <h3>Step Two</h3>
          <p>Brief description of the second step in the process.</p>
        </div>
        <div className="step">
          <img src="path/to/step3-icon.png" alt="Step 3" />
          <h3>Step Three</h3>
          <p>Brief description of the third step in the process.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
