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
    createTodo?: Maybe<Todo>;
    removeTodo?: Maybe<Scalars["Boolean"]>;
};

export type MutationCreateTodoArgs = {
    description: Scalars["String"];
    title: Scalars["String"];
};

export type MutationRemoveTodoArgs = {
    id: Scalars["ID"];
};

export type Query = {
    __typename?: "Query";
    queryTodo?: Maybe<Array<Maybe<Todo>>>;
    welcome: Scalars["String"];
};

export type Todo = {
    __typename?: "Todo";
    description?: Maybe<Scalars["String"]>;
    id: Scalars["ID"];
    title?: Maybe<Scalars["String"]>;
};

export type QueryTodoOperationQueryVariables = Exact<{ [key: string]: never }>;

export type QueryTodoOperationQuery = {
    __typename?: "Query";
    queryTodo?: Array<{
        __typename?: "Todo";
        id: string;
        title?: string | null;
        description?: string | null;
    } | null> | null;
};

export type CreateTodoOperationMutationVariables = Exact<{
    title: Scalars["String"];
    description: Scalars["String"];
}>;

export type CreateTodoOperationMutation = {
    __typename?: "Mutation";
    createTodo?: { __typename?: "Todo"; id: string; title?: string | null; description?: string | null } | null;
};

export type RemoveTodoOperationMutationVariables = Exact<{
    id: Scalars["ID"];
}>;

export type RemoveTodoOperationMutation = { __typename?: "Mutation"; removeTodo?: boolean | null };

export type TodoFieldsFragment = {
    __typename?: "Todo";
    id: string;
    title?: string | null;
    description?: string | null;
};
