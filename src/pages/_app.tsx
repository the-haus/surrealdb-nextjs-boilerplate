import { ApolloProvider } from "@apollo/client";
import { withApollo } from "../apollo/withApollo";
import React, { FunctionComponent } from "react";
import { AppProps } from "../types/types";

function App({ Component, apollo, ...props }: AppProps) {
    const setLayout = Component.layout || (page => page);
    return <ApolloProvider client={apollo}>{setLayout(<Component {...props} />)}</ApolloProvider>;
}

export default withApollo({ ssr: true })(App as FunctionComponent);
