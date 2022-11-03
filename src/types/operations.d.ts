export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    JSON: any;
    JSONObject: any;
};

export type Mutation = {
    __typename?: "Mutation";
    createPerson?: Maybe<Person>;
};

export type MutationCreatePersonArgs = {
    firstName: Scalars["String"];
    lastName: Scalars["String"];
};

export type Person = {
    __typename?: "Person";
    firstName?: Maybe<Scalars["String"]>;
    id: Scalars["ID"];
    lastName?: Maybe<Scalars["String"]>;
};

export type Query = {
    __typename?: "Query";
    queryPersons?: Maybe<Array<Maybe<Person>>>;
};

export type Subscriptions = {
    __typename?: "Subscriptions";
    watchPerson?: Maybe<Person>;
};

export type QueryPersonOperationQueryVariables = Exact<{ [key: string]: never }>;

export type QueryPersonOperationQuery = {
    __typename?: "Query";
    queryPersons?: Array<{
        __typename?: "Person";
        id: string;
        firstName?: string | null;
        lastName?: string | null;
    } | null> | null;
};

export type UserFieldsFragment = {
    __typename?: "Person";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
};
