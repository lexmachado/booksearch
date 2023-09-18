import { gql } from '@apollo/client';

export const CREATE_MATCHUP = gql`
  mutation createMatchup($book: String!, $index: String!) {
    createMatchup(tech1: $book, $index: $user) {
      _id
      book
      index
    }
  }
`;

export const CREATE_VOTE = gql`
  mutation createVote($_id: String!, $techNum: Int!) {
    createVote(_id: $_id, bookNum: $userhNum) {
      _id
      book
      index
      user
    
    }
  }
`;
