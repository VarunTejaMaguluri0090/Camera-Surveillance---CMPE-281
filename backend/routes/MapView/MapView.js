const express = require('express');
const router = express.Router();
const con = require('../../pool');

// Get all map view entries
router.get('/', (req, res) => {
  let sql = 'SELECT * FROM Map_View';
  con.query(sql, (err, results) => {
    if(err) throw err;
    res.send(results);
  });
});

// Get a single map view entry
router.get('/:id', (req, res) => {
  let sql = `SELECT * FROM Map_View WHERE camera_id = ${req.params.id}`;
  con.query(sql, (err, result) => {
    if(err) throw err;
    res.send(result);
  });
});

// Create a map view entry
router.post('/', (req, res) => {
  let entry = {
    camera_id: req.body.camera_id,
    camera_number: req.body.camera_number,
    map_lat_location: req.body.map_lat_location,
    map_long_location: req.body.map_long_location
  };
  let sql = 'INSERT INTO Map_View SET ?';
  con.query(sql, entry, (err, result) => {
    if(err) throw err;
    res.send('Map view entry created...');
  });
});

// Update a map view entry
router.put('/:id', (req, res) => {
  let sql = `UPDATE Map_View SET 
              camera_number = '${req.body.camera_number}',
              map_lat_location = '${req.body.map_lat_location}',
              map_long_location = '${req.body.map_long_location}'
              WHERE camera_id = ${req.params.id}`;
  con.query(sql, (err, result) => {
    if(err) throw err;
    res.send('Map view entry updated...');
  });
});

// Delete a map view entry
router.delete('/:id', (req, res) => {
  let sql = `DELETE FROM Map_View WHERE camera_id = ${req.params.id}`;
  con.query(sql, (err, result) => {
    if(err) throw err;
    res.send('Map view entry deleted...');
  });
});

module.exports = router;
