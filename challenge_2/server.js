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
  
  function makeCSV(jsonObj) {
    let personArr = [];
    for (let key in jsonObj) {
      if (key !== "children") {
        personArr.push(jsonObj[key]);
      } else if (key === 'children') {
        resultsArr.push(personArr.join(','));
        if (jsonObj[key].length !== 0) {
          jsonObj[key].forEach((child) => {
            makeCSV(child);
          })
        }
      }
    }
  }
  
  makeCSV(parse);
  
  let firstRow = Object.keys(parse);
  firstRow = firstRow.slice(0, firstRow.length - 1);
  resultsArr.unshift(firstRow.join(','));

  let csvData = resultsArr.join('\n');
  
  fs.writeFile('file.csv', csvData, (err) => {
    if (err) {
      console.log(err);
    }
  })


  res.status(200).send(csvData);
})



app.listen(port, () => console.log(`Server be listening on port ${port}`));

