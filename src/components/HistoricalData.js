// src/components/HistoricalData.js

import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';
import '../styles/HistoricalData.css'; // Ensure this path is correct

const HistoricalData = () => {
  // Sample historical data
  const [data, setData] = useState([
    { time: '2024-08-01', pH: 7.2, turbidity: 8, temperature: 22, conductivity: 300, oxygen: 8, tds: 500 },
    { time: '2024-08-02', pH: 7.3, turbidity: 4, temperature: 22.5, conductivity: 310, oxygen: 8.2, tds: 510 },
    // Add more data points as needed
  ]);

  // Sample filter for date range
  const handleDateRangeChange = (e) => {
    // Implement date range filter logic
  };

  return (
    <div className="historical-data">
      <h2>Historical Data</h2>
      <div className="filter">
        <label htmlFor="date-range">Select Date Range:</label>
        <input type="date" id="start-date" onChange={handleDateRangeChange} />
        <input type="date" id="end-date" onChange={handleDateRangeChange} />
      </div>

      <div className="charts">
        <h3>Line Charts</h3>
        <LineChart width={800} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="time" tick={{ fill: '#555' }} />
          <YAxis tick={{ fill: '#555' }} />
          <Tooltip contentStyle={{ backgroundColor: '#fff', borderColor: '#ccc' }} />
          <Legend verticalAlign="top" align="right" wrapperStyle={{ paddingBottom: 10 }} />
          <Line type="monotone" dataKey="pH" stroke="#3498db" strokeWidth={2} />
          <Line type="monotone" dataKey="turbidity" stroke="#2ecc71" strokeWidth={2} />
          <Line type="monotone" dataKey="temperature" stroke="#e74c3c" strokeWidth={2} />
          <Line type="monotone" dataKey="conductivity" stroke="#f39c12" strokeWidth={2} />
        </LineChart>

        <h3>Bar Graphs</h3>
        <BarChart width={800} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="time" tick={{ fill: '#555' }} />
          <YAxis tick={{ fill: '#555' }} domain={[0, 'dataMax + 50']} /> {/* Increase Y-axis range */}
          <Tooltip contentStyle={{ backgroundColor: '#fff', borderColor: '#ccc' }} />
          <Legend verticalAlign="top" align="right" wrapperStyle={{ paddingBottom: 10 }} />
          <Bar dataKey="pH" fill="#2980b9" barSize={50} /> {/* Larger bar size for pH */}
          <Bar dataKey="turbidity" fill="#27ae60" barSize={50} /> {/* Larger bar size for turbidity */}
          <Bar dataKey="temperature" fill="#c0392b" barSize={50} /> {/* Larger bar size for temperature */}
          <Bar dataKey="conductivity" fill="#e67e22" barSize={40} /> {/* Keep the same bar size for conductivity */}
        </BarChart>
      </div>
    </div>
  );
};

export default HistoricalData;
