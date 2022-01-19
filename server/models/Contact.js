const { Schema, model } = require("mongoose");

//const noteSchema = require("./Notes");
//const userSchema = require("./User");
//const reminderSchema = require("./Reminder");

const contactSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  relationship: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  phone: {
    type: String,
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
    type: Boolean,
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
    required: true,
  },

  // notes: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Notes",
  // },

  // reminders: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Reminder",
  // },

  //savedNotes: [noteSchema],
  //savedReminders: [reminderSchema]
});

const Contact = model("Contact", contactSchema);

module.exports = Contact;
