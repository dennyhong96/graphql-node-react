const { GraphQLObjectType, GraphQLSchema, GraphQLString } = require("graphql");

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        // Get data from DB
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
