const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
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
    phone: Int
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
    createdAt: String
    contacts: [Contact]
  }

  type Reminder {
    _id: ID
    name: String
    date: String
    time: Int
    users: [User]
    contacts: [Contact]
  }

  type Query {
    users: [User]
    contacts: [Contact]
    notes: [Notes]
    reminders: [Reminder]
  }

  input ContactInput{
    _id: ID
    firstName: String
    lastName: String
    relationship: String
    email: String
    phone: Int
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

  }
    type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): User
    addContact(contactInput: ContactInput, notes: String!, reminders: String!, users: String!): User
    deleteContact(contactId: ID!): User
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
