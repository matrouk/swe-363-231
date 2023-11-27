const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/Building businessAR', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'Building businessAR.html'));
});

router.get('/TicTacToe', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'TicTacToe.html'));
});

router.get('/Canvas2D', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'Canvas2D.html'));
});

router.get('/Canvas3D', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'Canvas3D.html'));
});


module.exports = router;
