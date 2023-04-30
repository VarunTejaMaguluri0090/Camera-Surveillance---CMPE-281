const express = require('express');
const router = express.Router();
const con = require('../../pool');

// Get all camera footage entries
router.get('/', (req, res) => {
  let sql = 'SELECT * FROM Camera_Footage';
  con.query(sql, (err, results) => {
    if(err) throw err;
    res.send(results);
  });
});

// Get a single camera footage entry
router.get('/:id', (req, res) => {
  let sql = `SELECT * FROM Camera_Footage WHERE camera_id = ${req.params.id}`;
  con.query(sql, (err, result) => {
    if(err) throw err;
    res.send(result);
  });
});

// Create a camera footage entry
router.post('/', (req, res) => {
  let entry = {
    camera_id: req.body.camera_id,
    camera_number: req.body.camera_number,
    camera_stream_link: req.body.camera_stream_link
  };
  let sql = 'INSERT INTO Camera_Footage SET ?';
  con.query(sql, entry, (err, result) => {
    if(err) throw err;
    res.send('Camera footage entry created...');
  });
});

// Update a camera footage entry
router.put('/:id', (req, res) => {
  let sql = `UPDATE Camera_Footage SET 
              camera_number = '${req.body.camera_number}',
              camera_stream_link = '${req.body.camera_stream_link}'
              WHERE camera_id = ${req.params.id}`;
  con.query(sql, (err, result) => {
    if(err) throw err;
    res.send('Camera footage entry updated...');
  });
});

// Delete a camera footage entry
router.delete('/:id', (req, res) => {
  let sql = `DELETE FROM Camera_Footage WHERE camera_id = ${req.params.id}`;
  con.query(sql, (err, result) => {
    if(err) throw err;
    res.send('Camera footage entry deleted...');
  });
});

module.exports = router;
