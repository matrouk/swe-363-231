const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

router.get('/details', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'details.html'));
});

router.get('/compare', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'compare.html'));
});

router.get('/advTable', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'advTable.html'));
});

router.get('/interact', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'interact.html'));
});


module.exports = router;
