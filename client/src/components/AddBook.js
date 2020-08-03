import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";

import { getAuthorsQuery } from "../queries/queries";

const AddBook = () => {
  // const { formData, setFormData } = useState({
  //   name: "",
  //   genre: "",
  //   authorId: "",
  // });

  // const { name, genre, authorId } = formData;

  const { loading, error, data } = useQuery(getAuthorsQuery());
  return (
    <form id="add-book">
      <div className="field">
        <label htmlFor="">Book name:</label>
        <input type="text" />
      </div>
      <div className="field">
        <label htmlFor="">Genre:</label>
        <input type="text" />
      </div>
      <div className="field">
        <label htmlFor="">Select author</label>
        <select>
          <option>Select author</option>
          {!loading &&
            !error &&
            data.authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
        </select>
      </div>
      <button>Add</button>
    </form>
  );
};

export default AddBook;
