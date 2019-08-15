const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/', (req, res, next) => {
  res.send(req.body);
  next();
})

app.post('/', (req, res, next) => {
  res.send('hello f2');
  next();
})

app.post('/', (req, res, next) => {
  res.send('hello f3');
  next();
})



app.listen(port, () => {console.log(`Ahoy matey, this app be listening to port ${port}`)});