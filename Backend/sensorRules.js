// sensorRules.js
const sensorRules = {
  ph: {
    threshold: 4.5,
    // Function returns true if reading is below threshold
    condition: (value) => value < 4.5,
    status: 'Critical',
    cause: 'pH level is too low, indicating the water is too acidic.',
    remedy: 'Add pH balancing chemicals or contact a water treatment expert.'
  },
  turbidity: {
    threshold: 6.8,
    condition: (value) => value > 6.8,
    status: 'Warning',
    cause: 'High turbidity, indicating the presence of too many particles in the water.',
    remedy: 'Check for blockages in the water system or consider filtering the water.'
  },
  conductivity: {
    threshold: 1.5,  // example threshold
    condition: (value) => value > 1.5,
    status: 'Critical',
    cause: 'High conductivity, suggesting a high level of dissolved ions in the water.',
    remedy: 'Investigate the water source and consider water purification measures.'
  },
  temperature: {
    threshold: 35,  // example threshold in °C
    condition: (value) => value > 35,
    status: 'Warning',
    cause: 'High water temperature may affect water quality.',
    remedy: 'Check for heat sources or adjust cooling mechanisms.'
  }
};

module.exports = sensorRules;
