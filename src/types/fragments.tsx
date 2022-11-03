import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
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

export const TodoFieldsFragmentDoc = gql`
    fragment TodoFields on Todo {
        id
        title
        description
    }
`;
export const QueryTodoOperationDocument = gql`
    query queryTodoOperation {
        queryTodo {
            ...TodoFields
        }
    }
    ${TodoFieldsFragmentDoc}
`;

/**
 * __useQueryTodoOperationQuery__
 *
 * To run a query within a React component, call `useQueryTodoOperationQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryTodoOperationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryTodoOperationQuery({
 *   variables: {
 *   },
 * });
 */
export function useQueryTodoOperationQuery(
    baseOptions?: Apollo.QueryHookOptions<QueryTodoOperationQuery, QueryTodoOperationQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<QueryTodoOperationQuery, QueryTodoOperationQueryVariables>(
        QueryTodoOperationDocument,
        options
    );
}
export function useQueryTodoOperationLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<QueryTodoOperationQuery, QueryTodoOperationQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<QueryTodoOperationQuery, QueryTodoOperationQueryVariables>(
        QueryTodoOperationDocument,
        options
    );
}
export type QueryTodoOperationQueryHookResult = ReturnType<typeof useQueryTodoOperationQuery>;
export type QueryTodoOperationLazyQueryHookResult = ReturnType<typeof useQueryTodoOperationLazyQuery>;
export type QueryTodoOperationQueryResult = Apollo.QueryResult<
    QueryTodoOperationQuery,
    QueryTodoOperationQueryVariables
>;
export const CreateTodoOperationDocument = gql`
    mutation createTodoOperation($title: String!, $description: String!) {
        createTodo(title: $title, description: $description) {
            ...TodoFields
        }
    }
    ${TodoFieldsFragmentDoc}
`;
export type CreateTodoOperationMutationFn = Apollo.MutationFunction<
    CreateTodoOperationMutation,
    CreateTodoOperationMutationVariables
>;

/**
 * __useCreateTodoOperationMutation__
 *
 * To run a mutation, you first call `useCreateTodoOperationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoOperationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoOperationMutation, { data, loading, error }] = useCreateTodoOperationMutation({
 *   variables: {
 *      title: // value for 'title'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useCreateTodoOperationMutation(
    baseOptions?: Apollo.MutationHookOptions<CreateTodoOperationMutation, CreateTodoOperationMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<CreateTodoOperationMutation, CreateTodoOperationMutationVariables>(
        CreateTodoOperationDocument,
        options
    );
}
export type CreateTodoOperationMutationHookResult = ReturnType<typeof useCreateTodoOperationMutation>;
export type CreateTodoOperationMutationResult = Apollo.MutationResult<CreateTodoOperationMutation>;
export type CreateTodoOperationMutationOptions = Apollo.BaseMutationOptions<
    CreateTodoOperationMutation,
    CreateTodoOperationMutationVariables
>;
export const RemoveTodoOperationDocument = gql`
    mutation removeTodoOperation($id: ID!) {
        removeTodo(id: $id)
    }
`;
export type RemoveTodoOperationMutationFn = Apollo.MutationFunction<
    RemoveTodoOperationMutation,
    RemoveTodoOperationMutationVariables
>;

/**
 * __useRemoveTodoOperationMutation__
 *
 * To run a mutation, you first call `useRemoveTodoOperationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveTodoOperationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeTodoOperationMutation, { data, loading, error }] = useRemoveTodoOperationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveTodoOperationMutation(
    baseOptions?: Apollo.MutationHookOptions<RemoveTodoOperationMutation, RemoveTodoOperationMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<RemoveTodoOperationMutation, RemoveTodoOperationMutationVariables>(
        RemoveTodoOperationDocument,
        options
    );
}
export type RemoveTodoOperationMutationHookResult = ReturnType<typeof useRemoveTodoOperationMutation>;
export type RemoveTodoOperationMutationResult = Apollo.MutationResult<RemoveTodoOperationMutation>;
export type RemoveTodoOperationMutationOptions = Apollo.BaseMutationOptions<
    RemoveTodoOperationMutation,
    RemoveTodoOperationMutationVariables
>;
