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
  }
`;

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
    }
  }
`;


export const GET_ALL_BIRTHDAYS = gql`
{
  query allBirthdays {
    contact(id: $id) {
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
}
`
