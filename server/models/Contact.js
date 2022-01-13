const { Schema, model } = require("mongoose");

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  relationship: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  birthday: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  married: {
    type: Schema.Types.ObjectId,
    ref: "Married",
  },
  children: {
    type: Schema.Types.ObjectId,
    ref: "Children",
  },
  pets: {
    type: Schema.Types.ObjectId,
    ref: "Pet",
  },
  interestHobbies: {
    type: String,
    required: true,
  },
  importantDates: {
    type: String,
    required: true,
  },
  giftIdeas: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
});
