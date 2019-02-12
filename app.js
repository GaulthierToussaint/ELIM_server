const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;

const mongo_uri = 'mongodb+srv://adminELIM:adminELIM!@elim-j4r5u.mongodb.net/test?retryWrites=true';

app.get('/', (req, res) => {
  MongoClient.connect(mongo_uri, { useNewUrlParser: true })
  .then(client => {
    const db = client.db('Machine_learning');
    const collection = db.collection('learning');
    collection.find({}).toArray().then(response => res.status(200).json(response)).catch(error => console.error(error));
  });
});

app.post('/', function(req, res) {
    let activity = new Activity(req.body);
    activity.save();
    res.status(201).send(activity);
})

app.listen(3000, function () {
  console.log('ELIM_serve listening on port 3000!');
})