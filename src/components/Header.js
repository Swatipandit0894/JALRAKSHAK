// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm';      // Ensure correct path
import Signup from './Signup';            // We'll use this for the modal
import '../styles/Header.css';             // Your existing Header CSS
import logo from '../assets/logo.jpg';

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const openLoginModal = () => setIsLoginOpen(true);
  const closeLoginModal = () => setIsLoginOpen(false);

  const openSignupModal = () => setIsSignupOpen(true);
  const closeSignupModal = () => setIsSignupOpen(false);

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="JalRakshak Logo" className="logo-img" />
      </div>

      <nav className="nav-links">
        <a href="#home" className="nav-link">Home</a>
        <a href="#features" className="nav-link">Features</a>
        <a href="#how-it-works" className="nav-link">How It Works</a>
        <a href="#about-us" className="nav-link">About Us</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>

      <div className="auth-buttons">
        <button onClick={openLoginModal} className="btn btn-login">Login</button>
        <button onClick={openSignupModal} className="btn btn-signup">Sign Up</button>
      </div>

      {/* Login Modal */}
      {isLoginOpen && (
        <LoginForm onClose={closeLoginModal} />
      )}

      {/* Signup Modal */}
      {isSignupOpen && (
        <Signup onClose={closeSignupModal} />
      )}
    </header>
  );
};

export default Header;
