const express = require('express');
const mongoose = require('mongoose');
const app = express();
const RandomForestClassifier = require('random-forest-classifier').RandomForestClassifier;

import Activities from './models/activity.model.ts';

const db = mongoose.connect('mongodb://localhost:27017/local');

app.get('/', function (req, res) {
  Activities.findOne({}, (err, activities) => {
    res.json(activities);
  });
})

app.post('/', function(req, res) {
    res.send('post data ok ');
})

app.listen(3000, function () {
  console.log('ELIM_serve listening on port 3000!');
})