const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    contacts: [Contact]
  }

  type Contact {
    _id: ID
    firstName: String
    lastName: String
    relationship: String
    email: String
    phone: String
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
  }

  type Notes {
    _id: ID
    notes: String
    createdAt: String
  }

  type Reminder {
    _id: ID
    name: String
    date: String
    time: Int
  }

  type Query {
    users: [User]
    user(id: ID!): User
    notes: [Notes]
    remindersContact: [Contact]
    remindersUser: [User]
  }

  input ContactInput {
    firstName: String!
    lastName: String!
    relationship: String!
    email: String
    phone: String!
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
    metAt: String!
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): User
    addContact(id: ID!, contactInput: ContactInput!): Contact
    deleteContact(contactId: ID!): Contact
  }
  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
// relationship: String
// occupation: String
// phone: Int
// birthday: Int
