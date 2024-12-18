import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import GridBackground from "./components/ui/GridBackground.jsx";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: `${import.meta.env.VITE_SERVER_URL}/graphql`, // URL of of our graphql server
  cache: new InMemoryCache(), // Apollo Client uses to cache query results after fetching them.
  credentials: "include", // This tells Apollo Client to send cookies along with every request to the server.
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GridBackground>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </GridBackground>
    </BrowserRouter>
  </StrictMode>
);
