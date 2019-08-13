const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(express.static('client'));

app.post('/', (req, res) => {
  console.log(req.body);
  res.status(200).send(req.body);
})



app.listen(port, () => console.log(`Server be listening on port ${port}`));

