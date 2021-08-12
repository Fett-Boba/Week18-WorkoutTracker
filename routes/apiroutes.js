//const path = require('path');
const Workout = require('../models/Workout.js');
const router = require('express').Router();

// const db = require("../models");
//const { Workout } = require("./models");

// Route for Dashboard
router.get("/api/workouts/range", (req, res) => {
     Workout.aggregate([
          { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
     ]).then(dbWorkout => {
          res.json(dbWorkout);
     }).catch(err => {
          console.log(err);
          res.sendStatus(500);
     })
});

// Route to find the last workout done
router.get("/api/workouts", (req, res) => {
     Workout.aggregate([
          { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
     ]).then(dbWorkout => {
          res.json(dbWorkout);
     }).catch(err => {
          console.log(err);
          res.sendStatus(500);
     })
});

// Route to add new exercise
router.post("/api/workouts", (req, res) => {
     Workout.create(req.body)
          .then((dbWorkout) => {
               res.json(dbWorkout);
          })
          .catch((err) => {
               res.json(err);
          });
});

module.exports = router;
