const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const path = require('path');


app.use(bodyParser.json());
app.use(express.static('public'));
// Mongo Database
const MongoClient = require('mongodb').MongoClient;

const url ='mongodb://localhost:27017';

const dbName = 'checkout-experience';

MongoClient.connect(url, (err, client) => {
  if (err) {
    console.log(err);
  }
  const db = client.db(dbName);
  
  app.post('/init', (req, res, next) => { 
    let id = req.body.checkout;
    let collectionName = 'checkout' + id;
    let collection = db.collection(collectionName);
    collection.insertOne(req.body, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        next();
      }
    })
      
    })
  

  app.post('/f1', (req, res, next) => {
    let id = req.body.checkout;
    let collectionName = 'checkout' + id;
    let collection = db.collection(collectionName);
    collection.updateOne({checkout: id}, {$set: req.body}, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.send(results);
        next();
      }
    })
    
  })
  
  app.post('/f2', (req, res, next) => {
    let id = req.body.checkout;
    let collectionName = 'checkout' + id;
    let collection = db.collection(collectionName);
    collection.updateOne({checkout: id}, {$set: req.body}, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.send(results);
        next();
      }
    })
    
  })
  
  app.post('/f3', (req, res, next) => {
    let id = req.body.checkout;
    let collectionName = 'checkout' + id;
    let collection = db.collection(collectionName);
    collection.updateOne({checkout: id}, {$set: req.body}, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.send(results);
        next();
      }
    })
    
  })
  
  
  
  
  app.listen(port, () => {console.log(`Ahoy matey, this app be listening to port ${port}`)});
  console.log('Mango connected');
  // client.close();
})







// const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost:27017/checkout-experience");
// var db = mongoose.connection;
// db.on('error', console.log.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('Mango is connected');
// });

// const checkoutSchema = new mongoose.Schema({
//   checkout: Number,
//   name: String,
//   email: String,
//   password: String,
//   address1: String,
//   address2: String,
//   city: String,
//   homestate: String,
//   zipcode: Number,
//   phoneNumber: Number,
//   ccNumber: Number,
//   expDate: Number,
//   cvv: Number,
//   billZip: Number
// })

// var Checkout = mongoose.model("Checkout", checkoutSchema);

