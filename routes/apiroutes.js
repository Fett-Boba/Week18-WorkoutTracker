const Workout = require('../models/Workout.js');
const router = require('express').Router();

// Route for Dashboard - only display 7 days
router.get("/api/workouts/range", (req, res) => {
     Workout.aggregate([
          { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
     ])
          // .sort({ $natural: -1 }).limit(7)
          .sort({ day: -1 }).limit(7)
          .then(dbWorkout => {
               res.json(dbWorkout);
          }).catch(err => {
               console.log(err);
               res.sendStatus(500);
          })
});

// Route to find the last workout stats
router.get("/api/workouts", (req, res) => {
     Workout.aggregate([
          { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
     ])
          .sort({ day: -1 }).limit(1)
          .then(dbWorkout => {
               res.json(dbWorkout);
          }).catch(err => {
               console.log(err);
               res.sendStatus(500);
          })
});

// Route to add a new workout
router.post("/api/workouts", (req, res) => {
     Workout.create({})
          .then((dbWorkout) => {
               res.json(dbWorkout);
          })
          .catch((err) => {
               res.json(err);
          });
});

// Route to add an exercise to existing workout
router.put("/api/workouts/:id", (req, res) => {
     Workout.updateOne(
          { _id: req.params.id },
          { $push: { exercises: req.body } },
          (err, dbWorkout) => {
               if (err) {
                    console.log(err);
                    res.send(err);
               } else {
                    console.log(dbWorkout);
                    res.send(dbWorkout);
               }
          }
     );
});

module.exports = router;
