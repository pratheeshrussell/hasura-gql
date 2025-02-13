import { ApolloClient, ApolloError, InMemoryCache  } from "@apollo/client/core/core.cjs";
import { OrderQueryQuery, OrderQueryQueryVariables } from "./generated/graphqlschema.js";
import ORDER_QUERY from "./queries/orderQuery.js";
const client = new ApolloClient({
    uri: 'http://localhost:8085/v1/graphql',
    headers: {
      "Content-Type": "application/json",
      "x-hasura-admin-secret": "admin123"
    },
    cache: new InMemoryCache(),
});

try {
    const { data } = await client.query<OrderQueryQuery, OrderQueryQueryVariables>({
      query: ORDER_QUERY,
      variables: { empid: 3 }
    });

    console.log("GraphQL Response:", JSON.stringify(data, null, 2));

  } catch (error: unknown) {
    if (error instanceof ApolloError) {
      console.error('Error fetching details:', error.graphQLErrors);
    }else{
      console.error('Error:', error);
    }
  }