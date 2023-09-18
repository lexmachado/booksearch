import { gql } from '@apollo/client';


export const QUERY_TECH = gql`
  query book {
    book {
      _id
      name
    }
  }
`;

export const QUERY_MATCHUPS = gql`
  query matchups($_id: String) {
    matchups(_id: $_id) {
      _id
      book
      user
      index
      
    }
  }
`;
