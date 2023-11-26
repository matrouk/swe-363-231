const express = require('express');
const app = express();
const path = require('path');


app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/details', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'details.html'));
});

app.get('/compare', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'compare.html'));
});

app.get('/advTable', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'advTable.html'));
});

app.get('/interact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'interact.html'));
});

app.get('/Building businessAR', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Building businessAR.html'));
});

app.get('/TicTacToe', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'TicTacToe.html'));
});

app.get('/Canvas2D', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Canvas2D.html'));
});

app.get('/Canvas3D', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Canvas3D.html'));
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});