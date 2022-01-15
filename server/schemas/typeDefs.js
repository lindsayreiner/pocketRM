const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    firstName: String
    lastName: String
    email: String
    password: String
    contacts: [Contact]
    reminders: [Reminder]
  }

  type Contact {
    _id: ID
    firstName: String
    lastName: String
    relationship: String
    email: String
    phone: Number
    address: String
    birthday: String
    occupation: String
    company: String
    partner: Boolean
    partnerName: String
    children: Boolean
    childName: String
    childBirthday: String
    pets: Boolean
    petName: String
    interestsHobbies: String
    importantDates: String
    giftIdeas: String
    metAt: String
    notes: [Notes]
    reminders: [Reminder]
    users: [User]
  }

  type Notes {
    _id: ID
    notes: String
    createdAt: Date
    contacts: [Contact]
  }

  type Reminder {
    _id: ID
    name: String
    date: Date
    time: Number
    users: [User]
    contacts: [Contact]
  }

  type Query {
    users: [User]
    contacts: [Contact]
    notes: [Notes]
    reminders: [Reminder]
  }
`;

module.exports = typeDefs;
// relationship: String
// occupation: String
// phone: Int
// birthday: Int
