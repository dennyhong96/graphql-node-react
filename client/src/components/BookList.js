import React from "react";
import { gql, useQuery } from "@apollo/client";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);
  return (
    <div>
      {loading ? (
        <p>Loading books...</p>
      ) : error ? (
        <p>Error...</p>
      ) : (
        <ul id="book-list">
          <li>Book name:</li>
          {data.books.map((book) => (
            <li key={book.id}>{book.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
