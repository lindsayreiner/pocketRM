const { User, Contact, Notes, Reminder } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {

    //find one User
    user: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("contacts");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    //find all contacts for one User
    contacts: async (parent, args) => {
      console.log(args.id);
      return User.findOne({ _id: args.id }).populate("contacts");
    },
    //NEW find one Contact and include reminders and notes
    //can also try findById({args.id})
    contact: async (args) => {
      return Contact.findOne({ _id: args.id })
        .populate("reminders", "notes")
    },

    //find the notes for a specific Contact
    contact: async (parent, args) => {
      return Contact.findOne({ _id: args.id }).populate("notes");
    },

    //find reminders for a specific Contact
    remindersContact: async (parent, args) => {
      return Contact.find(args.id).populate("reminders");
    },

    //find reminders for a specific User?
    remindersUser: async (parent, args) => {
      return User.find(args.id).populate("reminders");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      console.log(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email }).populate("contacts");
      console.log(contacts)
      if (!user) {
        throw new AuthenticationError("Incorrect email or password!");
      }
      const correctPassword = user.isCorrectPassword(password);
      if (!correctPassword) {
        throw new AuthenticationError("Wrong signon credentials");
      }
      if (false) {
        const now = new Date();
        const twoWeeksFromNow = moment().add(2, "weeks");

        //For dashboard:
        const upcomingBirthdays = user.contacts.filter((contact) =>
          moment(contact.birthday).isBetween(now, twoWeeksFromNow)
        );
        user.birthdays = upcomingBirthdays;

        const upcomingAnniversaries = user.contacts.filter((contact) =>
          moment(contact.anniversary).isBetween(now, twoWeeksFromNow)
        );
        user.anniversary = upcomingAnniversaries;

        const upcomingImportantDates = user.contacts.filter((contact) =>
          moment(contact.importantDates).isBetween(now, twoWeeksFromNow)
        );
        user.importantDates = upcomingImportantDates;

        const upcomingReminders = user.contacts.filter(
          (contact) =>
            moment(contact.reminder).isBetween(now, twoWeeksFromNow)
        );
        user.reminder = upcomingReminders;
      }

      const token = signToken(user);
      return { token, user };
    },
    createContact: async (parent, { id, contactInput }) => {
      console.log(id, contactInput); // { id: "61e75985920d77064a3ff74a" }
      try {
        const newContact = await Contact.create(contactInput);
        console.log(User);

        // const addToUserContact = await
        // prettier-ignore
        User.findOneAndUpdate(
          { _id: id },

          { $addToSet: { "contacts": newContact._id } },
          { new: true, runValidators: true }
        ).then((res) => {
          console.log(res);
          return res;
        });

        return addToUserContact;
      } catch (e) {
        return `Unable to save contacts due to error: ${e}`;
      }
    },
    //could use help with this one
    editContact: async (parent, args, context) => {
      try {
        const editContact = await Contact.findOneAndUpdate(
          { _id: context.contact._id },
          { $pull: { contacts: { _id: args._id } } },
          { new: true, runValidators: true }
        )
      } catch {

      }

    },
    deleteContact: async (parent, args, context) => {
      try {
        const removeContact = await User.findOneAndUpdate(
          { _id: context.contact._id },
          { $pull: { contacts: { _id: args._id } } },
          { new: true, runValidators: true }
        );
        return removeContact;
      } catch (e) {
        return `Unable to delete contact due to error: ${e}`;
      }
    },
  },
};

module.exports = resolvers;
