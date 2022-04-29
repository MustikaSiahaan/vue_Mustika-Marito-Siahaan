import Vue from "vue";
import App from "./App.vue";

import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

// New Imports
import { split } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";

import VueApollo from "vue-apollo";
import router from "./router";

Vue.use(VueApollo);

const HASURA_SECRET = "zzlPOWRfLorbqGGPLJpiEftCSOysuxuh9AuXGBPlt5u25rfMLFeRtbCyWHpIR8Aa";

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: "https://resolved-feline-80.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret": HASURA_SECRET,
  },
});

// Create the subscription websocket link
const wsLink = new WebSocketLink({
  uri: "wss://resolved-feline-80.hasura.app/v1/graphql",
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        "x-hasura-admin-secret": HASURA_SECRET,
      },
    },
  },
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link,
  cache,
  connectToDevTools: true,
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

Vue.config.productionTip = false;

new Vue({
  apolloProvider,
  router,
  render: (h) => h(App),
}).$mount("#app");
