var express = require('express');
var router = express.Router();
const con = require('../../pool');

// Get all profiles
router.get('/', function(req, res, next) {
  con.query('SELECT * FROM ManageProfile', function (err, results) {
    if (err) throw err;
    res.send(results);
  });
});

// Get a single profile
router.get('/:id', function(req, res, next) {
  con.query('SELECT * FROM ManageProfile WHERE id = ?', [req.params.id], function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

// Create a profile
router.post('/', function(req, res, next) {
  let profile = {
    name: req.body.name,
    age: req.body.age,
    persona: req.body.persona
  };
  con.query('INSERT INTO ManageProfile SET ?', profile, function (err, result) {
    if (err) throw err;
    res.send('Profile created...');
  });
});

// Update a profile
router.put('/:id', function(req, res, next) {
  let profile = {
    name: req.body.name,
    age: req.body.age,
    persona: req.body.persona
  };
  con.query('UPDATE ManageProfile SET ? WHERE id = ?', [profile, req.params.id], function (err, result) {
    if (err) throw err;
    res.send('Profile updated...');
  });
});

// Delete a profile
router.delete('/:id', function(req, res, next) {
  con.query('DELETE FROM ManageProfile WHERE id = ?', [req.params.id], function (err, result) {
    if (err) throw err;
    res.send('Profile deleted...');
  });
});

module.exports = router;
