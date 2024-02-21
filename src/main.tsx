import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { client } from "./apollo/client";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ChakraProvider>
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
        </ChakraProvider>
    </React.StrictMode>
);
