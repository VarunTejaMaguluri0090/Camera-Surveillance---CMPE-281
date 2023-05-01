const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();
const pool = require('../pool');
const { v4:uuidv4 } = require('uuid');




// User registration
router.post('/signup', (req, res) => {
  const { username, password, email } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Please provide a username and password' });
  }
  // Check if username is already taken
  pool.query('SELECT * FROM users WHERE username = ?', [username], (error, results) => {
    if (error) {
      console.error('Error executing query', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
    if (results.length > 0) {
      return res.status(409).json({ message: 'Username already taken' });
    }
    // Hash password and store user in database
    bcrypt.hash(password, 10, (error, hashedPassword) => {
      if (error) {
        console.error('Error hashing password', error);
        return res.status(500).json({ message: 'Internal server error' });
      }
      const userId = uuidv4();
      pool.query('INSERT INTO users (_id, username, password, email) VALUES (?, ?, ?, ?)', [userId, username, hashedPassword, email], (error) => {
        if (error) {
          console.error('Error executing query', error);
          return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(400).json({ message: 'User registered successfully' });
      });
    });
  });
});

// User login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Please provide a username and password' });
  }
  // Check if user exists in database
  pool.query('SELECT * FROM users WHERE username = ?', [username], (error, results) => {
    if (error) {
      console.error('Error executing query', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    // Compare password hash with entered password
    bcrypt.compare(password, results[0].password, (error, isMatch) => {
      if (error) {
        console.error('Error comparing password hashes', error);
        return res.status(500).json({ message: 'Internal server error' });
      }
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
      // Generate JWT token
      const token = jwt.sign({ username }, 'mysecretkey');
      return res.status(200).json({ token, isAdmin: results[0].isAdmin });
    });
  });
});

module.exports = router;
