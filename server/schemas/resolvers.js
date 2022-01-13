const { User, Contact, Calendar, Reminder } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({}).populate("contacts");
    },
    contacts: async () => {
      return await Contact.find({}).populate("married", "children", "pets");
    },
    calendar: async () => {
      return await Calendar.find({});
    },
    reminder: async () => {
      return await Reminder.find({});
    },
  },
};

module.exports = resolvers;
