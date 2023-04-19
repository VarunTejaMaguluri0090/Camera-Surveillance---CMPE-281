var app = require('express');
const con = require('../../pool');
const router = app.Router();

// Get all maintenance entries
router.get('/', (req, res) => {
  let sql = 'SELECT * FROM maintenance';
  con.query(sql, (err, results) => {
    if(err) throw err;
    res.send(results);
  });
});

// Get a single maintenance entry
router.get('/:id', (req, res) => {
  let sql = `SELECT * FROM maintenance WHERE id = ${req.params.id}`;
  con.query(sql, (err, result) => {
    if(err) throw err;
    res.send(result);
  });
});

// Create a maintenance entry
router.post('/', (req, res) => {
  let entry = {
    date: req.body.date,
    reason: req.body.reason,
    status: req.body.status,
    location: req.body.location
  };
  let sql = 'INSERT INTO maintenance SET ?';
  con.query(sql, entry, (err, result) => {
    if(err) throw err;
    res.send('Maintenance entry created...');
  });
});

// Update a maintenance entry
router.put('/:id', (req, res) => {
  let sql = `UPDATE maintenance SET 
              date = '${req.body.date}',
              reason = '${req.body.reason}',
              status = '${req.body.status}',
              location = '${req.body.location}'
              WHERE id = ${req.params.id}`;
  con.query(sql, (err, result) => {
    if(err) throw err;
    res.send('Maintenance entry updated...');
  });
});

// Delete a maintenance entry
router.delete('/:id', (req, res) => {
  let sql = `DELETE FROM maintenance WHERE id = ${req.params.id}`;
  con.query(sql, (err, result) => {
    if(err) throw err;
    res.send('Maintenance entry deleted...');
  });
});
  

module.exports = router