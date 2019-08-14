const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const multer = require('multer');
const upload = multer({dest: __dirname});
const path = require('path');
const bodyParser = require('body-parser');



// app.use(bodyParser.urlencoded({
//   extended: true
// }));

// app.use(bodyParser.json());
app.use(express.static('client'));

app.post('/', upload.any(), (req, res, next) => {
  console.log(req.body);
  console.log(req.files);
  // console.log(__dirname + req.files[0].filename)
  // res.send(typeof req.files[0].filename);
  
  fs.readFile((req.files[0].filename), 'utf8', (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      let resultsArr = [];
      let parse = JSON.parse(data.slice(0, data.length-1));
      
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
    
      let csvData = resultsArr.join('<br>');

      fs.readFile(__dirname + "/client/index.html", 'utf8', (err, file) => {
        if (err) {
          res.status(500).send(err);
          next();
        } else {
          csvData = `<div>${csvData}</div>`
          let index = file.indexOf('</form>');
          let newData = [file.slice(0, index), csvData, file.slice(index)].join('');
          res.status(200).send(newData);
          next();
        }
      })  
    }
  })
  
  
  // // fs.writeFile('file.csv', csvData, (err) => {
  // //   if (err) {
  // //     res.status(500).send(err);
  // //   } else {
  // //     res.status(200).download('file.csv');
  // //   }
  // // })
  
})



app.listen(port, () => console.log(`Server be listening on port ${port}`));

