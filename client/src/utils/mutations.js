import gql from "graphql-tag";

export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      firstName
      lastName
    }
  }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      password: $password
      email: $email
    ) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const CREATE_CONTACT = gql`
mutation createContact($userId: ID!, $input: ContactInput!) {
  createContact(userId: $userId, input: $input) {
  _id
    firstName
    lastName
    contacts
  }
}
`

export const EDIT_CONTACT = gql`
  mutation editUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      password: $password
      email: $email
    ) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const DELETE_CONTACT = gql`
  mutation deleteUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      password: $password
      email: $email
    ) {
      token
      user {
        _id
        email
      }
    }
  }
`;

