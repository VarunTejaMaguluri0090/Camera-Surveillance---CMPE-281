const express = require('express');
const app = express();
const port = 3000;

// Set up middleware for handling requests
app.use(express.json()); // Parse incoming JSON data
app.use(express.static('public')); // Serve static files from the public directory

// Handle GET request for system performance metrics
app.get('/system-performance', (req, res) => {
  // Make queries to database or other data sources to get performance metrics
  const uptime = 99.9; // Example value
  const downtime = 0.1; // Example value
  const responseTime = 100; // Example value

  // Return data as JSON
  res.json({
    uptime,
    downtime,
    responseTime,
  });
});

// Handle GET request for camera health status
app.get('/camera-health', (req, res) => {
  // Make queries to database or other data sources to get camera health status
  const camera1 = {
    name: 'Camera 1',
    id: 123,
    location: 'Entrance',
    status: 'Online',
    hasIssues: false,
    isRecording: true,
  }; // Example data for camera 1
  const camera2 = {
    name: 'Camera 2',
    id: 456,
    location: 'Parking lot',
    status: 'Offline',
    hasIssues: true,
    isRecording: false,
  }; // Example data for camera 2

  // Return data as JSON
  res.json({
    camera1,
    camera2,
  });
});

// Handle GET request for incident reports
app.get('/incident-reports', (req, res) => {
  // Make queries to database or other data sources to get incident reports
  const incidents = [
    {
      time: '2022-04-10 15:30:00',
      location: 'Entrance',
      type: 'Theft',
      severity: 'High',
    },
    {
      time: '2022-04-09 09:15:00',
      location: 'Parking lot',
      type: 'Vandalism',
      severity: 'Medium',
    },
    {
      time: '2022-04-08 14:45:00',
      location: 'Main lobby',
      type: 'Suspicious behavior',
      severity: 'Low',
    },
  ]; // Example data for incident reports

  // Return data as JSON
  res.json({
    incidents,
  });
});

// Handle GET request for user activity logs
app.get('/user-activity', (req, res) => {
  // Make queries to database or other data sources to get user activity logs
  const userActivity = [
    {
      user: 'Admin',
      action: 'Viewed camera health status',
      time: '2022-04-10 15:00:00',
    },
    {
      user: 'Operator 1',
      action: 'Started camera 1 recording',
      time: '2022-04-09 10:00:00',
    },
    {
      user: 'Operator 2',
      action: 'Changed camera 2 settings',
      time: '2022-04-08 13:00:00',
    },
  ]; // Example data for user activity logs

  // Return data as JSON
  res.json({
    userActivity,
  });
});

// // Handle GET request for audit trails
// app.get('/audit-trails', (req, res) => {
//   // Make queries to database or other data sources to get audit trails
