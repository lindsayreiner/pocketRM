import gql from 'graphql-tag';

export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
    }
  }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $password: String!, $email: String!) {
  addUser(firstName: $firstName, lastName: $lastName, password: $password, email: $email) {
    
    user {
      _id
      username
      email
      contacts {
        _id
        firstName
        lastName
        relationship
        email
        phone
        address
        birthday
        occupation
        company
        partner
        partnerName
        children
        childName
        childBirthday
        pets
        petName
        interestsHobbies
        importantDates
        giftIdeas
        metAt
        notes
        reminders
      }
    }
    token
  }
}
`;

//add mutations for contacts here

