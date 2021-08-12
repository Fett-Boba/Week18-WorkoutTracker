const path = require('path');
const router = require('express').Router();

const db = require("../models");
//const { Workout } = require("./models");


router.get("/api/workouts/range", (req, res) => {
     db.Workout.find({}, (err, data) => {
          if (err) {
               console.log(err);
               res.sendStatus(500);
          } else {
               res.json(data);
          }
     });
});


module.exports = router;
