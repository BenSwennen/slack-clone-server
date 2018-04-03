import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";
import typeDefs from "./schema";
import resolvers from "./resolvers";

const PORT = 3000;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();

const endpointURL = "/graphql";

app.use(endpointURL, bodyParser.json(), graphqlExpress({ schema }));
app.use("/graphiql", graphiqlExpress({ endpointURL }));

app.listen(PORT);
