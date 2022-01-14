const { User, Contact, Notes, Reminder } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({}).populate("contacts", "reminders");
    },
    contacts: async () => {
      return await Contact.find({}).populate("notes", "reminders", "user");
    },
    notes: async () => {
      return await Notes.find({}).populate("contacts");
    },
    reminders: async () => {
      return await Reminder.find({}).populate("users", "contacts");
    },
  },
};

module.exports = resolvers;
