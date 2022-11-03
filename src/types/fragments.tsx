import * as Types from "./schema.d";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
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
    baseOptions?: Apollo.QueryHookOptions<Types.QueryTodoOperationQuery, Types.QueryTodoOperationQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<Types.QueryTodoOperationQuery, Types.QueryTodoOperationQueryVariables>(
        QueryTodoOperationDocument,
        options
    );
}
export function useQueryTodoOperationLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<Types.QueryTodoOperationQuery, Types.QueryTodoOperationQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<Types.QueryTodoOperationQuery, Types.QueryTodoOperationQueryVariables>(
        QueryTodoOperationDocument,
        options
    );
}
export type QueryTodoOperationQueryHookResult = ReturnType<typeof useQueryTodoOperationQuery>;
export type QueryTodoOperationLazyQueryHookResult = ReturnType<typeof useQueryTodoOperationLazyQuery>;
export type QueryTodoOperationQueryResult = Apollo.QueryResult<
    Types.QueryTodoOperationQuery,
    Types.QueryTodoOperationQueryVariables
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
    Types.CreateTodoOperationMutation,
    Types.CreateTodoOperationMutationVariables
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
    baseOptions?: Apollo.MutationHookOptions<
        Types.CreateTodoOperationMutation,
        Types.CreateTodoOperationMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<Types.CreateTodoOperationMutation, Types.CreateTodoOperationMutationVariables>(
        CreateTodoOperationDocument,
        options
    );
}
export type CreateTodoOperationMutationHookResult = ReturnType<typeof useCreateTodoOperationMutation>;
export type CreateTodoOperationMutationResult = Apollo.MutationResult<Types.CreateTodoOperationMutation>;
export type CreateTodoOperationMutationOptions = Apollo.BaseMutationOptions<
    Types.CreateTodoOperationMutation,
    Types.CreateTodoOperationMutationVariables
>;
export const RemoveTodoOperationDocument = gql`
    mutation removeTodoOperation($id: ID!) {
        removeTodo(id: $id)
    }
`;
export type RemoveTodoOperationMutationFn = Apollo.MutationFunction<
    Types.RemoveTodoOperationMutation,
    Types.RemoveTodoOperationMutationVariables
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
    baseOptions?: Apollo.MutationHookOptions<
        Types.RemoveTodoOperationMutation,
        Types.RemoveTodoOperationMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<Types.RemoveTodoOperationMutation, Types.RemoveTodoOperationMutationVariables>(
        RemoveTodoOperationDocument,
        options
    );
}
export type RemoveTodoOperationMutationHookResult = ReturnType<typeof useRemoveTodoOperationMutation>;
export type RemoveTodoOperationMutationResult = Apollo.MutationResult<Types.RemoveTodoOperationMutation>;
export type RemoveTodoOperationMutationOptions = Apollo.BaseMutationOptions<
    Types.RemoveTodoOperationMutation,
    Types.RemoveTodoOperationMutationVariables
>;
