const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/home', (req, res) => {
  res.send('Hello Home!');
});

app.get('/admin', (req, res) => {
  res.send('Hello Admin!');
});

app.get('/profile', (req, res) => {
  res.send('Hello Profile!');
});

app.get('/contact', (req, res) => {
  res.send('Hello Contact!');
});

app.get('/about', (req, res) => {
  res.send('Hello About!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});