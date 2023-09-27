import { Member } from '@@graphql/types';
import { gql } from '@apollo/client';

/**
 * Types
 */
export type QueryMembersType = {
  allMembers: Member[];
};
export type QueryMemberType = {
  member: Member;
};

/**
 * Query: allMembers
 */
export const QueryMembers = gql`
  query QueryMembers {
    allMembers {
      id
      firstName
      lastName
      profilePictureUrl
      address {
        postalCode
        state
        country
        city
        addressLine
      }
    }
  }
`;

/**
 * Query: member
 */
export const QueryMember = gql`
  query QueryMember($id: ID!) {
    member(id: $id) {
      id
      email
      firstName
      lastName
      phoneNumber
      profilePictureUrl
      address {
        postalCode
        state
        country
        city
        addressLine
      }
    }
  }
`;
