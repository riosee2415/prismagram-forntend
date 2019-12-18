import ApolloClinet from "apollo-boost";
import { defaults, resolvers } from "./LocalState";

export default new ApolloClinet({
  uri: "http://localhost:4000",
  clientState: {
    defaults: defaults,
    resolvers
  }
});
