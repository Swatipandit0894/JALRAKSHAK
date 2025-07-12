// alertService.js
const sensorRules = require('./sensorRules');

/**
 * evaluateSensorData takes sensor data and returns an array of alerts.
 * sensorData is expected to be an object like:
 * { ph: 4.3, turbidity: 7.0, conductivity: 2.0, temperature: 36 }
 */
function evaluateSensorData(sensorData) {
  let alerts = [];
  for (const sensor in sensorRules) {
    const rule = sensorRules[sensor];
    const value = sensorData[sensor];
    if (typeof value !== 'undefined' && rule.condition(value)) {
      alerts.push({
        sensor,
        value,
        status: rule.status,
        cause: rule.cause,
        remedy: rule.remedy,
        timestamp: new Date().toISOString()
      });
    }
  }
  return alerts;
}

module.exports = { evaluateSensorData };
