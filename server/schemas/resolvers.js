const { User, Contact, Notes, Reminder } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({});
    },
    user: async (parent, args) => {
      console.log(args.id);
      return User.findOne({ _id: args.id }).populate("contacts");
    },
    notes: async (parent, args) => {
      return Contact.find(args.id).populate("notes");
    },
    remindersContact: async (parent, args) => {
      return Contact.find(args.id).populate("reminders");
    },
    remindersUser: async (parent, args) => {
      return User.find(args.id).populate("reminders");
    },
  },
  Mutation: {
    addUser: async (parent, { firstName, lastName, email, password }) => {
      const user = await User.create({ firstName, lastName, email, password });
      const token = signToken(user);
      return user;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
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
      console.log(args); // { id: "61e75985920d77064a3ff74a" }
      try {
        const newContact = await Contact.create({
          firstName: args.contactInput.firstName,
          lastName: args.contactInput.lastName,
          relationship: args.contactInput.relationship,
          phone: args.contactInput.phone,
          metAt: args.contactInput.metAt,
        });
        const addToUserContact = await User.findOneAndUpdate(
          { _id: args.id },
          { $addToSet: { contacts: newContact._id } },
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
};

module.exports = resolvers;
