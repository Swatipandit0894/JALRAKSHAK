import React from 'react';
import '../styles/MainContent.css';
import GaugeChart from 'react-gauge-chart';

const MainContent = () => {
  const pHLevel = 7.2; // Example value
  const turbidity = 1.5; // Example value (in NTU)
  const temperature = 22.3; // Example value (in °C)
  const conductivity = 350; // Example value (in µS/cm)
  const dissolvedOxygen = 8.0; // Example value (in mg/L)
  const tds = 120; // Example value (in ppm)

  return (
    <div className="main-content">
      <div className="realtime-section">
        <h2>Real-Time Monitoring</h2>

        <div className="parameter">
          <h3>pH Level</h3>
          <GaugeChart id="ph-gauge" 
                      nrOfLevels={20} 
                      percent={pHLevel / 14} 
                      colors={['#FF0000', '#00FF00']} 
                      textColor="#000000" />
          <p>Current pH Level: {pHLevel}</p>
        </div>

        <div className="parameter">
          <h3>Turbidity</h3>
          <GaugeChart id="turbidity-gauge" 
                      nrOfLevels={20} 
                      percent={turbidity / 10} 
                      colors={['#00FF00', '#FF0000']} 
                      textColor="#000000" />
          <p>Current Turbidity: {turbidity} NTU</p>
        </div>

        <div className="parameter">
          <h3>Temperature</h3>
          <GaugeChart id="temperature-gauge" 
                      nrOfLevels={20} 
                      percent={temperature / 100} 
                      colors={['#00FFFF', '#FF0000']} 
                      textColor="#000000" />
          <p>Current Temperature: {temperature} °C</p>
        </div>

        <div className="parameter">
          <h3>Conductivity</h3>
          <GaugeChart id="conductivity-gauge" 
                      nrOfLevels={20} 
                      percent={conductivity / 2000} 
                      colors={['#FFFF00', '#FF0000']} 
                      textColor="#000000" />
          <p>Current Conductivity: {conductivity} µS/cm</p>
        </div>

        <div className="parameter">
          <h3>Dissolved Oxygen</h3>
          <GaugeChart id="oxygen-gauge" 
                      nrOfLevels={20} 
                      percent={dissolvedOxygen / 14} 
                      colors={['#00FF00', '#FF0000']} 
                      textColor="#000000" />
          <p>Current Dissolved Oxygen: {dissolvedOxygen} mg/L</p>
        </div>

        <div className="parameter">
          <h3>Total Dissolved Solids (TDS)</h3>
          <GaugeChart id="tds-gauge" 
                      nrOfLevels={20} 
                      percent={tds / 1000} 
                      colors={['#00FF00', '#FF0000']} 
                      textColor="#000000" />
          <p>Current TDS: {tds} ppm</p>
        </div>

      </div>
    </div>
  );
};

export default MainContent;
