const path = require('path');
const router = require('express').Router();

const db = require("../models");
//const { Workout } = require("./models");

// Route for Workout Dashboard
router.get("/api/workouts/range", (req, res) => {
     db.Workout.find({}, (err, data) => {
          if (err) {
               console.log(err);
               res.sendStatus(500);
          } else {
               res.json(data);
          }
     }).sort({ $natural: -1 }).limit(7);
});

// Route to find the last workout done
router.get("/api/workouts", (req, res) => {
     db.Workout.find({}, (err, data) => {
          if (err) {
               console.log(err);
               res.sendStatus(500);
          } else {
               res.json(data);
          }
     }).sort({ $natural: -1 }).limit(1);
});


module.exports = router;
