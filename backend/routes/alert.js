const app = require('express');
const router = app.Router();

function getFormattedDate(date) {
  return new Date(date).toISOString().replace('T', ' ').replace('Z', '').replace('.000','')
  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, '0');
  let day = date.getDate().toString().padStart(2, '0');

  return year + '-' + month + '-' + day;
}

// Define a route for retrieving alerts
router.get('/alerts', (req, res) => {
  const startDate = req.query.startDate;
  const endDate = req.query.endDate;
  let query = `
  SELECT 
    CameraName, 
    AlertID, 
    TimeDate, 
    AlertType, 
    AlertLevel, 
    Location, 
    Status, 
    AlertDescription, 
    ActionTaken, 
    AdditionalDetails 
  FROM alerts;
`;

if(startDate && endDate) {
  console.log("start!@@@#", startDate, endDate);
   query = `
    SELECT 
      CameraName, 
      AlertID, 
      TimeDate, 
      AlertType, 
      AlertLevel, 
      Location, 
      Status, 
      AlertDescription, 
      ActionTaken, 
      AdditionalDetails 
    FROM alerts WHERE TimeDate BETWEEN '${getFormattedDate(new Date(startDate))}' AND '${getFormattedDate(new Date(endDate))}'
  `;
  console.log("@@#$#query", query)
}

  global.sqlConnect.query(query, (error, results) => {
    if (error) {
      console.error('Error retrieving alerts:', error);
      res.status(500).json({ error: 'Unable to retrieve alerts' });
      return;
    }
    res.json(results);
  });
});

// Start the server
// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });

// Define a route for creating a new alert
router.post('/alerts', (req, res) => {
    const { CameraName, AlertType, AlertLevel, Location, AlertDescription, AdditionalDetails } = req.body;
    const query = `
      INSERT INTO alerts 
        (CameraName, AlertType, AlertLevel, Location, AlertDescription, AdditionalDetails) 
      VALUES 
        (?, ?, ?, ?, ?, ?)
    `;
    const values = [CameraName, AlertType, AlertLevel, Location, AlertDescription, AdditionalDetails];
    global.sqlConnect.query(query, values, (error, results) => {
      if (error) {
        console.error('Error creating alert:', error);
        res.status(500).json({ error: 'Unable to create alert' });
        return;
      }
      res.json({ id: results.insertId });
    });
  });
  
  // Define a route for updating an alert
router.put('/alerts/:id', (req, res) => {
    const { CameraName, AlertType, AlertLevel, Location, AlertDescription, AdditionalDetails } = req.body;
    const query = `
      UPDATE alerts 
      SET 
        CameraName = ?, 
        AlertType = ?, 
        AlertLevel = ?, 
        Location = ?, 
        AlertDescription = ?, 
        AdditionalDetails = ?
      WHERE 
        AlertID = ?
    `;
    const values = [CameraName, AlertType, AlertLevel, Location, AlertDescription, AdditionalDetails, req.params.id];
    global.sqlConnect.query(query, values, (error, results) => {
      if (error) {
        console.error('Error updating alert:', error);
        res.status(500).json({ error: 'Unable to update alert' });
        return;
      }
      if (results.affectedRows === 0) {
        res.status(404).json({ error: `Alert with ID ${req.params.id} not found` });
        return;
      }
      res.json({ message: 'Alert updated successfully' });
    });
  });
  


  // Define a route for retrieving a single alert by ID
router.get('/alerts/:id', (req, res) => {
    const query = `
      SELECT * 
      FROM alerts 
      WHERE AlertID = ?
    `;
    const values = [req.params.id];
    global.sqlConnect.query(query, values, (error, results) => {
      if (error) {
        console.error('Error retrieving alert:', error);
        res.status(500).json({ error: 'Unable to retrieve alert' });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ error: `Alert with ID ${req.params.id} not found` });
        return;
      }
      const alert = results[0];
      res.json({
        AlertID: alert.AlertID,
        CameraName: alert.CameraName,
        TimeDate: alert.TimeDate,
        AlertType: alert.AlertType,
        AlertLevel: alert.AlertLevel,
        Location: alert.Location,
        Status: alert.Status,
        AlertDescription: alert.AlertDescription,
        ActionTaken: alert.ActionTaken,
        AdditionalDetails: alert.AdditionalDetails,
      });
    });
  });


  
  // Define a route for deleting an alert by ID
router.delete('/alerts/:id', (req, res) => {
    const query = `
      DELETE FROM alerts 
      WHERE AlertID = ?
    `;
    const values = [req.params.id];
    global.sqlConnect.query(query, values, (error, results) => {
      if (error) {
        console.error('Error deleting alert:', error);
        res.status(500).json({ error: 'Unable to delete alert' });
        return;
      }
      if (results.affectedRows === 0) {
        res.status(404).json({ error: `Alert with ID ${req.params.id} not found` });
        return;
      }
      res.json({ message: 'Alert deleted successfully' });
    });
  });
  
module.exports = router
