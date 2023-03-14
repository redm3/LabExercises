const express = require('express');
const app1 = express();
const app2 = express();

app1.get('/', (req, res) => {
  res.send('Hello from App 1!');
});

app2.get('/', (req, res) => {
  res.send('Hello from App 2!');
});

app1.listen(3000, () => {
  console.log('App 1 listening on port 3000');
});

app2.listen(4000, () => {
  console.log('App 2 listening on port 4000');
});