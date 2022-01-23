const { User, Contact, Notes, Reminder } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({})
          .select("-__v -password")
          .populate("contacts");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },

    contacts: async (parent, args,) => {

      console.log(args.id);
      const contactData =  await User.findById({ _id: args.id }).populate('contacts');
      
      // const contactsArray = await contactData.contacts.map(contact => {
      //    Contact.findById({_id: contact._id})
      // })
      // console.log(contactsArray)
      return contactData;
    },
    contact: async (parent, args) => {
      return Contact.findOne({ _id: args.id }).populate("notes");
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
      if (!user) {
        throw new AuthenticationError("Incorrect email or password!");
      }
      const correctPassword = user.isCorrectPassword(password);
      if (!correctPassword) {
        throw new AuthenticationError("Wrong signon credentials");
      }

      const now = new Date();
      const twoWeeksFromNow = moment().add(2, "weeks");
      const upcomingBirthdays = user.contacts.filter((contact) =>
        moment(contact.birthday).isBetween(now, twoWeeksFromNow)
      );
      user.birthdays = upcomingBirthdays;

      const token = signToken(user);
      return { token, user };
    },
    addContact: async (parent, { id, contactInput }) => {
      console.log(id, contactInput); // { id: "61e75985920d77064a3ff74a" }
      try {
        const newContact = await Contact.create(contactInput);
        console.log(newContact);
        // const addToUserContact = await
        // prettier-ignore
        const addToUserContact = await User.findOneAndUpdate(
          { _id: id },
          { $addToSet: { "contacts": newContact._id } },
          { new: true, runValidators: true }
        );
        return addToUserContact;
      } catch (e) {
        return `Unable to save contacts due to error: ${e}`;
      }
    },
    deleteContact: async (parent, {id}) => {
      try {
        console.log(id)
        const removeFromUserContact = await Contact.findOneAndRemove(
          { _id: id }
        );
      
        return removeFromUserContact;
      } catch (e) {
        return `Unable to delete contact due to error: ${e}`;
      }
    },
  },
};

module.exports = resolvers;
