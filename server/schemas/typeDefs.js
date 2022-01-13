const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Contact {
    _id: ID
    name: String
    nickname: String
    relationship: String
    email: String
    occupation: String
    phone: Int
    birthday: Int
  }
`;

module.exports = typeDefs;
