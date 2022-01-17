const { User, Contact, Notes, Reminder } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({});
    },
    contacts: async (parent, {userId}) => {
      return Contact.find({_id: userId}).populate('contacts')
    },
    notes: async (parent, {contactId}) => {
     return Notes.find({_id: contactId}).populate("notes");
    },
    reminders: async (parent, {contactId}) => {
     return Reminder.find({_id: contactId}).populate("reminders");
    },

  Mutation: {
      addUser: async (parent, { firstName, lastName, email, password }) => {
        const user = await User.create({ firstName, lastName, email, password });
        const token = signToken(user);
        return { token, user };
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({email});
        if (!user) {
          throw new AuthenticationError("Incorrect email or password!");
        }
        const correctPassword = user.isCorrectPassword(password);
        if (!correctPassword) {
          throw new AuthenticationError("Wrong signon credentials");
        }
        const token = signToken(user);
        return { token, user };
      },
      addContact: async (parent, args) => {
        try {
          const addToUserContact = await User.findOneAndUpdate(
            { _id },
            { $addToSet: { contacts: args } },
            { new: true, runValidators: true }
          );
          return addToUserContact;
        } catch (e) {
          return `Unable to save contacts due to error: ${e}`;
        }
      },
      deleteContact: async (parent, args, context) => {
        try {
          const removeFromUserContact = await User.findOneAndUpdate(
            { _id: context.contact._id },
            { $pull: { contacts: { _id: args._id } } },
            { new: true, runValidators: true }
          );
          return removeFromUserContact;
        } catch (e) {
          return `Unable to delete contact due to error: ${e}`;
        }
      },
    },
  },
};

module.exports = resolvers;
