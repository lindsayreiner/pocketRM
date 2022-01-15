const { Schema, model } = require("mongoose");
const dateFormat = require('../utils/dateFormat');

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
      // assign a different type
      type: Number,
      required: true,
      },
    user: {
        type: Schema.Types.ObjectId,
        ref: "Contact",
      },
    contact: {
      type: Schema.Types.ObjectId,
      ref: "Contact",
    },
  });
  
const Reminder = model('Reminder', reminderSchema);

module.exports = Reminder;