import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { IncomingHttpHeaders } from "http";
import { NextPage, NextPageContext } from "next";
import { AppContext } from "next/app";
import { NextRouter } from "next/dist/client/router";
import { ReactNode } from "react";

export type WithApolloOptions = {
    getDataFromTree?: (tree: ReactNode, context?: { [key: string]: any }) => Promise<any>;
    render?: (props: { Page: NextPage<any>; props: any }) => any;
    onError?: (error: Error, ctx?: NextPageContext) => void;
};

export type WithApolloState<TCache> = {
    data?: TCache;
};

export type WithApolloProps<TCache> = {
    apolloState: WithApolloState<TCache>;
    apollo: ApolloClient<TCache>;
    router: NextRouter;
};

export type InitApolloOptions<TCache> = {
    ctx?: NextPageContext;
    headers?: IncomingHttpHeaders;
    router?: NextRouter;
    initialState?: TCache;
};

export type InitApolloClient<TCache> = (options: InitApolloOptions<TCache>) => ApolloClient<TCache>;

export type ApolloPageContext<C = any> = {
    // Custom prop added by withApollo
    apolloClient: ApolloClient<C>;
} & NextPageContext;

export type ApolloAppContext<C = any> = {
    ctx: ApolloPageContext<C>;
    AppTree: any;
} & AppContext;

export type NextPageContextWithApollo = {
    apolloClient: ApolloClient<NormalizedCacheObject> | null;
    apolloState: NormalizedCacheObject;
    ctx: NextPageContextApp;
} & NextPageContext;

export type NextPageContextApp = NextPageContextWithApollo & AppContext;

export type ApolloContext<C = any> = ApolloPageContext<C> | ApolloAppContext<C>;
