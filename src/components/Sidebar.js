// src/components/Sidebar.js

import React from 'react';
import { FaTachometerAlt, FaChartLine, FaCalendarAlt, FaCog, FaBell, FaDatabase } from 'react-icons/fa';
import '../styles/Sidebar.css'; // Ensure this path is correct

const Sidebar = ({ onContentChange }) => {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li onClick={() => onContentChange('real-time-monitoring')}>
          <FaTachometerAlt className="icon" />
          <span className="text">Real-Time Monitoring</span>
        </li>
        <li onClick={() => onContentChange('historical-data')}>
          <FaCalendarAlt className="icon" />
          <span className="text">Historical Data</span>
        </li>
        <li onClick={() => onContentChange('alerts')}>
          <FaBell className="icon" />
          <span className="text">Alerts</span>
        </li>
        <li onClick={() => onContentChange('settings')}>
          <FaCog className="icon" />
          <span className="text">Settings</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
