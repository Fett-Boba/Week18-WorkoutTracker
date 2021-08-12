const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
     myString: {
          type: String,
          trim: true,
          required: "String is Required",
     },

     myNumber: {
          type: Number,
          unique: true,
          required: true,
     },

     email: {
          type: String,
          match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
     },

     myBoolean: Boolean,

     myArray: Array,

     myDate: {
          type: Date,
          default: Date.now,
     },

     myLongstring: {
          type: String,
          validate: [({ length }) => length >= 6, "Longstring should be longer."],
     },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
