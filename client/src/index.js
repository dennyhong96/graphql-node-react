import React from "react";
import ReactDOM from "react-dom";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import App from "./App";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

(async () => {
  const result = await client.query({
    query: gql`
      query {
        books {
          name
        }
      }
    `,
  });
  console.log(result);
})();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
