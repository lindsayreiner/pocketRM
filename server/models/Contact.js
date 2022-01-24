const { Schema, model } = require("mongoose");

//const noteSchema = require("./Notes");
//const userSchema = require("./User");
//const reminderSchema = require("./Reminder");

const contactSchema = new Schema({
  firstName: {
    type: String,
    required: false,
    trim: true,
  },
  lastName: {
    type: String,
    required: false,
    trim: true,
  },
  relationship: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  hometown: {
    type: String,
    required: false
  },
  birthday: {
    type: String,
    required: false,
  },
  occupation: {
    type: String,
    required: false,
  },
  company: {
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
  anniversary: {
    type: String,
    required: false,
  },
  children: {
    type: Boolean,
    required: false,
  },

  childName: {
    type: String,
    required: false,
  },

  childBirthday: {
    type: String,
    required: false,
  },

  pets: {
    type: Boolean,
    required: false,
  },

  petName: {
    type: String,
    required: false,
  },

  interestsHobbies: {
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
  notes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Note'
    }
  ],
  reminders: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Reminder'
    }
  ]
});

const Contact = model("Contact", contactSchema);

module.exports = Contact;
