const { Schema, model } = require("mongoose");
const dateFormat = require('../utils/dateFormat');

const noteSchema = new Schema({
    notes: {
      type: String,
      required: false,
      trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
  });
  
const Notes = model('Notes', noteSchema);

module.exports = Notes;