import React, { useState, useEffect } from 'react';
import '../styles/Alerts.css';

const Alert = () => {
  const [alerts, setAlerts] = useState([]);
  const [alertHistory, setAlertHistory] = useState([]);

  useEffect(() => {
    // Simulate fetching real-time alerts data
    const alertData = [
      {
        id: 1,
        parameter: 'pH Level',
        value: 4.5,
        status: 'critical',
        cause: 'pH level is too low, indicating the water is too acidic.',
        remedy: 'Add pH balancing chemicals or contact a water treatment expert.',
        timestamp: '2024-09-12 10:00 AM',
      },
      {
        id: 2,
        parameter: 'Turbidity',
        value: 6.8,
        status: 'warning',
        cause: 'High turbidity, indicating the presence of too many particles in the water.',
        remedy: 'Check for blockages in the water system or consider filtering the water.',
        timestamp: '2024-09-12 10:30 AM',
      },
    ];

    // Simulate fetching past alerts for alert history
    const pastAlertData = [
      {
        id: 3,
        parameter: 'Temperature',
        value: 45,
        status: 'critical',
        cause: 'Water temperature is too high, possibly due to external heat.',
        remedy: 'Inspect the heating system or reduce external heat sources near the tank.',
        timestamp: '2024-09-11 09:00 AM',
      },
    ];

    setAlerts(alertData);
    setAlertHistory(pastAlertData);
  }, []);

  return (
    <div className="alert-page">
      <h1>Real-Time Alerts</h1>
      {alerts.length > 0 ? (
        alerts.map((alert) => (
          <div key={alert.id} className={`alert-card ${alert.status}`}>
            <h2>{alert.parameter} Alert</h2>
            <p><strong>Value:</strong> {alert.value}</p>
            <p><strong>Status:</strong> {alert.status === 'critical' ? 'Critical' : 'Warning'}</p>
            <p><strong>Cause:</strong> {alert.cause}</p>
            <p><strong>Remedy:</strong> {alert.remedy}</p>
            <p><strong>Timestamp:</strong> {alert.timestamp}</p>
          </div>
        ))
      ) : (
        <p>No real-time alerts currently</p>
      )}

      <h1>Alert History</h1>
      {alertHistory.length > 0 ? (
        alertHistory.map((history) => (
          <div key={history.id} className={`alert-card history ${history.status}`}>
            <h2>{history.parameter} - Past Alert</h2>
            <p><strong>Value:</strong> {history.value}</p>
            <p><strong>Status:</strong> {history.status === 'critical' ? 'Critical' : 'Warning'}</p>
            <p><strong>Cause:</strong> {history.cause}</p>
            <p><strong>Remedy:</strong> {history.remedy}</p>
            <p><strong>Timestamp:</strong> {history.timestamp}</p>
          </div>
        ))
      ) : (
        <p>No alert history available</p>
      )}
    </div>
  );
};

export default Alert;
