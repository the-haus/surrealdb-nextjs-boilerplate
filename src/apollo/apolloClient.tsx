import { ApolloClient, ApolloLink, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";
import Cookies from "universal-cookie";
import { NextPageContext } from "next";

const createApolloClient = (initialState: NormalizedCacheObject = {}, ctx: NextPageContext | undefined) => {
    const authLink = setContext(() => {
        const cookies = new Cookies(typeof window === "undefined" ? ctx?.req?.headers.cookie : null);
        const token = cookies.get("token");
        return {
            headers: {
                ...(token && {
                    authorization: `Bearer ${token}`
                })
            }
        };
    });
    return new ApolloClient({
        ssrMode: typeof window === "undefined",
        link: authLink.concat(
            ApolloLink.from([
                onError(({ graphQLErrors, networkError }) => {
                    if (graphQLErrors) {
                        console.log(graphQLErrors);
                    }
                    if (networkError)
                        console.log(`[Network error]: `, networkError, `. Backend is unreachable. Is it running?`);
                }),
                // this uses apollo-link-http under the hood, so all the options here come from that package
                createUploadLink({
                    uri:
                        typeof window !== "undefined"
                            ? `${process.env.NEXT_PUBLIC_HTTP_LINK}/graphql`
                            : `${process.env.NEXT_PUBLIC_HTTP_LINK_SERVER}/graphql`,
                    // Make sure that CORS and cookies work
                    fetchOptions: {
                        mode: "cors"
                    },
                    credentials: "omit"
                })
            ])
        ),
        cache: new InMemoryCache().restore(initialState || {})
    });
};

export default createApolloClient;
