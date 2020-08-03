import React from "react";

import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import "./App.css";

function App() {
  return (
    <div id="main">
      <h1>Reading List</h1>
      <BookList />
      <hr />
      <AddBook />
    </div>
  );
}

export default App;
