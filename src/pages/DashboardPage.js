import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/DashboardHeader';
import RealTimeMonitoring from '../components/RealTimeMonitoring';
import HistoricalData from '../components/HistoricalData';
import Alerts from '../components/Alerts';
import Settings from '../components/Settings';
import '../styles/DashboardPage.css'; // Ensure this path is correct

const DashboardPage = () => {
  const [content, setContent] = useState('dashboard');

  const renderContent = () => {
    switch (content) {
      case 'real-time-monitoring':
        return <RealTimeMonitoring />;
      case 'historical-data':
        return <HistoricalData />;
      case 'alerts':
        return <Alerts />;
      case 'settings':
        return <Settings />;
      // Add cases for other components as needed
      default:
        return <div>Dashboard Overview</div>; // Default content
    }
  };

  return (
    <div className="dashboard-page">
      <Header />
      <div className="dashboard-body">
        <Sidebar onContentChange={setContent} />
        <div className="main-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
