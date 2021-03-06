import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_FRIEND = gql`
  mutation addFriend($id: ID!) {
    addFriend(friendId: $id) {
      _id
      username
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;

export const ADD_TRIP = gql`
  mutation addTrip($name: String!, $location: String, $budget: String, $startDate: String, $endDate: String, $transportation: String, $members: [ID]) {
    addTrip(name: $name, location: $location, budget: $budget, startDate: $startDate, endDate: $endDate transportation: $transportation, members: $members) {
      creator
      _id
      name
      location
      budget
      transportation
      startDate
      endDate
      createdAt
      members {
        _id
      }
      status
      budget
    }
  }
`;

export const DELETE_TRIP = gql`
  mutation deleteTrip($_id: ID!) {
    deleteTrip(_id: $_id) {
      _id
    }
  }
`;

export const UPDATE_TRIP = gql`
  mutation updateTrip($id: ID!, $location: String, $transportation: String, $budget: String, $members: [ID], $startDate: String, $endDate: String) {
    updateTrip(_id: $id, location: $location, transportation: $transportation, budget: $budget, members: $members, startDate: $startDate, endDate: $endDate) {
      _id
      location
      startDate
      endDate
      transportation
      budget
      members {
        _id
        email
        username
      }
    }
  }
`;

export const ADD_EXPENSE = gql`
  mutation addExpense($tripId: ID!, $item: String!, $price: String!) {
    addExpense(tripId: $tripId, item: $item, price: $price) {
      _id
      balance
      borrowers {
        username
      }
      item
      paidOff
      payer {
        username
      }
      totalPrice
      pricePerPerson
    }
  }
`;

export const DELETE_EXPENSE = gql`
  mutation deleteExpense($id: ID!) {
    deleteExpense(_id: $id) {
      _id
    }
  }
`;

export const PAY_OFF_EXPENSE = gql`
  mutation payOffExpense($id: ID!) {
    payOffExpense(_id: $id) {
      _id
      item
      trip {
        name
        location
      }
    }
  }
`;

export const REMOVE_TRIP_MEMBER = gql`
  mutation removeTripMember($memberId: ID!, $tripId: ID!) {
    removeTripMember(memberId: $memberId, tripId: $tripId) {
      _id
      name
      location
      members {
        username
      }
    }
  }
`;
