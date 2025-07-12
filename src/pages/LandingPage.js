import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <>
      <Header />
      {/* Remove the block below to get rid of the extra buttons */}
      {/* <div className="header">
        <Link to="/login" className="btn btn-primary">Login</Link>
        <Link to="/signup" className="btn btn-secondary">Signup</Link>
      </div> */}
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <AboutUs />
      <Contact />
      <Footer />
    </>
  );
};

export default LandingPage;
