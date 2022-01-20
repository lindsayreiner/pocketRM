const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const reminderSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    get: (timestamp) => dateFormat(timestamp),
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
});

const Reminder = model("Reminder", reminderSchema);

module.exports = Reminder;
