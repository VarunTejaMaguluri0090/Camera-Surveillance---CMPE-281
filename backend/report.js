// import required modules
const express = require('express');




// initialize express app
const app = express();

// define API endpoints
app.get('/system-performance-metrics', (req, res) => {
  const sql = `SELECT uptime, downtime, response_time
               FROM performance_metrics
               WHERE date = CURDATE()`;

  global.sqlConnect.query(sql, (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

app.get('/camera-health-status', (req, res) => {
  const sql = `SELECT name, id, location, status, hardware_issues, software_issues, recording_status
               FROM cameras`;

  global.sqlConnect.query(sql, (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

app.get('/incident-reports', (req, res) => {
  const sql = `SELECT timestamp, location, type, severity
               FROM incidents
               ORDER BY timestamp DESC
               LIMIT 50`;

  global.sqlConnect.query(sql, (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

app.get('/user-activity-logs', (req, res) => {
  const sql = `SELECT username, action, timestamp
               FROM user_activity_logs
               ORDER BY timestamp DESC
               LIMIT 50`;

  global.sqlConnect.query(sql, (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

app.get('/audit-trails', (req, res) => {
  const sql = `SELECT username, action, timestamp
               FROM audit_trails
               ORDER BY timestamp DESC
               LIMIT 50`;

  global.sqlConnect.query(sql, (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});




// Endpoint for retrieving incident reports
app.get('/incidents', async (req, res) => {
    try {
      const incidents = await db.query('SELECT * FROM incidents');
      res.json(incidents.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Endpoint for retrieving user activity logs
  app.get('/user-activity', async (req, res) => {
    try {
      const activityLogs = await db.query('SELECT * FROM user_activity');
      res.json(activityLogs.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Endpoint for retrieving audit trails
  app.get('/audit-trails', async (req, res) => {
    try {
      const auditTrails = await db.query('SELECT * FROM audit_trails');
      res.json(auditTrails.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Endpoint for retrieving analytics and insights
  app.get('/analytics', async (req, res) => {
    try {
      // Query for getting heat maps
      const heatMaps = await db.query('SELECT * FROM heat_maps');
  
      // Query for getting motion detection data
      const motionDetection = await db.query('SELECT * FROM motion_detection');
  
      // Query for getting facial recognition data
      const facialRecognition = await db.query('SELECT * FROM facial_recognition');
  
      res.json({ heatMaps: heatMaps.rows, motionDetection: motionDetection.rows, facialRecognition: facialRecognition.rows });
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Endpoint for retrieving graphs and charts
  app.get('/graphs', async (req, res) => {
    try {
      // Query for getting uptime chart data
      const uptimeData = await db.query('SELECT * FROM uptime_data');
  
      // Query for getting incident frequency graph data
      const incidentFrequencyData = await db.query('SELECT * FROM incident_frequency_data');
  
      // Query for getting camera usage chart data
      const cameraUsageData = await db.query('SELECT * FROM camera_usage_data');
  
      res.json({ uptimeData: uptimeData.rows, incidentFrequencyData: incidentFrequencyData.rows, cameraUsageData: cameraUsageData.rows });
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Endpoint for updating configuration settings
  app.put('/config', async (req, res) => {
    try {
      // Update camera recording times
      const cameraRecordingTimes = req.body.cameraRecordingTimes;
      await db.query(`UPDATE config SET camera_recording_times = '${JSON.stringify(cameraRecordingTimes)}'`);
  
      // Update motion detection sensitivity
      const motionDetectionSensitivity = req.body.motionDetectionSensitivity;
      await db.query(`UPDATE config SET motion_detection_sensitivity = '${motionDetectionSensitivity}'`);
  
      // Update access control permissions
      const accessControlPermissions = req.body.accessControlPermissions;
      await db.query(`UPDATE config SET access_control_permissions = '${JSON.stringify(accessControlPermissions)}'`);
  
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  });
  









// start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});



















// const express = require('express');
// const app = express();
// const port = 3000;

// // Set up middleware for handling requests
// app.use(express.json()); // Parse incoming JSON data
// app.use(express.static('public')); // Serve static files from the public directory

// // System performance metrics
// app.get('/system-performance', async (req, res) => {
//     try {
//       // Calculate system uptime and response time
//       const uptime = process.uptime();
//       const responseTime = Date.now() - req.createdAt;
      
//       // Get critical performance indicators
//       const cpuUsage = await osu.cpu.usage();
//       const memUsage = await osu.mem.info();
//       const diskUsage = await osu.disk.info();
  
//       // Return system performance data
//       res.json({
//         uptime,
//         responseTime,
//         cpuUsage,
//         memUsage,
//         diskUsage,
//       });
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('Internal Server Error');
//     }
//   });
  
//   // Camera health status
//   app.get('/camera-health', async (req, res) => {
//     try {
//       // Query camera health data from database
//       const cameras = await Camera.find();
      
//       // Return camera health data
//       res.json(cameras);
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('Internal Server Error');
//     }
//   });
  
//   // Incident reports
//   app.get('/incident-reports', async (req, res) => {
//     try {
//       // Query incident reports from database
//       const incidents = await Incident.find();
      
//       // Return incident reports data
//       res.json(incidents);
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('Internal Server Error');
//     }
//   });
  
//   // User activity logs
//   app.get('/user-activity-logs', async (req, res) => {
//     try {
//       // Query user activity logs from database
//       const logs = await Log.find({ type: 'user' });
      
//       // Return user activity logs data
//       res.json(logs);
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('Internal Server Error');
//     }
//   });
  
//   // Audit trails
//   app.get('/audit-trails', async (req, res) => {
//     try {
//       // Query audit trails from database
//       const audits = await Audit.find();
      
//       // Return audit trails data
//       res.json(audits);
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('Internal Server Error');
//     }
//   });
  
//   // Analytics and Insights
//   app.get('/analytics-insights', async (req, res) => {
//     try {
//       // Query analytics and insights data from database
//       const data = await Analytics.find();
      
//       // Return analytics and insights data
//       res.json(data);
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('Internal Server Error');
//     }
//   });
  
//   // Graphs and charts
//   app.get('/graphs-charts', async (req, res) => {
//     try {
//       // Query data for graphs and charts from database
//       const data = await Graphs.find();
      
//       // Return data for graphs and charts
//       res.json(data);
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('Internal Server Error');
//     }
//   });
  
//   // Configuration settings
//   app.put('/configuration-settings', async (req, res) => {
//     try {
//       // Update configuration settings in database
//       const { cameraRecordingTimes, motionDetectionSensitivity, accessControlPermissions } = req.body;
//       await Configuration.updateOne({}, { cameraRecordingTimes, motionDetectionSensitivity, accessControlPermissions });
      
//       // Return success message
//       res.send('Configuration settings updated successfully');
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('Internal Server Error');
//     }
//   });
  






