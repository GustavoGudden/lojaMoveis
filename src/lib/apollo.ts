import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl81n0gaa1me601up0evchjmz/master",
  cache: new InMemoryCache(),
});
