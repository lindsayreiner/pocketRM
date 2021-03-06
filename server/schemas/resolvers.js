const { User, Contact, Notes, Reminder } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {

    user: async (parent, args, context) => {

      if (context.user) {
        const userData = await User.findOne({})
          .select('-__v -password')
          .populate('contacts')

        return userData;
      }

      throw new AuthenticationError('Not logged in')
    },


    contacts: async (parent, args,) => {

      console.log(args.id);
      const contactData = await User.findById({ _id: args.userID }).populate("contacts");
      console.log(contactData);
      // const userContacts = contactData.contacts;

      // const contactArray = await userContacts.array.forEach(element => {
      //   Contact.findById({ _id: userContacts._id })
      //   console.log(contactArray)

      // });
      // console.log(contactData)
      return contactData;

    },
    contact: async (parent, args) => {
      console.log(args.id)
      const singleContact = Contact.findOne({ _id: args.id }).populate();
      console.log(singleContact)
      return singleContact
    },
  },
  Mutation: {
    addUser: async (parent, { firstName, lastName, email, password }) => {
      const user = await User.create({ firstName, lastName, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email }).populate('contacts');
      if (!user) {
        throw new AuthenticationError("Incorrect email or password!");
      }
      const correctPassword = user.isCorrectPassword(password);
      if (!correctPassword) {
        throw new AuthenticationError("Wrong signon credentials");
      }


      // if (false){
      // const now = new Date();
      // const twoWeeksFromNow = moment().add(2, 'weeks');
      // const upcomingBirthdays = user.contacts.filter(contact => moment(contact.birthday).isBetween(now, twoWeeksFromNow));
      // user.birthdays = upcomingBirthdays;
      // }


      const token = signToken(user);
      return { token, user };
    },
    createContact: async (parent, { userId, input }, context) => {
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: userId },
          {
            $addToSet: { contacts: input },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      // If user attempts to execute this mutation and isn't logged in, throw an error
      throw new AuthenticationError('You need to be logged in!');
    },

    editContact: async (parent, { id, contactInput }) => {
      try {
        console.log(id)
        const editContact = await Contact.findByIdAndUpdate(
          { _id: id },
          {
            $set: {
              firstName: contactInput.firstName,
              lastName: contactInput.lastName,
              relationship: contactInput.relationship,
              email: contactInput.email,
              phone: contactInput.phone,
              address: contactInput.address,
              birthday: contactInput.birthday,
              occupation: contactInput.occupation,
              company: contactInput.company,
              partner: contactInput.partner,
              partnerName: contactInput.partnerName,
              children: contactInput.children,
              childName: contactInput.childName,
              childBirthday: contactInput.childBirthday,
              pets: contactInput.pets,
              petName: contactInput.petName,
              interestsHobbies: contactInput.interestsHobbies,
              importantDates: contactInput.importantDates,
              giftIdeas: contactInput.giftIdeas,
              metAt: contactInput.metAt,
            }
          }
        );

        return editContact;
      } catch (e) {
        return `Unable to delete contact due to error: ${e}`;
      }
    },
    deleteContact: async (parent, { id }) => {
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
