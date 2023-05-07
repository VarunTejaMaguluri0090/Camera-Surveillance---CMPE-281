const express = require('express');
const router = express.Router();
const con = require('../../pool');

// Get all camera footage entries
router.get('/', (req, res) => {
  let sql = 'SELECT * FROM alerts';
  con.query(sql, (err, results) => {
    if(err) throw err;
    res.send(results);
  });
});

// Get a single camera footage entry
router.get('/:id', (req, res) => {
  let sql = `SELECT * FROM alerts WHERE AlertID = ${req.params.AlertID}`;
  con.query(sql, (err, result) => {
    if(err) throw err;
    res.send(result);
  });
});

// Create a camera footage entry
router.post('/', (req, res) => {
  let entry = {
    CameraName : req.body. CameraName ,
    TimeDate: req.body.TimeDate,
    AlertID: req.body.AlertID,
    AlertType: req.body.AlertType,
    AlertLevel: req.body.AlertLevel,
    Location: req.body.Location,
    Status : req.body.Status,
    AlertDescription: req.body.AlertDescription,
    ActionTaken: req.body.ActionTaken,
    AdditionalDetails: req.body.AdditionalDetails,
    X: req.body.X,
    Y: req.body.Y
  };
  let sql = 'INSERT INTO Alerts SET ?';
  con.query(sql, entry, (err, result) => {
    if(err) throw err;
    res.send('Camera footage entry created...');
  });
});

// Update a camera footage entry
// router.put('/:id', (req, res) => {
//   let sql = `UPDATE Alerts SET 
//             CameraName = '${req.body.CameraName}',
//               camera_stream_link = '${req.body.camera_stream_link}'
//               WHERE camera_id = ${req.params.id}`;
//   con.query(sql, (err, result) => {
//     if(err) throw err;
//     res.send('Camera footage entry updated...');
//   });
// });

// Delete a camera footage entry
router.delete('/:id', (req, res) => {
  let sql = `DELETE FROM Camera_Footage WHERE AlertID = ${req.params.AlertID}`;
  con.query(sql, (err, result) => {
    if(err) throw err;
    res.send('Camera footage entry deleted...');
  });
});

module.exports = router;
