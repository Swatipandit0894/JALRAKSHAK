import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaCog, FaBell, FaCaretDown } from 'react-icons/fa';
import '../styles/DashboardHeader.css';
import LandingPage from '../pages/LandingPage';
import logo from '../assets/logo.jpg';

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="JalRakshak Logo" className="logo-img" />
      </div>
      <nav className="nav-links">
        <Link to="src\pages\DashboardPage.js" className="nav-link">Dashboard</Link>
        
        {/* Reports Dropdown */}
        <div 
          className="nav-link reports-dropdown" 
          onClick={toggleDropdown}
        >
          Reports <FaCaretDown />
          {isDropdownOpen && (
            <div 
              className="dropdown-content" 
              onMouseLeave={closeDropdown} 
            >
              <Link to="/data-history" className="dropdown-link">Data History</Link>
              <Link to="/trend-analysis" className="dropdown-link">Trend Analysis</Link>
              <Link to="/download-reports" className="dropdown-link">Downloadable Reports</Link>
            </div>
          )}
        </div>
        
        <Link to="/alerts" className="nav-link">Alerts</Link>
        <Link to="/settings" className="nav-link">Settings</Link>
      </nav>
      <div className="user-profile">
        <FaBell className="icon" />
        <FaUserCircle className="icon" />
      </div>
    </header>
  );
};

export default Header;
