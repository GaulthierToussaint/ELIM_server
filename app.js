const express = require('express');
const mongoose = require('mongoose');
const app = express();
const RandomForestClassifier = require('random-forest-classifier').RandomForestClassifier;

import Activity from './models/activity.model.ts';
import bodyParser from 'body-parser';

const db = mongoose.connect('mongodb://localhost:27017/local');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  Activity.findOne({}, (err, activities) => {
    res.json(activities);
  });
})

app.post('/', function(req, res) {
    let activity = new Activity(req.body);
    activity.save();
    res.status(201).send(activity);
})

app.listen(3000, function () {
  console.log('ELIM_serve listening on port 3000!');
})