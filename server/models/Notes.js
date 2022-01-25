const { Schema, model } = require("mongoose");
const dateFormat = require('../utils/dateFormat');

const noteSchema = new Schema({
  note: {
    type: String,
    required: false,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  contact: {
    type: Schema.Types.ObjectId,
    ref: 'Contact'
  }
});

const Note = model('Note', noteSchema);

module.exports = Note;