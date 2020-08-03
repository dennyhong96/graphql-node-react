import { gql } from "@apollo/client";

export const getBooksQuery = () => gql`
  query {
    books {
      name
      id
    }
  }
`;

export const getAuthorsQuery = () => gql`
  query {
    authors {
      name
      id
    }
  }
`;
