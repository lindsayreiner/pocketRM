import gql from 'graphql-tag';

export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      firstName
      lastName
      birthdays
      anniversaries
      important
      reminders
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

