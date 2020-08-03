import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";

import { getAuthorsQuery, addBookMutation } from "../queries/queries";

const AddBook = () => {
  const [formData, setFormData] = useState({
    name: "",
    genre: "",
    authorId: "",
  });

  const { name, genre, authorId } = formData;

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [addBook, { data2 }] = useMutation(addBookMutation());
  const { loading, error, data } = useQuery(getAuthorsQuery());

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(formData);
    addBook({ variables: { name, genre, authorId } });
  };

  return (
    <form id="add-book" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="">Book name:</label>
        <input type="text" onChange={handleChange} value={name} name="name" />
      </div>
      <div className="field">
        <label htmlFor="">Genre:</label>
        <input type="text" onChange={handleChange} value={genre} name="genre" />
      </div>
      <div className="field">
        <label htmlFor="">Select author</label>
        <select onChange={handleChange} value={authorId} name="authorId">
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
