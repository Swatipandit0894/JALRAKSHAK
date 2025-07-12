import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import '../styles/WaterUsageAnalytics.css'; // Ensure this path is correct

const data = [
  { name: 'January', usage: 120 },
  { name: 'February', usage: 110 },
  { name: 'March', usage: 150 },
  { name: 'April', usage: 200 },
  { name: 'May', usage: 180 },
  // Add more data as needed
];

const pieData = [
  { name: 'Kitchen', value: 150 },
  { name: 'Bathroom', value: 300 },
  { name: 'Laundry', value: 300 },
  { name: 'Others', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const WaterUsageAnalytics = () => {
  return (
    <div className="water-usage-analytics">
      <h2>Water Usage Analytics</h2>
      
      <div className="charts">
        <h3>Monthly Water Usage</h3>
        <BarChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="usage" fill="#8884d8" />
        </BarChart>
      </div>
      
  
      <div className="charts">
        <h3>Usage Trend Over Time</h3>
        <LineChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="usage" stroke="#8884d8" />
        </LineChart>
      </div>
    </div>
  );
};

export default WaterUsageAnalytics;
