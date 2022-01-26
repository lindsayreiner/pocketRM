import gql from 'graphql-tag';


export const GET_USER = gql`
{
   query getUser {
    _id
      firstName
      lastName
      email
    contacts {
        _id
        firstName
        lastName
        birthday
        anniversary
        importantDates
      }
    }
  }
`

export const GET_SINGLE_CONTACT = gql`
{
    query getSingleContact($id: ID!) {
    contact(id: $id) {
      _id
        firstName
        lastName
        relationship
        email
        phone
        address
        hometown
        birthday
        occupation
        company
        partner
        partnerName
        anniversary
        children
        childName
        childBirthday
        pets
        petName
        interestsHobbies
        importantDates
        giftIdeas
        metAt
      }
      }
    }
`

export const GET_ALL_CONTACTS = gql`
{
query getAllContacts ($userId: ID!)  {
  contacts(userID: $userId) {
    contacts {
      _id
      firstName
      lastName
    }
  }
  }
}`

export const GET_ALL_BIRTHDAYS = gql`
{
  query getAllBirthdays($birthdaysId: ID!) {
  birthdays(id: $birthdaysId) {
    birthdays {
      firstName
      lastName
      date
    }
  }
}
}
`


export const GET_ALL_ANNIVERSARY = gql`
{
  query Query($anniversariesId: ID!) {
  anniversaries(id: $anniversariesId) {
    anniversaries {
      firstName
      lastName
      date
    }
  }
}
}
`

export const GET_ALL_IMPORTANT = gql`
{
  query Query($importantDatesId: ID!) {
  importantDates(id: $importantDatesId) {
    important {
      firstName
      lastName
      date
    }
  }
}
}
`
