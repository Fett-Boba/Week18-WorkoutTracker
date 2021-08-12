const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useCreateIndex: true,
});

// Routes here ?

// /api/workouts  (put, post)
// /api/workouts/range (get)

// /exercise/:id  (from exercise)

// /stats  (from exercise)
// / 



// HTML Routes
app.get("/", (req, res) => {
     res.sendFile(path.join(__dirname, "/public/index.html"));
});
app.get("/stats", (req, res) => {
     res.sendFile(path.join(__dirname, "/public/stats.html"));
});


// API Routes
app.get("/api/workouts/range", (req, res) => {
     db.Workout.find({}, (err, data) => {
          if (err) {
               console.log(err);
               res.sendStatus(500);
          } else {
               res.json(data);
          }
     });
});




app.listen(PORT, () => {
     console.log(`App running on port ${PORT}!`);
});
