require("dotenv").config({ path: "./config/config.env" });
const express = require("express");

const { graphqlHTTP } = require("express-graphql");

const connectDB = require("./config/db");

const app = express();
connectDB();

const schema = app.use("/graphql", graphqlHTTP({}));

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server up on port ${port}...`));
