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
    required: false,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: false,
  },
  birthday: {
    type: String,
    required: false,
  },
  occupation: {
    type: String,
    required: false,
  },
  partner: {
    type: Boolean,
    required: false,
  },

  partnerName: {
    type: String,
    required: false,
  },

  children: {
    type: Boolean,
    required: false,
  },

  childrenName: {
    type: String,
    required: false,
  },

  childBirthday: {
    type: String,
    required: false,
  },

  pets: {
    type: String,
    required: false,
  },

  petName: {
    type: String,
    required: false,
  },

  interestHobbies: {
    type: String,
    required: false,
  },
  importantDates: {
    type: String,
    required: false,
  },
  giftIdeas: {
    type: String,
    required: false,
  },

  metAt: {
    type: String,
    required: false,
  },

  notes: {
    type: Schema.Types.ObjectId,
    ref: "Notes",
  },

  reminders: {
    type: Schema.Types.ObjectId,
    ref: "Reminders",
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});
