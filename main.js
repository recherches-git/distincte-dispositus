const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/404', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/404.html'));
});

app.listen(PORT, () => {
  console.log(`Locally available on PORT:3000 for dev.`);
});

