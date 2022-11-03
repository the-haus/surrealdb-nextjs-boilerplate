import { NextComponentType } from "next/dist/shared/lib/utils";
import { ReactNode } from "react";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

export type AppProps = {
    Component: NextComponentType & {
        layout: (page: ReactNode) => ReactNode;
    };
    apollo: ApolloClient<NormalizedCacheObject>;
};
