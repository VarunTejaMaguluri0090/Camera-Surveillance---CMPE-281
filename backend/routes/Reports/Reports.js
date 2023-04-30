const express = require('express');
const router = express.Router();
const con = require('../../pool');

// Get all reports
router.get('/', (req, res) => {
  let sql = 'SELECT * FROM Reports';
  con.query(sql, (err, results) => {
    if(err) throw err;
    res.send(results);
  });
});

// Get a single report by camera_id
router.get('/:id', (req, res) => {
  let sql = `SELECT * FROM Reports WHERE camera_id = ${req.params.id}`;
  con.query(sql, (err, result) => {
    if(err) throw err;
    res.send(result);
  });
});

// Create a new report
router.post('/', (req, res) => {
  let report = {
    camera_id: req.body.camera_id,
    camera_number: req.body.camera_number,
    from_date: req.body.from_date,
    to_date: req.body.to_date,
    report_type: req.body.report_type,
    report_analysis_info: req.body.report_analysis_info
  };
  let sql = 'INSERT INTO Reports SET ?';
  con.query(sql, report, (err, result) => {
    if(err) throw err;
    res.send('New report created...');
  });
});

// Update an existing report
router.put('/:id', (req, res) => {
  let sql = `UPDATE Reports SET 
              camera_number = '${req.body.camera_number}',
              from_date = '${req.body.from_date}',
              to_date = '${req.body.to_date}',
              report_type = '${req.body.report_type}',
              report_analysis_info = '${req.body.report_analysis_info}'
              WHERE camera_id = ${req.params.id}`;
  con.query(sql, (err, result) => {
    if(err) throw err;
    res.send('Report updated...');
  });
});

// Delete a report by camera_id
router.delete('/:id', (req, res) => {
  let sql = `DELETE FROM Reports WHERE camera_id = ${req.params.id}`;
  con.query(sql, (err, result) => {
    if(err) throw err;
    res.send('Report deleted...');
  });
});

module.exports = router;
