const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(express.static('client'));

app.post('/', (req, res) => {
  let resultsArr = [];
  let bodyContent = req.body.content;
  let parse = JSON.parse(bodyContent.slice(0, bodyContent.length-1));
  let firstRow = Object.keys(parse);
  resultsArr.push(firstRow.join(','));

  function makeCSV(jsonObj) {
    for (let key in jsonObj) {
      
    }
  }


  res.status(200).send(firstRow);
})



app.listen(port, () => console.log(`Server be listening on port ${port}`));

