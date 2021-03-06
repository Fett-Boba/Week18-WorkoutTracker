const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGDB_URI || "mongodb://localhost/workout", {
     useNewUrlParser: true,
     useFindAndModify: false,
     useUnifiedTopology: true,
     useCreateIndex: true,
});

// HTML Routes
app.use(require("./routes/homeroutes.js"));

// API Routes
app.use(require("./routes/apiroutes.js"));

app.listen(PORT, () => {
     console.log(`App running on port ${PORT}!`);
});
