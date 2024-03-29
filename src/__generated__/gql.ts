/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    query AllTodos {\n        todos: allTodos {\n            id\n            title\n            completed\n        }\n    }\n": types.AllTodosDocument,
    "\n    mutation AddTodo($title: String!, $userId: ID!, $completed: Boolean!) {\n        newTodo: createTodo(title: $title, user_id: $userId, completed: $completed) {\n            id\n            title\n            completed\n            User {\n                id\n                name\n            }\n        }\n    }\n": types.AddTodoDocument,
    "\n    mutation UpdateTodo($id: ID!, $completed: Boolean) {\n        updateTodo(id: $id, completed: $completed) {\n            id\n            title\n            completed\n        }\n    }\n": types.UpdateTodoDocument,
    "\n    mutation DeleteTodo($id: ID!) {\n        removeTodo(id: $id) {\n            id\n        }\n    }\n": types.DeleteTodoDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query AllTodos {\n        todos: allTodos {\n            id\n            title\n            completed\n        }\n    }\n"): (typeof documents)["\n    query AllTodos {\n        todos: allTodos {\n            id\n            title\n            completed\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation AddTodo($title: String!, $userId: ID!, $completed: Boolean!) {\n        newTodo: createTodo(title: $title, user_id: $userId, completed: $completed) {\n            id\n            title\n            completed\n            User {\n                id\n                name\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation AddTodo($title: String!, $userId: ID!, $completed: Boolean!) {\n        newTodo: createTodo(title: $title, user_id: $userId, completed: $completed) {\n            id\n            title\n            completed\n            User {\n                id\n                name\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation UpdateTodo($id: ID!, $completed: Boolean) {\n        updateTodo(id: $id, completed: $completed) {\n            id\n            title\n            completed\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateTodo($id: ID!, $completed: Boolean) {\n        updateTodo(id: $id, completed: $completed) {\n            id\n            title\n            completed\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation DeleteTodo($id: ID!) {\n        removeTodo(id: $id) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation DeleteTodo($id: ID!) {\n        removeTodo(id: $id) {\n            id\n        }\n    }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;