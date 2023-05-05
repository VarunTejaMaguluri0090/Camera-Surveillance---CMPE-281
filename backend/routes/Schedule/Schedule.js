const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const pool = require('../../pool');


// Get all schedules
router.get('/', (req, res) => {
  pool.query('SELECT * FROM Schedule', (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    return res.json(results);
  });
});

// Get a single schedule by ID
router.get('/:id', (req, res) => {
  const id = req.params.id;
  pool.query('SELECT * FROM Schedule WHERE id = ?', [id], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    return res.json(results[0]);
  });
});

// Create a new schedule
router.post('/', (req, res) => {
  const { camera_number, schedule_date, status } = req.body;
  if (!camera_number || !schedule_date || !status) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const values = [camera_number, schedule_date, status];
  pool.query('INSERT INTO Schedule (camera_number, schedule_date, status) VALUES (?, ?, ?)', values, (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    return res.json({ message: 'Schedule created successfully' });
  });
});

// Update an existing schedule
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const { camera_number, schedule_date, status } = req.body;
  if (!camera_number || !schedule_date || !status) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const values = [camera_number, schedule_date, status, id];
  pool.query('UPDATE Schedule SET camera_number = ?, schedule_date = ?, status = ? WHERE id = ?', values, (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    return res.json({ message: 'Schedule updated successfully' });
  });
});

// Delete a schedule by ID
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  pool.query('DELETE FROM Schedule WHERE id = ?', [id], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    return res.json({ message: 'Schedule deleted successfully' });
  });
});

module.exports = router;
