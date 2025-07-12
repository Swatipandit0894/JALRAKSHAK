import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import GaugeChart from 'react-gauge-chart';
import '../styles/RealTimeMonitoring.css'; // Ensure this path is correct

const RealTimeMonitoring = () => {
  // Sample data for the charts and gauges (excluding oxygen and tds)
  const data = [
    { time: '12:00', pH: 7.2, turbidity: 5, temperature: 22, conductivity: 300 },
    { time: '12:05', pH: 7.3, turbidity: 4, temperature: 22.5, conductivity: 310 },
    // Add more data points as needed
  ];

  // Example gauge values (these could be dynamic or real-time in a real application)
  const pHValue = 7.2;
  const turbidityValue = 4;
  const temperatureValue = 22;
  const conductivityValue = 300;

  return (
    <div className="real-time-monitoring">
      <h2>Real-Time Monitoring</h2>
      <div className="gauges">
        <div className="gauge-container">
          <h3>pH Level</h3>
          <GaugeChart id="ph-gauge" nrOfLevels={3} percent={pHValue / 14} colors={['#FF0000', '#FFFF00', '#00FF00']} />
        </div>
        <div className="gauge-container">
          <h3>Turbidity</h3>
          <GaugeChart id="turbidity-gauge" nrOfLevels={3} percent={turbidityValue / 10} colors={['#FF0000', '#FFFF00', '#00FF00']} />
        </div>
        <div className="gauge-container">
          <h3>Temperature (°C)</h3>
          <GaugeChart id="temperature-gauge" nrOfLevels={3} percent={temperatureValue / 100} colors={['#FF0000', '#FFFF00', '#00FF00']} />
        </div>
        <div className="gauge-container">
          <h3>Conductivity</h3>
          <GaugeChart id="conductivity-gauge" nrOfLevels={3} percent={conductivityValue / 1000} colors={['#FF0000', '#FFFF00', '#00FF00']} />
        </div>
      </div>

      <div className="charts">
        <h3>Trends Over Time</h3>
        <div className='hee'>
        <LineChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pH" stroke="#8884d8" />
          <Line type="monotone" dataKey="turbidity" stroke="#82ca9d" />
          <Line type="monotone" dataKey="temperature" stroke="#ffc658" />
          <Line type="monotone" dataKey="conductivity" stroke="#ff7300" />
        </LineChart>
      </div>
    </div>
    </div>
  );
};

export default RealTimeMonitoring;
