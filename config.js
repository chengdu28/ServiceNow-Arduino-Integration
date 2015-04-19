var config = {}

// Instance Settings
config.instance = 'empjobrayeureka.service-now.com';
config.username =  'admin';
config.password = 'admin'

// Assignment Settings
config.assigned_state = '2'; // Set the assigned state to Active
config.assigned_to = '5137153cc611227c000bbd1bd8cd2005'; // Assign to Fred Luddy
config.assignment_group = 'b85d44954a3623120004689b2d5dd60a'; // Cab Approval

// Search Settings
config.search_priority = '1'; // Search for a Priority of 'P1 - Critical'
config.search_state = '1'; // Search for a State of 'New'

// Serial Port Settings
// You can find this by opening the Arduino IDE, then Tools -> Port
config.serialport =  '/dev/tty.usbmodem1451'; 

module.exports = config;
