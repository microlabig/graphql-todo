import { gql } from "../__generated__/gql";

export const ALL_TODO = gql(`
    query AllTodos {
        todos: allTodos {
            id
            title
            completed
        }
    }
`);
