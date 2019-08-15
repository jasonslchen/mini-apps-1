const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/checkout/f1', (req, res, next) => {
  res.send('hello f1');
  next();
})

app.post('/checkout/f2', (req, res, next) => {
  res.send('hello f2');
  next();
})

app.post('/checkout/f3', (req, res, next) => {
  res.send('hello f3');
  next();
})



app.listen(port, () => {console.log(`Ahoy matey, this app be listening to port ${port}`)});