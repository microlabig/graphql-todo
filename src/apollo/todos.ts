import { gql } from "../__generated__/gql";
import { graphql } from "gql.tada";

export const ALL_TODO = gql(`
    query AllTodos {
        todos: allTodos {
            id
            title
            completed
        }
    }
`);

export const ADD_TODO = gql(`
    mutation AddTodo($title: String!, $userId: ID!, $completed: Boolean!) {
        newTodo: createTodo(title: $title, user_id: $userId, completed: $completed) {
            id
            title
            completed
            User {
                id
                name
            }
        }
    }
`);

export const UPDATE_TODO = gql(`
    mutation UpdateTodo($id: ID!, $completed: Boolean) {
        updateTodo(id: $id, completed: $completed) {
            id
            title
            completed
        }
    }
`);

export const DELETE_TODO = gql(`
    mutation DeleteTodo($id: ID!) {
        removeTodo(id: $id) {
            id
        }
    }
`);

// gql.tada example
export const GET_TODO = graphql(`
    query GetTodo($id: ID!) {
        Todo(id: $id) {
            id
            title
            completed
        }
    }
`);
