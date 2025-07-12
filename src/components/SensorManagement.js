// src/components/SensorManagement.js

import React, { useState } from 'react';
import '../styles/SensorManagement.css'; // Ensure this path is correct

const SensorManagement = () => {
  const [sensors, setSensors] = useState({
    pH: true,
    turbidity: true,
    temperature: true,
    conductivity: true,
    
  });

  const handleToggle = (sensor) => {
    setSensors((prevSensors) => ({
      ...prevSensors,
      [sensor]: !prevSensors[sensor],
    }));
  };

  return (
    <div className="sensor-management">
      <h2>Sensor Management</h2>
      <div className="sensor-list">
        {Object.keys(sensors).map((sensor) => (
          <div key={sensor} className="sensor-item">
            <input
              type="checkbox"
              id={sensor}
              checked={sensors[sensor]}
              onChange={() => handleToggle(sensor)}
            />
            <label htmlFor={sensor}>{sensor.replace(/([A-Z])/g, ' $1').toUpperCase()}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SensorManagement;
