import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/Header.css'; // Correct path if Header.css is in src/assets/styles/


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

