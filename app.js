import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/login', (req, res) => {
  res.send();
});

app.get('/authenticate', (req, res) => {
  ;
});

app.get('/signup', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});