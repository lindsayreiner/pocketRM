const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
    calendar: [Calendar]
    reminder: [Reminder]
    contacts: [Contact]
  }

  type Contact {
    _id: ID
    name: String
    relationship: String
    email: String
    phone: Int
    address: String
    birthday: String
    occupation: String
    married: [Married]
    children: [Children]
    pets: [Pet]
    interestsHobbies: String
    importantDates: String
    giftIdeas: String
    notes: String
  }

  type Married {
    _id: ID
    spouseName: String
    anniversary: String
  }

  type Children {
    _id: ID
    name: String
    birthday: String
  }

  type Pet {
    _id: ID
    name: String
    birthday: String
  }

  type Calendar {
    _id: ID
  }

  type Reminder {
    _id: ID
    name: String
    date: String
    time: Int
  }

  type Query {
    users: [User]
    contacts: [Contact]
    calendar: [Calendar]
    reminders: [Reminder]
  }
`;

module.exports = typeDefs;
// relationship: String
// occupation: String
// phone: Int
// birthday: Int
