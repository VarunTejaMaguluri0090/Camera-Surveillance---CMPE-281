var express = require('express');
var router = express.Router();
const con = require('../../pool');

// Get all camera info entries
router.get('/', function(req, res, next) {
  let sql = 'SELECT * FROM Camera_Info';
  con.query(sql, (err, results) => {
    if(err) throw err;
    res.send(results);
  });
});

// Get a single camera info entry
router.get('/:id', function(req, res, next) {
  let sql = `SELECT * FROM Camera_Info WHERE camera_id = ${req.params.id}`;
  con.query(sql, (err, result) => {
    if(err) throw err;
    res.send(result);
  });
});

// Create a camera info entry
router.post('/', function(req, res, next) {
  let entry = {
    camera_id: req.body.camera_id,
    camera_number: req.body.camera_number,
    camera_location: req.body.camera_location,
    camera_status: req.body.camera_status,
    action: req.body.action
  };
  let sql = 'INSERT INTO Camera_Info SET ?';
  con.query(sql, entry, (err, result) => {
    if(err) throw err;
    res.send('Camera info entry created...');
  });
});

// Update a camera info entry
router.put('/:id', function(req, res, next) {
  let sql = `UPDATE Camera_Info SET 
              camera_number = '${req.body.camera_number}',
              camera_location = '${req.body.camera_location}',
              camera_status = '${req.body.camera_status}',
              action = '${req.body.action}'
              WHERE camera_id = ${req.params.id}`;
  con.query(sql, (err, result) => {
    if(err) throw err;
    res.send('Camera info entry updated...');
  });
});

// Delete a camera info entry
router.delete('/:id', function(req, res, next) {
  let sql = `DELETE FROM Camera_Info WHERE camera_id = ${req.params.id}`;
  con.query(sql, (err, result) => {
    if(err) throw err;
    res.send('Camera info entry deleted...');
  });
});

module.exports = router;
